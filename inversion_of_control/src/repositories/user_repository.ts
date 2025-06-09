export class UserRepository {
    getUser(id: number): string {
        return `User with ID ${id}`;
    }
}
