// Valid Parentheses
// Given a string containing only ()[]{}, determine if the input string is valid.
// Input: "({[]})"
// Output: true
class Stack{
    constructor(){
        this.s=[];
    }
    push(element){
        this.s.push(element);
    }
    pop(){
        if(this.isEmpty()){
            return "Empty Stack";
        }
        else{
            return this.s.pop();
        }
    }
    peek(){
        return this.s[this.s.length-1];
    }
    isEmpty(){
        
        return this.s.length===0;
    }
    size(){
        
        return this.s.length;
    }
    clear(){
        this.s=[];
    }
}
function isBalanced(str) {
    const stack = new Stack();
    const brackets = { '(': ')', '{': '}', '[': ']' };
  
    for (let char of str) {
      if (brackets[char]) {
        stack.push(char);
      } else if (Object.values(brackets).includes(char)) {
        if (stack.isEmpty() || brackets[stack.pop()] !== char) {
          return false;
        }
      }
    }
    return stack.isEmpty();
}
  
  console.log(isBalanced("({[]})")); // true
  console.log(isBalanced("({[)]}")); // false
  
