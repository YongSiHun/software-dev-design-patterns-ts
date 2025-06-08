import { ControlTower } from "./mediators/control_tower";
import { Airplane } from "./colleagues/airplane";
import { Helicopter } from "./colleagues/helicopter";

const controlTower = new ControlTower();

const airplane = new Airplane(controlTower);
const helicopter = new Helicopter(controlTower);

controlTower.addColleague(airplane);
controlTower.addColleague(helicopter);

airplane.requestLanding();
helicopter.requestTakeoff();
