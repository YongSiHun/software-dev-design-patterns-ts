import { UserRepository } from '../repositories/user_repository';

export class UserService {
    constructor(private userRepository: UserRepository) {}

    getUserInfo(id: number): string {
        return this.userRepository.getUser(id);
    }
}
