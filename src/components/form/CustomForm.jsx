import { Button } from "@mui/material";
import { RenderFields } from "./RenderFields";

export function CustomForm({
  fields,
  valueFields,
  setValueFields,
  labelButton,
  handleFormSubmit,
  onClose
}) {
  const handleInputChange = (fieldName, event) => {
    let value = event.target.value;

    setValueFields({ ...valueFields, [fieldName]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(valueFields);
    handleFormSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <RenderFields
        fields={fields}
        valueFields={valueFields}
        handleInputChange={handleInputChange}
      />

      <div className="flex flex-row flex-end gap-20">
      <Button variant="text" color="error" onClick={() => onClose(false)}>
          Cancelar
        </Button>
        <Button variant="contained" color="primary" type="submit">
          {labelButton}
        </Button>
      </div>
    </form>
  );
}
