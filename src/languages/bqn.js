/*
Language: BQN
Author: Raghu Ranganathan <rraghu.11502@gmail.com>
Contributors: 
Description: BQN array language definitions
Website: https://mlochbaum.github.io/BQN
*/




export default function(hljs) {
  var BLOCK_MODES = [
    { scope: "title.function", match: "[𝔽𝔾𝕎𝕏𝕊]"},
    { scope: 'operator', match: "_𝕣" },
    { scope: 'built_in', match: "_𝕣_" },
    { scope: 'variable', match: "[𝕗𝕘𝕨𝕩𝕤𝕣]" }
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
      match: "(?<![A-Z_a-z0-9π∞¯])¯?(¯_*)?((\\d[\\d_]*(\\.\\d[\\d_]*)?|π_*)([eE]_*(¯_*)?\\d[\\d_]*)?|∞_*)(i_*(¯_*)?((\\d[\\d_]*(\\.\\d[\\d_]*)?|π_*)([eE]_*(¯_*)?\\d[\\d_]*)?|∞_*))?",
      relevance: 0
    },
    {
      scope: 'variable',
      match: "•?\\b[a-z][A-Z_a-z0-9π∞¯]*",
      relevance: 0
    },
    {
      scope: 'title.function',
      match: "[+\\-×÷⋆√⌊⌈|¬∧∨<>≠=≤≥≡≢⊣⊢⥊∾≍⋈↑↓↕«»⌽⍉/⍋⍒⊏⊑⊐⊒∊⍷⊔!⍕⍎]",
      relevance: 9
    },
    {
      scope: 'title.function',
      match: "•?\\b[A-Z][A-Z_a-z0-9π∞¯]*",
      relevance: 0
    },
    {
      scope: 'built_in', // 2-modifier
      match: "[∘○⊸⟜⌾⊘◶⎊⎉⚇⍟]",
      relevance: 9
    },
    {
      scope: 'built_in',
      match: "\\b_[A-Za-z][_A-Za-z¯π∞0-9]*_\\b",
      relevance: 0
    },
    {
      scope: 'operator', // 1-modifier
      match: "[˙˜˘¨´˝`⌜⁼]",
      relevance: 9
    },
    {
      scope: 'operator',
      match: "\\b_[A-Za-z][_A-Za-z¯π∞0-9]*[^_]\\b",
      relevance: 0
    },
    {
      scope: 'punctuation',
      match: "[()⟨⟩;.,⋄·↩←⇐‿?]"
    },
  ];
  return {
    name: "BQN",
    unicodeRegex: true,
    contains: [
    ...BASE_MODES,
    {
      scope: 'block',
      begin: '\\{', end: '\\}',
      contains: [...BLOCK_MODES, ...BASE_MODES, 'self']
    },
    hljs.COMMENT('#', /$\n/)
    ]
  }
}
