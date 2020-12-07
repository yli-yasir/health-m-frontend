import {
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
} from "@material-ui/core";

export default function HMRadioGroup(props) {
  return (
    <FormControl margin="normal" fullWidth={true} component="fieldset">
      <FormLabel component="legend">{props.label}</FormLabel>
      <RadioGroup
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

      </RadioGroup>

      
    </FormControl>
  );
}
