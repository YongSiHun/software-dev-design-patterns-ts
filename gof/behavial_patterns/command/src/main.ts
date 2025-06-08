import { Light } from "./devices/light";
import { Fan } from "./devices/fan";
import { LightOnCommand } from "./commands/light_on_command";
import { LightOffCommand } from "./commands/light_off_command";
import { FanCommand } from "./commands/fan_command";
import { Invoker } from "./invoker";

/**
 * Client
 */

const light = new Light();
const fan = new Fan();

const lightOnCommand = new LightOnCommand(light);
const lightOffCommand = new LightOffCommand(light);
const fanCommand = new FanCommand(fan);

const remote = new Invoker();

// 명령 실행
remote.executeCommand(lightOnCommand);
remote.executeCommand(fanCommand);
remote.executeCommand(lightOffCommand);

// 실행 취소
remote.undoLastCommand();
remote.undoLastCommand();
remote.undoLastCommand();
