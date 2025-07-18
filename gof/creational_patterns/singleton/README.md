# 싱글턴 (Singleton)

#### 목적

- 애플리케이션에서 하나의 클래스 인스턴스만 존재하도록 보장

#### 특징

- 클래스의 인스턴스를 하나만 생성하도록 보장하며, 어디에서든지 접근할 수 있는 전역 접근점을 제공
- 단일 인스턴스는 애플리케이션 전체에서 상태를 공유

#### 사용 시기

- 전역적으로 접근 가능한 유일한 객체가 필요한 경우
- 리소스를 관리하는 객체(데이터베이스 연결, 설정 관리자)가 하나만 있어야 하는 경우
- 상태가 여러 곳에서 공유되거나 관리되어야 할 때

#### 구성 요소

- Private Constructor

  - 외부에서 객체 생성을 차단

- Static Instance

  - 클래스 내부에서 유일한 객체를 생성하고 보관

- Static Method
  - 인스턴스에 접근할 수 있는 인터페이스 제공

#### 장점

- 인스턴스 생성 비용을 줄이고 메모리 사용을 효율화
- 전역 상태를 관리하는데 용이
- 동기화된 방식으로 안전하게 인스턴스를 공유 가능

#### 단점

- 전역 상태를 공유하므로 테스트가 어려울 수 있음
- 멀티스레드 환경에서 동기화를 잘못 처리하면 문제 발생 가능
- 잘못 사용하면 결합도가 높아질 수 있음
