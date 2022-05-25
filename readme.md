# Rehype image size attribute
Rehype plugin to copy html img size attributes to it's style. If image already has styles then previous properties will stay.

## Install
```
npm i rehype-img-size-attr
```

## Usage
As an example we will transform test.md file into out.html
``` ts
import fs from 'fs/promises';
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypeRaw from "rehype-raw";
import rehypeAttrImgSize from "../src/index.js";
import path from 'path';

const processor = unified()
    .use(remarkParse)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    // just paste it between rehypeRaw & rehypeStringify
    .use(rehypeImgSizeAttr)
    .use(rehypeStringify);

const asyncWrapper = async () => {
    // reading file
    const mdPath = path.resolve('./example/test.md');
    const origFile = await fs.readFile(mdPath);

    // processing it
    const output = await processor.process(origFile);

    // writing output
    const outPath = path.resolve('./example/out.html');
    await fs.writeFile(outPath, output.value);
};

asyncWrapper();
```

## Result
Input
``` md
# Headline
## Headline 2

<img height=150 width=150
style="height:200px; width:200px">

only height
<img height=150>

only width
<img width=75>

mixed
<img width=75 style="height: 150px; background: red;">
```

Output
``` html
<h1>Headline</h1>
<h2>Headline 2</h2>

<p><img height="150" width="150" style="height:200px;width:200px;"></p>

<p>only height
<img height="150" style="height:150px;"></p>

<p>only width
<img width="75" style="width:75px;"></p>

<p>mixed
<img width="75" style="height:150px;background:red;width:75px;"></p>
```