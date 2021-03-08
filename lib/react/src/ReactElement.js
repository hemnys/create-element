import { render } from "../../react-dom.js";

function renderChildren(children, container) {
  return render(children, container);
}

function setProperties(prop, value, element) {
  // support for children
  if (prop === "children") {
    return renderChildren(value, element);
  }

  // support for attributes
  const attribute = value;
  return element.setAttribute(prop, attribute);
}

export function createElement(type, props, content) {
  const element = document.createElement(type);
  Object.keys(props).forEach((prop) =>
    setProperties(prop, props[prop], element)
  );
  if (content) {
    element.textContent = content;
  }
  return element;
}
