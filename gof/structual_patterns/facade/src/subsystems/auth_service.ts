export class AuthService {
  authenticate(userId: string): boolean {
    console.log(`Authenticating user ${userId}`);
    return true;
  }
}
