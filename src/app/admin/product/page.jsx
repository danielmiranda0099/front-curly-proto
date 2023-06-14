"use client";
import { Container } from "@/components";
import { AuthContext } from "@/context/Auth.context";
import { useContext } from "react";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
//TODO: RESTRINGIR USERS
export default function ProductPage() {
  const { user, authTokens } = useContext(AuthContext);
  const [data, setData] = useState([
    { id: 1, name: "John", age: 25 },
    { id: 2, name: "Jane", age: 30 },
    { id: 3, name: "Mike", age: 20 },
  ]);
  let [products, setProducts] = useState([]);
  let [productsKeys, setProductsKeys] = useState([]);

  const [sortConfig, setSortConfig] = useState(null);

  useEffect(() => {
    getProducts();
  }, []);

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
        let formatedData = data.map(
          ({
            id,
            name,
            stock,
            price_for_selling,
            price_for_purchase,
            description,
            category,
            percentage_gain,
          }) => ({
            id,
            nombre: name,
            stock,
            "precio de venta": price_for_selling,
            "pecio de compra": price_for_purchase,
            descripcion: description,
            categoria: category,
            ganancia: percentage_gain,
          })
        );
        setProducts(formatedData);
        setProductsKeys(Object.keys(formatedData[0]));
      } else if (response.statusText === "Unauthorized") {
        console.log("estoy Unauthorized");
      }
    } catch (error) {
      console.log("error inesérado, esperado");
    }
  };

  const handleSort = (columnName) => {
    let direction = "asc";

    if (
      sortConfig &&
      sortConfig.column === columnName &&
      sortConfig.direction === "asc"
    ) {
      direction = "desc";
    }

    const sortedData = [...products].sort((a, b) => {
      if (a[columnName] < b[columnName]) {
        return direction === "asc" ? -1 : 1;
      }
      if (a[columnName] > b[columnName]) {
        return direction === "asc" ? 1 : -1;
      }
      return 0;
    });

    setProducts(sortedData);
    setSortConfig({ column: columnName, direction });
  };

  return (
    <>
      <Container>
        <Table responsive striped bordered className="table">
          <thead>
            <tr>
              <th onClick={() => handleSort("id")}>ID</th>
              <th onClick={() => handleSort("name")}>Name</th>
              <th onClick={() => handleSort("age")}>Age</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>

      <Container>
        <Table responsive striped bordered className="table">
          <thead>
            <tr>
              {productsKeys?.map((item) => (
                <th onClick={() => handleSort(item)}>{item}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {products?.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.nombre}</td>
                <td>{item.stock}</td>
                <td>{item["precio de venta"]}</td>
                <td>{item["pecio de compra"]}</td>
                <td>{item.descripcion}</td>
                <td>{item.categoria}</td>
                <td>{item.ganancia}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
      <Container>
        {products && <pre>{JSON.stringify(products, null, 2)}</pre>}
        {productsKeys && <pre>{JSON.stringify(productsKeys, null, 2)}</pre>}
      </Container>
    </>
  );
}
