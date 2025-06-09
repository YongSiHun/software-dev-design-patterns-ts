import { UserController } from '../controllers/user_controller';
import { UserService } from '../services/user_service';
import { UserRepository } from '../repositories/user_repository';

export const container = {
    userRepository: new UserRepository(),
    userService: new UserService(new UserRepository()),
    userController: new UserController(new UserService(new UserRepository())),
};
