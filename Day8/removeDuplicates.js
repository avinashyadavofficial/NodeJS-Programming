// Remove All Adjacent Duplicates In String
// Given a string, remove all adjacent duplicates using a stack.

// Input: "abbaca"

// Output: "ca"

class Stack {
    constructor() {
        this.s = [];
    }
    push(element) {
        this.s.push(element);
    }
    pop() {
        if (this.isEmpty()) {
            return "Empty Stack";
        } else {
            return this.s.pop();
        }
    }
    peek() {
        return this.s[this.s.length - 1];
    }
    isEmpty() {
        return this.s.length === 0;
    }
    size() {
        return this.s.length;
    }
    clear() {
        this.s = [];
    }
    print() {
        console.log(this.s);
    }
}
