import { UserModel } from "./models/user_model";

function main() {
  console.log("Application started.");

  const user = new UserModel("1");

  console.log("User data will be fetched lazily.");
  console.log("Fetching user data...");
  const userData = user.getUserData();

  console.log("User Data:", userData);
}

main();
