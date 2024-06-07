// refer https://lottiefiles.com/animations/spark-GQsLVlPmm6

import L from "../../L";
const type = L.spark();

const config: IExplosion = {
  maxExplosions: 5,
  size: 12,
  frequency: 5,
  explosionOrder: "random",
  gifMode: "restart",
  duration: 760,
  offset: 0.23,
  backgroundMode: "image",
  imageList: [
    "data:image/gif;base64,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",
  ],
};

export default { type, config };