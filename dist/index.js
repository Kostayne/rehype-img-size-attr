import { visit } from "unist-util-visit";
import { processImgElement } from './process.js';
import { filterImageElements } from './filter_img.js';
export default function rehypeImgSizeAttr() {
    return (root, _file) => {
        visit(root, 'element', (el) => {
            const img = filterImageElements(el);
            if (!img)
                return;
            processImgElement(img);
        });
        return root;
    };
}
//# sourceMappingURL=index.js.map