import { State } from "./state";
import { Player } from "../player";

export class PausedState implements State {
  constructor(private player: Player) {}

  play(): void {
    console.log("재생을 다시 시작합니다.");
    this.player.setState(this.player.getPlayingState());
  }

  pause(): void {
    console.log("이미 일시 중지 상태입니다.");
  }

  stop(): void {
    console.log("재생을 멈춥니다.");
    this.player.setState(this.player.getStoppedState());
  }
}
