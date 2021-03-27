import React from "react";
import { IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "../inputs/TextField";
import { Link, useHistory } from "react-router-dom";
import { InputAdornment } from "@material-ui/core";

// Class component because it will be passed a ref.
const SearchInput = React.forwardRef((props, ref) => {
  const { onSearch, ...otherProps } = props;

  const history = useHistory();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(props.value);
      }}
    >
      <TextField
        ref={ref}
        placeholder={props.placeholder}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={()=>onSearch(props.value)}>
                <SearchIcon color="primary" />
              </IconButton>
            </InputAdornment>
          ),
        }}
        {...otherProps}
      />
    </form>
  );
});

export default SearchInput;
