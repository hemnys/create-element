const styled = {};
const tags = [
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "p",
  "i",
  "b",
  "div",
  "img",
  "hr",
];
const tagsSelfClosing = ["img", "hr"];
const checkTags = (currentTag) =>
  tagsSelfClosing.find((tag) => tag === currentTag);
tags.forEach(
  (tag) =>
    (styled[tag] = (styles) => (content) => {
      let isSelfClose = checkTags(tag);
      let finalTag = isSelfClose
        ? `<${tag} ${content} ${styles} />`
        : `<${tag} style="${styles}">${content}</${tag}>`;

      return finalTag;
    })
);

export default styled;
