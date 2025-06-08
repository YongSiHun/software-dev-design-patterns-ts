import { NewsPublisher } from "./subjects/news_publisher";
import { NewsSubscriber } from "./observers/news_subscriber";

const publisher = new NewsPublisher();

const subscriber1 = new NewsSubscriber("홍길동");
const subscriber2 = new NewsSubscriber("김철수");
const subscriber3 = new NewsSubscriber("이영희");

// 구독자 등록
publisher.subscribe(subscriber1);
publisher.subscribe(subscriber2);

// 뉴스 발행
publisher.notify("오늘의 헤드라인: 옵저버 패턴 배우기!");

// 구독자 추가
publisher.subscribe(subscriber3);

// 또 다른 뉴스 발행
publisher.notify("속보: 옵저버 패턴 실습 성공!");

// 구독자 제거
publisher.unsubscribe(subscriber1);

// 뉴스 발행
publisher.notify("마지막 뉴스: 구독자가 줄어들었습니다.");
