import {
  FormControl,
  FormLabel,
  RadioGroup as MaterialRadioGroup,
  Radio,
  FormControlLabel,
} from "@material-ui/core";

export default function RadioGroup(props) {
  return (
    <FormControl margin="normal" fullWidth={true} component="fieldset">
      <FormLabel component="legend">{props.label}</FormLabel>
      <MaterialRadioGroup
        aria-label="gender"
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        row={true}
      >
        {props.radios.map((radio) => (
          <FormControlLabel
            key={radio.value}
            value={radio.value}
            control={<Radio />}
            label={radio.label}
          />
        ))}

      </MaterialRadioGroup>

      
    </FormControl>
  );
}
