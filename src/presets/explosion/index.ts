import particle from "./particle";
import flame from "./flame";
import rift from "./rift";
import magic from "./magic";
import firework from "./firework";
import pikachu from "./pikachu";
import lightning from "./lightning";
import shapes from "./shapes";
import coin from "./coin";
import confetti from "./confetti";
import spark from "./spark";

// particle effect
const list: { type: string; config: IExplosion }[] = [
  particle,
  flame,
  rift,
  magic,
  firework,
  pikachu,
  lightning,
  shapes,
  coin,
  confetti,
  spark,
];

export default list;
