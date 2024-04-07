// refer https://github.com/hoovercj/vscode-power-mode/issues/1#issuecomment-535331889

import { IExplosion } from "src/setting";
import L from "../../L";
const type = L.nyan();

const config: IExplosion = {
  maxExplosions: 100,
  size: 10,
  frequency: 1,
  explosionOrder: "sequential",
  gifMode: "continue",
  duration: 400,
  offset: 0.26,
  backgroundMode: "image",
  imageList: [
    "https://nyanpandablog.files.wordpress.com/2016/04/nyan-panda2.gif?w=256",
  ],
};

export default { type, config };
