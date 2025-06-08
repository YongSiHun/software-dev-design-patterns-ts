import { Iterator } from "../iterators/iterator";

export interface Aggregate<T> {
  createIterator(): Iterator<T>;
}
