class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  add(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }

  values() {
    let values = [];
    let current = this.head;
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    return values;
  }
}


class HashTable {
  table = new Array(50);

  add(key, value) {
    let hash = this.getHash(key);
    //if contains a key, do nothing

    if (!this.table[hash]) {
      this.table[hash] = new LinkedList();//LL
    }

    this.table[hash].add({ key, value });
  }

  getHash(key) {
    let hash = 353;
    for (let i = 0; i < key.length; i++) {
      // console.log(hash);
      hash = hash * 599 * key.charCodeAt(i) % this.table.length;
    }

    return hash;
  }

  find(key) {
    // return value;
  }
  contains(key) {
    // return Boolean;
  }
}


const hashTable = new HashTable();
hashTable.add('firstName', 'Ahmad');
hashTable.add('secondName', 'Mohd');
hashTable.add('family', 'Test');


console.log(hashTable.table);
console.log(hashTable.table[0]);
console.log(hashTable.table[0].head.next);
console.log(hashTable.table[20].head);
