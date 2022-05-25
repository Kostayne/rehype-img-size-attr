import toStyle from "css-to-style";
export function processImgElement(img) {
    const origStylesStr = (img.properties.style || '');
    const styles = toStyle(origStylesStr);
    const [height, width] = [
        img.properties.height,
        img.properties.width
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
//# sourceMappingURL=process.js.map