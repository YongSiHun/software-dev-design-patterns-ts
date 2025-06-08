import { State } from "./state";
import { Player } from "../player";

export class PlayingState implements State {
  constructor(private player: Player) {}

  play(): void {
    console.log("이미 재생 중입니다.");
  }

  pause(): void {
    console.log("재생을 일시 중지합니다.");
    this.player.setState(this.player.getPausedState());
  }

  stop(): void {
    console.log("재생을 멈춥니다.");
    this.player.setState(this.player.getStoppedState());
  }
}
