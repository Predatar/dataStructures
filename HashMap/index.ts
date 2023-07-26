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

	log(){
		const entries = Object.entries(this.hashMap);

		for (const iterator of entries) {
			console.log(iterator);
		}
	}
}

const hashMap = new HashMap<string, number>();

hashMap.set('Max', 1);
hashMap.set('Vlad', 2);
hashMap.set('Artem', 3);

hashMap.log();