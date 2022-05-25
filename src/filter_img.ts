import { Element } from "hast";

export function filterImageElements(el: Element): Element | undefined {
    if (el.tagName != 'img') {
        return;
    }

    const properties = el.properties || {};
    if (!properties.height && !properties.width) {
        return;
    }

    return el;
}