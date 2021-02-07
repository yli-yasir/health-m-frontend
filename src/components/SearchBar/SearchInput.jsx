import React from "react";
import { IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "../TextField";
import { Link } from "react-router-dom";
import { makeSearchLink } from "../../utils/URLUtils";
import { InputAdornment } from "@material-ui/core";

// Class component because it will be passed a ref.
class SearchInput extends React.Component {
  render() {
    return (
      <TextField
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton component={Link} to={makeSearchLink(this.props.value)}>
                <SearchIcon color="primary" />
              </IconButton>
            </InputAdornment>
          ),
        }}
        {...this.props}
      />
    );
  }
}

export default SearchInput;
