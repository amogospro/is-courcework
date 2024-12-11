import { EventEmitter } from 'events';
import type { ProcessedImg } from './processor';

type K = string;
type V = ProcessedImg;

export const events = {
  SET: 'STORAGE_SET'
};

export interface SetEvent {
  key: K;
  value: V;
}
export class Storage<K, V> {
  map = new Map<K, V>();
  emitter = new EventEmitter();

  
  clear() {
    return this.map.clear;
  }
  delete(key: K) {
    return this.map.delete(key);
  }
  /**
   * Executes a provided function once per each key/value pair in the Map, in insertion order.
   */
  forEach(callbackfn: (value: V, key: K, map: Map<K, V>) => void, thisArg?: any) {
    return this.map.forEach(callbackfn, thisArg);
  }
  /**
   * Returns a specified element from the Map object. If the value that is associated to the provided key is an object, then you will get a reference to that object and any change made to that object will effectively modify it inside the Map.
   * @returns Returns the element associated with the specified key. If no element is associated with the specified key, undefined is returned.
   */
  get(key: K) {
    return this.map.get(key);
  }
  /**
   * @returns boolean indicating whether an element with the specified key exists or not.
   */
  has(key: K) {
    return this.map.has(key);
  }
  /**
   * Adds a new element with a specified key and value to the Map. If an element with the same key already exists, the element will be updated.
   */
  set(key: K, value: V) {
    this.emitter.emit(events.SET, { key, value });
    return this.map.set(key, value);
  }
}

export const processed_storage = new Storage<K, V>();
export const raw_storage = new Storage<string, ArrayBuffer>();
