import ReactDOM from "react-dom";
import App from "./App";
import "./assets/style.css";
import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.render(
<Provider store={store}><App /></Provider>, document.getElementById("react-root"));
