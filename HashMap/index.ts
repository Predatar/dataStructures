import * as crypto from 'crypto';

class HashMap<K extends string, V> {
  private hashMap: { [key: string]: V } = {};

  set(key: K, value: V) {
    this.hashMap[this.hash(key)] = value;
  }

  get(key: K) {
    return this.hashMap[this.hash(key)] || null;
  }

  delete(key: K) {
    delete this.hashMap[this.hash(key)];
  }

  hash(key: string) {
    const hash = crypto.createHash('sha256');
		hash.update(key);
		return hash.digest('hex');
  }
}

const hashMap = new HashMap<string, number>();

hashMap.set('Max', 1);
hashMap.set('Vlad', 2);
hashMap.set('Artem', 3);
hashMap.set('Artem', 4);
hashMap.set('Artem', 5);
hashMap.set('Artem', 6);

console.log(hashMap);