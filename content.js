var styles = `
/* Global */
:root {
  --color-btn-primary-bg: #00ced1  !important; /* turquoise */
  --color-btn-primary-border: #00a4a7  !important; /* dark turquoise */

  --color-btn-primary-bg: #f39  !important; /* pink */
  --color-btn-primary-border: #c50063  !important; /* dark pink */
  --color-btn-primary-hover-bg: #ff63b1  !important; /* lighter pink */
  --color-btn-primary-hover-border: #c50063  !important; /* dark pink */
  --color-btn-primary-selected-bg: #ff63b1  !important; /* lighter pink */
  --color-btn-primary-focus-bg: #ff63b1  !important; /* lighter pink */
  --color-btn-primary-focus-border: #c50063  !important; /* dark pink */
  --color-btn-primary-disabled-bg: #c50063  !important; /* dark pink */ 
}

/* Dark only */
[data-color-mode=dark],
[data-dark-theme=dark_dimmed],
[data-color-mode=dark][data-dark-theme=dark],
[data-color-mode=dark][data-dark-theme=dark_dimmed] {
  /* Diffs */
  --color-diff-blob-deletion-line-bg: rgba(142, 0, 59, 0.4)  !important;
  --color-diff-blob-deletion-word-bg: rgb(187, 0, 78)  !important;

  --color-diff-blob-addition-line-bg: rgba(0, 234, 83, 0.18)  !important;
  --color-diff-blob-addition-word-bg: rgba(0, 234, 83, 0.25)  !important;

  --color-diff-blob-deletion-num-text: rgb(187, 0, 78) !important;
  --color-diff-blob-deletion-num-hover-text: rgb(187, 0, 78)  !important;

  /* squares / blocks */
  --color-diffstat-deletion-bg: rgba(142, 0, 59, 0.8)  !important;
  --color-diffstat-deletion-border: rgb(187, 0, 78)  !important;

  --color-text-success: #00d364  !important;
  --color-text-danger: rgb(255, 42, 131) !important;


  --color-diffstat-addition-bg: rgba(0, 234, 83, 0.30)  !important;
  --color-diffstat-addition-border: rgba(0, 234, 83, 0.60)  !important;

  /* squares / blocks */
  --color-diffstat-deletion-bg: rgba(142, 0, 59, 0.8)  !important;
  --color-diffstat-deletion-border: rgb(187, 0, 78)  !important;

  --color-text-success: #00d364  !important;
  --color-text-danger: rgb(255, 42, 131) !important;


  --color-diffstat-addition-bg: rgba(0, 234, 83, 0.30)  !important;
  --color-diffstat-addition-border: rgba(0, 234, 83, 0.60)  !important;

  /* Editor styles */
  --color-gist-editor-bg: #1d1d26  !important;
  --color-text-primary: #fff  !important;
  --color-prettylights-syntax-storage-modifier-import: #fff  !important;

  --color-prettylights-syntax-comment: #b3b3d4  !important;

  --color-prettylights-syntax-entity: #f39  !important;
  --color-prettylights-syntax-entity-tag: #f39  !important;
  --color-prettylights-syntax-keyword: #f39  !important;

  --color-prettylights-syntax-entity: #00d364  !important;
  --color-prettylights-syntax-string: #fc6  !important;

  --color-prettylights-syntax-constant: #c6f  !important; /* purple */
  --color-prettylights-syntax-constant: #00ced1  !important; /* turquoise */
  --color-prettylights-syntax-constant: #33d5ff  !important; /* blue */

  --color-prettylights-syntax-variable: #00ced1  !important; /* turquoise */


  /* other UI */
  --color-bg-canvas: #1d1d26  !important;
  --color-text-link: #f39  !important; /* pink */
  --color-text-link: #00ced1  !important; /* turquoise */
  --color-text-link: #c6f  !important; /* purple */

  /* viewed checkbox */
  --color-auto-blue-2: rgb(0 206 209 / 15%)  !important; /* turquoise */
}

.file-info {
  font-family: Source Code Pro, SFMono-Regular, monospace  !important;
  font-size: 0.8rem  !important;
  font-weight: 700  !important;
}

.blob-code {
  line-height: 1.5  !important;
}

.blob-code-inner {
  font-size: 0.8rem  !important;
}

.UnderlineNav-item.selected, .UnderlineNav-item[aria-current]:not([aria-current=false]), .UnderlineNav-item[role=tab][aria-selected=true],
.UnderlineNav-item[role=tab][aria-selected=true] {
  border-bottom-color: #f39  !important;
}
`

var styleTag = document.createElement('style')
styleTag.setAttribute('type', 'text/css')
styleTag.appendChild(document.createTextNode(styles))

document.head.appendChild(styleTag)
document.body.appendChild(styleTag)
