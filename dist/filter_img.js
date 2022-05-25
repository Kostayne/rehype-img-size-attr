export function filterImageElements(el) {
    if (el.tagName != 'img') {
        return;
    }
    const properties = el.properties || {};
    if (!properties.height && !properties.width) {
        return;
    }
    return el;
}
//# sourceMappingURL=filter_img.js.map