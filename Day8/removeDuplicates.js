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
        return this.s.pop();
    }
    peek() {
        return this.s[this.s.length - 1];
    }
    isEmpty() {
        return this.s.length === 0;
    }
    toString() {
        return this.s.join('');
    }
}

function sol(str) {
    let stack = new Stack();
    for (let char of str) {
        if (!stack.isEmpty() && stack.peek() === char) {
            stack.pop();
        } else {
            stack.push(char);
        }
    }
    return stack.toString();
}

console.log(sol("abbaca"));  // Output: "ca"

