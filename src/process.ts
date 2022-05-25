import toStyle from "css-to-style";
import { Element } from "hast";

export function processImgElement(img: Element) {
    const origStylesStr = (img.properties.style as string || '');
    const styles = toStyle(origStylesStr)

    const [height, width] = [
        img.properties.height as string,
        img.properties.width as string
    ].map(v => parseInt(v));

    if (!styles.height) {
        if (!isNaN(height)) {
            styles.height = `${height}px`;
        }
    }

    if (!styles.width) {
        if (!isNaN(width)) {
            styles.width = `${width}px`;
        }
    }

    let resultStyles = '';
    for (const [k, v] of Object.entries(styles)) {
        resultStyles += `${k}:${v};`;
    }

    img.properties.style = resultStyles;
}