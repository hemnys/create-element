function render(element, container) {
  if (typeof element === "string" || element instanceof Element) {
    // return container.append(element);
    console.log("estoy dentro de la condicion");
    return container.classList.add("hello-baron");
  }
  const childElement = element.render();
  container.append(childElement);
}

export { render };
