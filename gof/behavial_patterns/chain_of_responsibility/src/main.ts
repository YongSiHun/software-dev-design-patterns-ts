import { CustomerSupportHandler } from "./handlers/customer_support_handler";
import { TechSupportHandler } from "./handlers/tech_support_handler";
import { AdminHandler } from "./handlers/admin_handler";
import { Request } from "./models/request";

const customerSupport = new CustomerSupportHandler();
const techSupport = new TechSupportHandler();
const admin = new AdminHandler();

// 체인 구성
customerSupport.setNext(techSupport).setNext(admin);

// 요청 테스트
const requests: Request[] = [
  { type: "customer_support", message: "비밀번호를 잊어버렸습니다." },
  { type: "tech_support", message: "애플리케이션이 작동하지 않습니다." },
  { type: "admin", message: "새 사용자 계정을 추가하고 싶습니다." },
  { type: "unknown", message: "알 수 없는 요청입니다." },
];

requests.forEach((req) => customerSupport.handle(req));
