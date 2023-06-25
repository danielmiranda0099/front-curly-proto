import { Grid, TextField } from "@mui/material";

export function RenderFields({ fields, valueFields ,handleInputChange }) {
  return (
    <>
      {fields.map((field, index) => (
        <Grid key={index} container spacing={1} sx={{ marginBottom: 4 }}>
          {field.map((item) => (
            <Grid key={item.name} item xs={12 / field.length}>
              <TextField
                type={item.type}
                label={item.label}
                
                value={valueFields && valueFields[item?.name] ? valueFields[item?.name] : ""}
                required={item.required || false}
                variant="outlined"
                fullWidth={item.fullWidth || false}
                onChange={(event) => handleInputChange(item.name, event)}
              />
            </Grid>
          ))}
        </Grid>
      ))}
    </>
  );
}
