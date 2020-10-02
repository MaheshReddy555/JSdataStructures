class hashTable {
  constructor(size = 53) {
    this.keymap = new Array(size);
  }

  _hash(key) {
    let total = 0;

    for (let i = 0; i < Math.min(key, 100); i++) {
      let char = key[i];
      let charValue = char.charCodeAt(0) - 96;
      let pirmeNum = 31;
      total = (total * pirmeNum + charValue) % this.keymap.length;
    }
    return total;
  }
  set(key, value) {
    let index = this._hash(key);
    if (this.keymap[index]) {
      this.keymap[index].push([key, value]);
    } else {
      this.keymap[index] = [[key, value]];
    }
    return index;
  }

  get(key) {
    let index = this._hash(key);
    if (!this.keymap[index]) return undefined;

    for (let i = 0; i < this.keymap[index].length; i++) {
      if (this.keymap[index][i][0] === key) {
        return this.keymap[index][i][1];
      }
    }
  }
}
