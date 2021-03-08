import { Component, createElement } from "../lib/react/index.js";
// import User from "./user.js";
// import Wrapper from "./wrapper.js";
// import UserStyled from "./user-styled.js";

class App extends Component {
  render() {
    return createElement(
      "div",
      {
        class: "hemnys",
        children: createElement("p", { class: "demo" }, "Hola soy Enrique"),
      },
      "hola soy hemnys"
    );
  }
}
// ${new Wrapper({
//   children: `${new User({
//     name: "hemnys",
//     avatar: "image_not_found.jpg",
//   }).render()}`,
// }).render()}
// ${new UserStyled({
//   name: "hemnys Enrique",
//   avatar: "image_not_found_2.jpg",
// }).render()}
export default App;
