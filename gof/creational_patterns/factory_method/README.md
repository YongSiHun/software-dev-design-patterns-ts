# 팩토리 메서드 (Factory Method)

#### 목적

- 객체를 생성할 때 구체적인 클래스 이름을 지정하지 않고, 객체 생성 과정을 서브클래스에서 오버라이딩하여 확장할 수 있도록 설계

#### 특징

- 객체 생성 코드를 캡슐화하고 생성 작업을 서브클래스에서 처리하도록 위임
- 구체적인 클래스 이름에 의존하지 않고 객체를 생성
- 객체 생성의 책임을 서브클래스에 위임

#### 사용 시기

- 객체 생성 로직이 복잡하거나 자주 변경될 가능성이 있을 때
- 객체 생성 코드를 클라이언트 코드와 분리하고 싶을 때
- 코드가 새로운 객체를 쉽게 지원할 수 있도록 확장 가능해야 할 때

#### 구성 요소

- Product

  - 팩토리 메서드가 생성하는 객체의 인터페이스

- Concrete Product

  - Product 인터페이스를 구현한 실제 클래스

- Creator

  - 팩토리 메서드를 선언하며 기본 구현을 제공

- Concrete Creator
  - 팩토리 메서드를 재정의해 특정 Product를 생성

#### 장점

- 객체 생성 로직을 한 곳에 모아 클라이언트 코드가 간결해짐
- 새로운 객체를 추가해도 기존 코드를 수정하지 않아도 됨 (OCP 원칙 준수)
- 코드 재사용성 증가

#### 단점

- 클래스 수가 증가할 수 있음
- 객체 생성 로직이 단순할 경우 과한 설계가 될 수 있음
