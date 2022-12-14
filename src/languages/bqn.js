/*
Language: BQN
Author: Raghu Ranganathan <rraghu.11502@gmail.com>
Contributors: 
Description: BQN array language definitions
Website: https://mlochbaum.github.io/BQN
*/

export default function(hljs) {
  var BLOCK_MODES = [
    { scope: "title.function", match: "[π½πΎπππ]", relevance: 9 },
    { scope: 'built_in', match: "_π£_", relevance: 9 },
    { scope: 'operator', match: "_π£", relevance: 9 },
    { scope: 'variable', match: "[πππ¨π©π€π£]", relevance: 9 }
  ];
  const BASE_MODES = [
    {
      scope: 'string',
      begin: '"', end: '"',
      relevance: 0
    },
    {
      scope: 'string',
      begin: '\'', end: '\'',
      relevance: 0
    },
    {
      scope: 'number',
      match: "(?<![A-Z_a-z0-9ΟβΒ―])Β―?(Β―_*)?((\\d[\\d_]*(\\.\\d[\\d_]*)?|Ο_*)([eE]_*(Β―_*)?\\d[\\d_]*)?|β_*)(i_*(Β―_*)?((\\d[\\d_]*(\\.\\d[\\d_]*)?|Ο_*)([eE]_*(Β―_*)?\\d[\\d_]*)?|β_*))?",
      relevance: 0
    },
    {
      scope: 'variable',
      match: "β’?\\b[a-z][A-Z_a-z0-9ΟβΒ―]*",
      relevance: 0
    },
    {
      scope: 'title.function',
      match: "[+\\-ΓΓ·ββββ|Β¬β§β¨<>β =β€β₯β‘β’β£β’β₯βΎβββββΒ«Β»β½β/ββββββββ·β!ββ]",
      relevance: 0
    },
    {
      scope: 'title.function',
      match: "β’?\\b[A-Z][A-Z_a-z0-9ΟβΒ―]*",
      relevance: 0
    },
    {
      scope: 'built_in', // 2-modifier
      match: "[βββΈββΎββΆββββ]",
      relevance: 9
    },
    {
      scope: 'built_in',
      match: "\\b_[A-Za-z][_A-Za-zΒ―Οβ0-9]*_\\b",
      relevance: 0
    },
    {
      scope: 'operator', // 1-modifier
      match: "[ΛΛΛΒ¨Β΄Λ`ββΌ]",
      relevance: 3
    },
    {
      scope: 'operator',
      match: "\\b_[A-Za-z][_A-Za-zΒ―Οβ0-9]*[^_]\\b",
      relevance: 0
    },
    {
      scope: 'punctuation',
      match: "[()β¨β©;.,βΒ·β©βββΏ?]",
      relevance: 0
    },
  ];
  return {
    name: "BQN",
    unicodeRegex: true,
    contains: [
    ...BASE_MODES,
    {
      scope: 'punctuation',
      begin: '\\{', end: '\\}',
      contains: [...BLOCK_MODES, ...BASE_MODES, 'self'],
      relevance: 0
    },
    hljs.COMMENT('#', /$\n/, {relevance: 0})
    ]
  }
}
