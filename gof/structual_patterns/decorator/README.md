# 데코레이터 (Decorator)

#### 목적

- 객체에 동적으로 새로운 기능을 추가

#### 특징

- 객체에 동적으로 새로운 기능을 추가할 수 있는 구조 패턴
- 상속을 사용하지 않고도 객체의 기능을 확장할 수 있음

#### 사용 시기

- 기존 객체의 코드를 수정하지 않고 새로운 기능을 추가해야 할 때
- 객체를 다수의 기능으로 구성하여 다양한 조합을 지원하고 싶을 때
- 상속을 사용하면 클래스가 너무 많아 질 때

#### 구성 요소

- Component

  - 데코레이터와 실제 객체가 공유하는 공통 인터페이스

- Concrete Component

  - 기본 동작을 구현한 클래스

- Decorator

  - Component 인터페이스를 구현하며, 동작을 확장할 수 있는 기본 클래스

- Concrete Decorator

  - 추가 기능을 정의하는 데코레이터

#### 장점

- 기존 코드를 변경하지 않고도 객체의 기능을 확장
- 유연성과 재사용성이 뛰어남
- 기능 추가 및 제거가 런타임에 가능

#### 단점

- 많은 작은 객체들이 생겨 복잡도가 증가할 수 있음
- 디버깅 및 유지보수가 어려워질 수 있음
