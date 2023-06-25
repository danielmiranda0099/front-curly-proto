import { Container } from "@/components";
import { CustomForm } from "@/components/form";
import { Modal } from "@/components/modal";

const fields = [
  [
    {
      name: "name",
      type: "text",
      label: "Nombre",
      required: true,
      fullWidth: true,
    },
  ],
  [
    {
      name: "stock",
      type: "number",
      label: "Stock",
      defaultValue: 0
    },
  ],
  [
    {
      name: "priceSelling",
      type: "number",
      label: "Precio Venta",
    },
    {
      name: "pricePurcharce",
      type: "number",
      label: "Precio Compra",
      fullWidth: true,
    },
  ],
];


export function FormProduct({valueFields, setValueFields, onSubmitProduct, openFormProduct, setOpenFormProduct, labelButton, textHeader}) {
  return (
    <Modal open={openFormProduct} onClose={setOpenFormProduct} textHeader={textHeader}>
      <Container>
        <CustomForm
          fields={fields}
          valueFields={valueFields}
          setValueFields={setValueFields}
          labelButton={labelButton}
          handleFormSubmit={onSubmitProduct}
          onClose={setOpenFormProduct}
        />
      </Container>
    </Modal>
  );
}
