// refer https://github.com/hoovercj/vscode-power-mode/issues/1#issuecomment-841655802

import { IExplosion } from "src/setting";
import L from "../../L";
const type = L.lightning();

const config: IExplosion = {
  maxExplosions: 15,
  size: 15,
  frequency: 2,
  explosionOrder: "sequential",
  gifMode: "restart",
  duration: 1000,
  offset: 0.215,
  backgroundMode: "mask",
  imageList: [
    "https://media.giphy.com/media/sLMRyFR4eIEgnFe4mK/giphy.gif",
    "https://media.giphy.com/media/RFvv2miX3KHcOkBwns/giphy.gif",
    "https://media.giphy.com/media/8Hw8ei9OiUXIUlHEBy/giphy.gif",
  ],
  customStyle: {
    mixBlendMode: "color-dodge",
  },
};

export default { type, config };
