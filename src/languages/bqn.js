/*
Language: BQN
Requires: 
Author: Raghu Ranganathan <rraghu.11502@gmail.com>
Contributors: 
Description: BQN array language definitions
Website: https://mlochbaum.github.io/BQN
*/
export default function(hljs) {
  return {
    name: "BQN",
    unicodeRegex: true,
    keywords: '•BQN •ReBQN •primitives •Import •FFI •state •args •path •name •wdpath •Exit •file •FChars •FBytes •FLines •Out •Show •Repr •Fmt •term •SH •Type •Glyph •Decompose •UnixTime •MonoTime •Delay •_timed •math •MakeRand •rand •bit •_while_ •GetLine •Hash •PrimInd •Cmp •FromUTF8 •ToUTF8 •CurrentError •internal •bqn •currenterror •decompose •fmt •glyph •js •listsys •monotime •ns •out •plot •rebqn •repr •setplot •show •timed •type •unixtime', // only primitive functions included.
    contains: [
    {
      scope: 'string',
      begin: '"', end: '"'
    },
    {
      scope: 'string',
      begin: '\'', end: '\''
    },
    {
      scope: 'number',
      match: "(?<![A-Z_a-z0-9π∞¯])¯?(¯_*)?((\\d[\\d_]*(\\.\\d[\\d_]*)?|π_*)([eE]_*(¯_*)?\\d[\\d_]*)?|∞_*)(i_*(¯_*)?((\\d[\\d_]*(\\.\\d[\\d_]*)?|π_*)([eE]_*(¯_*)?\\d[\\d_]*)?|∞_*))?"
    },
    {
      scope: 'title.function',
      match: "[𝔽𝔾𝕎𝕏𝕊+\\-×÷⋆√⌊⌈|¬∧∨<>≠=≤≥≡≢⊣⊢⥊∾≍⋈↑↓↕«»⌽⍉/⍋⍒⊏⊑⊐⊒∊⍷⊔!⍕⍎]|•?\\b[A-Z][A-Z_a-z0-9π∞¯]*"
    },
    {
      scope: 'operator', // 1-modifier
      match: "([˙˜˘¨´˝`⌜⁼]|\\b_[A-Za-z𝕣][_A-Za-z¯π∞0-9]*[^_]\\b)"
    },
    {
      scope: 'title.function.invoke', // 2-modifier
      match: "([∘○⊸⟜⌾⊘◶⎊⎉⚇⍟]|\\b_[A-Za-z𝕣][_A-Za-z¯π∞0-9]*_\\b)"
    },
    {
      scope: 'punctuation',
      match: "[{}()⟨⟩;.,⋄·↩←⇐]"
    },
    hljs.COMMENT('#', /$\n/)
    ]
  }
}
