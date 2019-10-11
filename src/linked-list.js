const Node = require('./node');

class LinkedList {
    constructor() {
        this.list = [];
    }

    get length() {
        return this.list.length;
    }

    get _head() {
        return this.list[0];
    }

    get _tail() {
        const last = this.list.length - 1;
        return this.list[last];
    }


    append(data) {
        this.list.push(new Node(data));
        return this;
    }

    head() {
        return this.list.length !== 0 ? this.list[0].data : null;
    }

    tail() {
        return this.list.length !== 0 ? this.list[this.list.length - 1].data : null;
    }

    at(index) {
        return this.list.length !== 0
            && this.list.length > index && index >= 0 ?
            this.list[index].data : null;
    }

    insertAt(index, data) {
        this.list.splice(index, 0, new Node(data));
    }

    isEmpty() {
        return this.list.length === 0;
    }

    clear() {
        this.list.length = 0;
        return this;
    }

    deleteAt(index) {
        this.list.splice(index, 1);
        return this;
    }

    reverse() {
        this.list.reverse();
        return this;
    }

    indexOf(data) {
        for (let index = 0; index < this.list.length; index++) {
            if (this.list[index].data === data) {
                return index;
            }
        }
        return -1;
    }
}

module.exports = LinkedList;
