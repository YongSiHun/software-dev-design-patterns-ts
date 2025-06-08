import { State } from "./states/state";
import { PlayingState } from "./states/playing_state";
import { PausedState } from "./states/paused_state";
import { StoppedState } from "./states/stopped_state";

/**
 * Context
 */
export class Player {
  private playingState: State;
  private pausedState: State;
  private stoppedState: State;
  private currentState: State;

  constructor() {
    this.playingState = new PlayingState(this);
    this.pausedState = new PausedState(this);
    this.stoppedState = new StoppedState(this);

    this.currentState = this.stoppedState; // 초기 상태
  }

  setState(state: State): void {
    this.currentState = state;
  }

  getPlayingState(): State {
    return this.playingState;
  }

  getPausedState(): State {
    return this.pausedState;
  }

  getStoppedState(): State {
    return this.stoppedState;
  }

  play(): void {
    this.currentState.play();
  }

  pause(): void {
    this.currentState.pause();
  }

  stop(): void {
    this.currentState.stop();
  }
}
