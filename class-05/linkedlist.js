'use strict';
const Node = require('./node.js');


class LinkedList {
    constructor() {
        this.head = null;
        // this.tail = null;
        // this.length = 0;
    }

    add(value){
        var newNode = new Node(value);
        if(!this.head){// empty ll
            this.head = newNode;
        } else {
            let lastNode = this.head;
            while(lastNode.next) {
                lastNode = lastNode.next;
            }//O(n)
            lastNode.next = newNode;
        }
    }

    addNewHeader(value) {
        var newNode = new Node(value);
        if(!this.head){// empty ll
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
    }
}

module.exports = LinkedList;