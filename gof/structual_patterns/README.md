# 구조 패턴 (Structural Pattern)

- 클래스나 객체를 조합하여 더 크고 유연한 구조를 형성하는데 사용되는 디자인 패턴
- 객체 간의 관계를 간단하게 정의하고 이를 통해 효율적이고 확장 가능한 설계를 가능하게 해줌

# 생성 패턴의 종류

#### 어댑터 (Adapter)

- 목적
  - 호환되지 않는 인터페이스를 가진 클래스들이 함께 작동할수 있도록 변환기 역할 수행

#### 브릿지 (Bridge)

- 목적
  - 추상화와 구현을 분리하여 독립적으로 확장할 수 있도록 설계

#### 컴포지트 (Composite)

- 목적
  - 객체를 트리 구조로 구성하여 개별 객체와 복합 객체를 동일하게 처리

#### 데코레이터 (Decorator)

- 목적
  - 객체에 동적으로 새로운 기능을 추가

#### 파사드 (Facade)

- 목적
  - 복잡한 서브시스템을 단순화하여 통합된 인터페이스를 제공

#### 플라이웨이트 (Flyweight)

- 목적
  - 공유 가능한 상태를 활용하여 메모리를 절약하고 성능을 최적화
  - 객체를 최대한 공유하여 동일한 데이터를 반복적으로 생성하지 않도록 함

#### 프록시 (Proxy)

- 목적
  - 객체 접근을 제어하거나 객체 사용 전후로 부가 작업을 처리
  - 실제 객체 대신 대리 객체(Proxy)를 사용해 클라이언트와 실제 객체 간의 인터페이스를 제공
