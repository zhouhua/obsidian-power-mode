// refer https://github.com/hoovercj/vscode-power-mode/issues/1#issuecomment-523485171

import { IExplosion } from "src/setting";
import L from "../../L";
const type = L.butterfly();

const config: IExplosion = {
  maxExplosions: 1,
  size: 7,
  frequency: 1,
  explosionOrder: "random",
  gifMode: "continue",
  duration: 1000,
  offset: 0.45,
  backgroundMode: "image",
  imageList: ["https://imgur.com/nfgkSBD.gif"],
};

export default { type, config };
