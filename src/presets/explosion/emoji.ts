// refer https://github.com/hoovercj/vscode-power-mode/issues/1#issuecomment-412615727

import { IExplosion } from "src/setting";
const type = "Emoji";

const config: IExplosion = {
  maxExplosions: 1,
  size: 14,
  frequency: 1,
  explosionOrder: "random",
  gifMode: "continue",
  duration: 320,
  offset: 0.25,
  backgroundMode: "image",
  imageList: ["https://i.imgur.com/CY4UUfd.gif"],
};

export default { type, config };
