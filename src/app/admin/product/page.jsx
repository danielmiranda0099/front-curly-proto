"use client";
import { useContext, useEffect, useMemo, useState } from "react";

//MRT Imports
//import MaterialReactTable from 'material-react-table'; //default import deprecated
import { MaterialReactTable } from "material-react-table";

//Material UI Imports
import { Box, Button, IconButton, ListItemIcon, MenuItem } from "@mui/material";
//Icons Imports
import { AccountCircle, Send } from "@mui/icons-material";

import { Container } from "@/components";
import { AuthContext } from "@/context/Auth.context";
import { EditIcon, PlusIcon, TrashIcon } from "@/icons";
import { FormProduct } from "@/sections/formProduct";

export default function ProductPage() {
  let [openFormProduct, setOpenFormProduct] = useState(false);
  let [openFormUpdateProduct, setOpenFormUpdateProduct] = useState(false);
  let [labelButtonFormProduct, setLabelButtonFormProduct] = useState("");
  let [textHeaderFormProduct, setTextHeaderFormProduct] = useState("");
  let [dataProducts, setDataProducts] = useState({
    id: null,
    name: null,
    stock: null,
    priceSelling: null,
    pricePurcharce: null,
  });
  const [products, setProducts] = useState([]);

  const { authTokens } = useContext(AuthContext);

  const getProducts = async () => {
    try {
      let response = await fetch("http://127.0.0.1:8000/products/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + String(authTokens.access),
        },
      });
      let data = await response.json();
      console.log(data);
      if (response.status === 200) {
        setProducts(data);
      } else if (response.statusText === "Unauthorized") {
        console.log("estoy Unauthorized");
      }
    } catch (error) {
      console.log("error inesérado, esperado");
    }
  };

  const getProduct = async (id) => {
    try {
      let response = await fetch(`http://127.0.0.1:8000/products/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + String(authTokens.access),
        },
      });
      if (response.status === 200) {
        let data = await response.json();
        console.log(data);
        return data;
      } else if (response.statusText === "Unauthorized") {
        console.log("estoy Unauthorized");
      }
    } catch (error) {
      console.log("error inesérado, esperado");
    }
  };

  const createProduct = async () => {
    setOpenFormProduct(false);
    console.log("oli formulario");
    console.log(dataProducts);
    try {
      let response = await fetch("http://127.0.0.1:8000/products/", {
        method: "POST",
        body: JSON.stringify({
          name: dataProducts.name,
          stock: dataProducts.stock,
          price_for_selling: dataProducts.priceSelling,
          price_for_purcharse: dataProducts.pricePurcharce,
        }),
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + String(authTokens.access),
        },
      });
      let data = await response.json();
      console.log(data);
      if (response.status >= 200 && response.status <= 399) {
        console.log("todo bien");
        getProducts();
      } else if (response.statusText === "Unauthorized") {
        console.log("estoy Unauthorized");
      }
    } catch (error) {
      console.log("error inesérado, esperado");
    }
  };

  const updateProduct = async (id) => {
    try {
      console.log(dataProducts);
      let response = await fetch(`http://127.0.0.1:8000/products/${id}/`, {
        method: "PATCH",
        body: JSON.stringify({
          name: dataProducts.name,
          price_for_selling: dataProducts.priceSelling,
          price_for_purcharse: dataProducts.pricePurcharce,
          stock: dataProducts.stock,
        }),
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + String(authTokens.access),
        },
      });

      if (response.status >= 200 && response.status <= 399) {
        console.log("todo bien EDITANDO");
        getProducts();
      } else if (response.statusText === "Unauthorized") {
        console.log("estoy Unauthorized");
      }
    } catch (error) {
      console.log("error inesérado, esperado");
    }
  };

  const deleteProduct = async (id) => {
    try {
      let response = await fetch(`http://127.0.0.1:8000/products/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + String(authTokens.access),
        },
      });

      if (response.status >= 200) {
        console.log("todo bien eliminando");
        getProducts();
      } else if (response.statusText === "Unauthorized") {
        console.log("estoy Unauthorized");
      }
    } catch (error) {
      console.log("error inesérado, esperado");
    }
  };

  const handleUpdate = async (id) => {
    setOpenFormUpdateProduct(true);
    setLabelButtonFormProduct("Editar");
    setTextHeaderFormProduct("Editar Producto");
    let product = await getProduct(id);
    console.log(product);
    setDataProducts({
      id: null,
      name: null,
      stock: null,
      priceSelling: null,
      pricePurcharce: null,
    });
    setDataProducts({
      id: product.id,
      name: product.name,
      stock: product.stock,
      priceSelling: product.price_for_selling,
      pricePurcharce: product.price_for_purchase,
    });
  };

  const columns = useMemo(
    () => [
      {
        header: "Actions",
        Cell: ({ row }) => {
          return (
            <div>
              <IconButton
                aria-label="edit"
                onClick={() => handleUpdate(row.original.id)}
                sx={{
                  backgroundColor: "#03a9f4",
                  borderRadius: "8px",
                }}
              >
                <EditIcon />
              </IconButton>
              <IconButton
                aria-label="delete"
                onClick={() => deleteProduct(row.original.id)}
                sx={{
                  backgroundColor: "#d50000",
                  borderRadius: "8px",
                }}
              >
                <TrashIcon />
              </IconButton>
            </div>
          );
        },
      },
      {
        accessorKey: "id", //access nested data with dot notation
        header: "ID",
        size: 50,
      },
      {
        accessorKey: "name",
        header: "Nombre",
        size: 150,
      },
      {
        accessorKey: "percentage_gain", //normal accessorKey
        header: "Ganancia",
        size: 200,
      },
      {
        accessorKey: "price_for_selling",
        header: "Precio Venta",
        size: 150,
      },
      {
        accessorKey: "price_for_purchase",
        header: "Precio Compra",
        size: 150,
      },
      {
        accessorKey: "stock",
        header: "Stock",
        size: 150,
        Cell: ({ cell }) => (
          <Box
            component="span"
            sx={(theme) => ({
              backgroundColor:
                cell.getValue() < 3
                  ? theme.palette.error.dark
                  : cell.getValue() >= 3 && cell.getValue() < 10
                  ? theme.palette.warning.dark
                  : theme.palette.success.dark,
              borderRadius: "0.25rem",
              color: "#fff",
              maxWidth: "9ch",
              p: "0.25rem",
            })}
          >
            {cell.getValue() >= 0 ? cell.getValue() : "-"}
          </Box>
        ),
      },
    ],
    []
  );

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <Container>
        <Button
          variant="contained"
          startIcon={<PlusIcon />}
          onClick={() => {
            setOpenFormProduct(!openFormProduct);
            setLabelButtonFormProduct("Crear");
            setTextHeaderFormProduct("Crear Nuevo Producto")
            setDataProducts({
              name: null,
              stock: null,
              priceSelling: null,
              pricePurcharce: null,
            });
          }}
        >
          Nuevo
        </Button>
      </Container>

      <FormProduct
        valueFields={dataProducts}
        setValueFields={setDataProducts}
        openFormProduct={openFormProduct}
        setOpenFormProduct={setOpenFormProduct}
        labelButton={labelButtonFormProduct}
        textHeader={textHeaderFormProduct}
        onSubmitProduct={createProduct}
      />

      <FormProduct
        valueFields={dataProducts}
        setValueFields={setDataProducts}
        openFormProduct={openFormUpdateProduct}
        setOpenFormProduct={setOpenFormUpdateProduct}
        labelButton={labelButtonFormProduct}
        textHeader={textHeaderFormProduct}
        onSubmitProduct={() => {
          updateProduct(dataProducts.id);
          setOpenFormUpdateProduct(false);
        }}
      />

      <MaterialReactTable
        columns={columns}
        data={products}
        enableColumnResizing
        renderRowActionMenuItems={({ closeMenu }) => [
          <MenuItem
            key={0}
            onClick={() => {
              // View profile logic...
              closeMenu();
            }}
            sx={{ m: 0 }}
          >
            <ListItemIcon>
              <AccountCircle />
            </ListItemIcon>
            View Profile
          </MenuItem>,
          <MenuItem
            key={1}
            onClick={() => {
              // Send email logic...
              closeMenu();
            }}
            sx={{ m: 0 }}
          >
            <ListItemIcon>
              <Send />
            </ListItemIcon>
            Send Email
          </MenuItem>,
        ]}
      />
    </>
  );
}
