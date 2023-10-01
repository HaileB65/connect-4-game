const d = document;

function elementMaker(tag, content = null, cssClass = null) {
    element = d.createElement(tag);
    if (content != null) element.innerText = content;
    if (cssClass!= null) element.classList.add(cssClass);
    return element;
}

const root = d.getElementById("root");