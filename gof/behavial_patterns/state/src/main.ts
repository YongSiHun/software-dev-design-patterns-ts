import { Player } from "./player";

const player = new Player();

player.play(); // "재생을 시작합니다."
player.pause(); // "재생을 일시 중지합니다."
player.play(); // "재생을 다시 시작합니다."
player.stop(); // "재생을 멈춥니다."
player.pause(); // "정지 상태에서는 일시 중지가 불가능합니다."
