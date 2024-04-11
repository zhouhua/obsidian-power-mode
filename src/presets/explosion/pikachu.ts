// refer https://github.com/hoovercj/vscode-power-mode/issues/1#issuecomment-523485171

import L from "../../L";
const type = L.pikachu();

const config: IExplosion = {
  maxExplosions: 1,
  size: 12,
  frequency: 1,
  explosionOrder: "sequential",
  gifMode: "continue",
  duration: 5000,
  offset: 0.36,
  backgroundMode: "image",
  imageList: ["https://i.imgur.com/iDcBoNm.gif"],
};

export default { type, config };
