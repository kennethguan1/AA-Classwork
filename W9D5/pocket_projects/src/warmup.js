
const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {
  const tag = document.createElement("p");
  if (htmlElement.children) {
    const children = Array.from(htmlElement.children);
    children.forEach( (child) => {
      htmlElement.removeChild(child);
    });
  }
  tag.innerHTML = string;
  htmlElement.append(tag);
};

htmlGenerator('Party Time.', partyHeader);
