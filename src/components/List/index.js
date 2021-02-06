import { List as MaterialList } from "@material-ui/core";

function List(props) {
  const { children, ...otherProps } = props;
  return <MaterialList {...otherProps}>{children}</MaterialList>;
}

export default List;