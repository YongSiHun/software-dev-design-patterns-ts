import { State } from "./state";
import { Player } from "../player";

export class StoppedState implements State {
  constructor(private player: Player) {}

  play(): void {
    console.log("재생을 시작합니다.");
    this.player.setState(this.player.getPlayingState());
  }

  pause(): void {
    console.log("정지 상태에서는 일시 중지가 불가능합니다.");
  }

  stop(): void {
    console.log("이미 정지 상태입니다.");
  }
}
