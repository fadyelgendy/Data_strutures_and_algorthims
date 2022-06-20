class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size);
    }

    set(key, value) {
        let index = this._hash(key);
        let entry = [key, value];

        if (!this.keyMap[index])
            this.keyMap[index] = [];

        this.keyMap[index].push(entry);
    }

    get(key) {
        let index = this._hash(key);

        if (this.keyMap[index]) {
            for (let i = 0; i < this.keyMap[index].length; i++) {
                let record = this.keyMap[index][i];
                if (record[0] == key)
                    return record[1];
            }
        }

        return undefined;
    }

    keys() {
        let keys = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                let records = this.keyMap[i];
                
                for (let j = 0; j < records.length; j++) {
                    if (!keys[records[j][0]])
                    keys.push(records[j][0]);
                }
            }
        }

        return keys;
    }

    values() {
        let values = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                let records = this.keyMap[i];
                
                for (let j = 0; j < records.length; j++) {
                    if (!values[records[j][1]])
                    values.push(records[j][1]);
                }
            }
        }

        return values;
    }

    _hash(key) {
        let total = 0;
        let primeNumber = 31;
        for (let char of key) {
            let sub = (char === char.toUpperCase()) ? 64 : 96;
            total = ((char.charCodeAt(0) - sub) + primeNumber) % this.keyMap.length;
        }

        return total;
    }
}

export default HashTable;