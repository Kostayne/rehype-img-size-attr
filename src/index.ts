import { Root, Element } from 'hast';
import { visit } from "unist-util-visit";
import { VFile } from "vfile-reporter/lib";
import { processImgElement } from './process.js';
import { filterImageElements } from './filter_img.js';

export default function rehypeImgSizeAttr() {
    return (root: Root, _file: VFile) => {
        visit(root, 'element', (el: Element) => {
            const img = filterImageElements(el);
            if (!img) return;

            processImgElement(img);
        });

        return root;
    };
}