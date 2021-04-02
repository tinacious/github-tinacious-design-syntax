var styles = `
[data-color-mode=dark][data-dark-theme=dark],
[data-color-mode=dark][data-dark-theme=dark_dimmed] {

/* Diffs */
--color-diff-blob-deletion-line-bg: rgb(142 0 59 / 40%);
--color-diff-blob-deletion-word-bg: rgb(187 0 78 / 100%);

--color-diff-blob-addition-line-bg: rgb(0 234 83 / 18%);
--color-diff-blob-addition-word-bg: rgb(0 234 83 / 25%);

--color-diff-blob-deletion-num-text: rgb(187 0 78 / 100%);
--color-diff-blob-deletion-num-hover-text: rgb(187 0 78 / 100%);

/* squares / blocks */
--color-diffstat-deletion-bg: rgb(142 0 59 / 80%);
--color-diffstat-deletion-border: rgb(187 0 78 / 100%);

--color-text-success: #00d364;
--color-text-danger: rgb(255 42 131);


--color-diffstat-addition-bg: rgb(0 234 83 / 30%);
--color-diffstat-addition-border: rgb(0 234 83 / 60%);


/* Editor styles */
--color-gist-editor-bg: #1d1d26;
--color-text-primary: rgb(255 255 255 / 90%);
--color-prettylights-syntax-storage-modifier-import: rgb(255 255 255 / 90%);

--color-prettylights-syntax-comment: #b3b3d4;

--color-prettylights-syntax-entity-tag: #f39;
--color-prettylights-syntax-keyword: #f39;

--color-prettylights-syntax-entity: #00d364;
--color-prettylights-syntax-string: #fc6;

--color-prettylights-syntax-constant: #c6f; /* purple */
--color-prettylights-syntax-constant: #00ced1; /* turquoise */
--color-prettylights-syntax-constant: #33d5ff; /* blue */

--color-prettylights-syntax-variable: #00ced1; /* turquoise */


/* other UI */
--color-bg-canvas: #1d1d26;
--color-text-link: #f39; /* pink */
--color-text-link: #00ced1; /* turquoise */
--color-text-link: #c6f; /* purple */

--color-btn-primary-bg: #00ced1; /* turquoise */
--color-btn-primary-border: #00a4a7; /* dark turquoise */

--color-btn-primary-bg: #f39; /* pink */
--color-btn-primary-border: #c50063; /* dark pink */
--color-btn-primary-hover-bg: #ff63b1; /* lighter pink */
--color-btn-primary-hover-border: #c50063; /* dark pink */
--color-btn-primary-selected-bg: #ff63b1; /* lighter pink */
--color-btn-primary-focus-bg: #ff63b1; /* lighter pink */
--color-btn-primary-focus-border: #c50063; /* dark pink */

/* viewed progress bar */
--color-bg-info-inverse: #00ced1; /* turquoise */

/* viewed checkbox */
--color-auto-blue-2: rgb(0 206 209 / 15%); /* turquoise */
}


.file-info {
  font-family: Source Code Pro, SFMono-Regular, monospace;
  font-size: 0.8rem;
  font-weight: 700;
}

.blob-code {
  line-height: 1.5;
}

.blob-code-inner {
  font-family: Source Code Pro, SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;
  font-size: 0.8rem;
}

.UnderlineNav-item.selected, .UnderlineNav-item[aria-current]:not([aria-current=false]), .UnderlineNav-item[role=tab][aria-selected=true],
.UnderlineNav-item[role=tab][aria-selected=true] {
  border-bottom-color: #f39;
}
`

var styleTag = document.createElement('style')
styleTag.setAttribute('type', 'text/css')
styleTag.appendChild(document.createTextNode(styles))

document.head.appendChild(styleTag)
