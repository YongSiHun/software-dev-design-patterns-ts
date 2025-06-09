import { UserService } from '../services/user_service';

export class UserController {
    constructor(private userService: UserService) {}

    getUser(id: number): string {
        return this.userService.getUserInfo(id);
    }
}
