/*
Language: Alloy
Author: Pavel Senchanka <pavel.senchanka@gmail.com>
Website: https://alloytools.org/
Category: misc
*/

export default function(hljs) {
  var COMMENT_MODE = hljs.COMMENT('--', '$');
  return {
    aliases: ['alloy'],
    case_insensitive: true,
    keywords: ('abstract and as assert '
            + 'but check else exactly enum '
            + 'fact for fun module '
            + 'iff implies Int let in '
            + 'open or pred run sum extends '
            + 'univ iden '
            + 'one lone all some no none disj not set sig'),
    contains: [
      hljs.C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE,
      COMMENT_MODE,
      hljs.NUMBER_MODE,
    ],
  }
}
