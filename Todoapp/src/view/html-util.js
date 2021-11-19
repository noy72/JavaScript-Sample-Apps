export function element(tag, text) {
    const elem = document.createElement(tag);
    elem.appendChild(
        document.createTextNode(text)
    );
    return elem;
}

export function render(parent, child) {
    parent.innerHTML = "";
    parent.appendChild(child);
}
