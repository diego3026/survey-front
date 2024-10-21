import * as React from "react";
import { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import TextField from "@mui/material/TextField";
import estilos from "./RadioButton.module.css";

export default function RadioButtonsGroup() {
  const [selectedValue, setSelectedValue] = useState<string>("helicoptero");

  const [otherValue, setOtherValue] = useState<string>("");

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
    if (event.target.value !== "other") {
      setOtherValue("");
    }
  };

  const handleOtherChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOtherValue(event.target.value);
  };

  return (
    <FormControl className={estilos.contenedor}>
      <FormLabel id="demo-radio-buttons-group-label">
        Agregar opciones
      </FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        value={selectedValue}
        onChange={handleRadioChange}
        name="radio-buttons-group"
      >
        <FormControlLabel value="Mujer" control={<Radio />} label="Mujer" />
        <FormControlLabel value="Hombre" control={<Radio />} label="Hombre" />
        <FormControlLabel value="other" control={<Radio />} label="Otro" />
      </RadioGroup>

      {selectedValue === "other" && (
        <TextField
          label="Especifique otro"
          variant="outlined"
          value={otherValue}
          onChange={handleOtherChange}
          className={estilos.inputOtro}
        />
      )}
    </FormControl>
  );
}