import { container } from './config/container';

const userController = container.userController;
console.log(userController.getUser(1));
