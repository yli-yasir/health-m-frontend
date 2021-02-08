import React from "react";
import { IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "../TextField";
import { Link } from "react-router-dom";
import { makeSearchLink } from "../../utils/URLUtils";
import { InputAdornment } from "@material-ui/core";

// Class component because it will be passed a ref.
const SearchInput = React.forwardRef((props, ref) => {
  return (
    <TextField
      ref={ref}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton component={Link} to={makeSearchLink(props.value)}>
              <SearchIcon color="primary" />
            </IconButton>
          </InputAdornment>
        ),
      }}
      {...props}
    />
  );
});

export default SearchInput;
