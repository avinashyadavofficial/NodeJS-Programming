// Valid 
// determine if the input string is valid.

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
      else{
        if (stack.peek()==char ){
            stack.pop();
        }
        else{
            stack.push(char);
        }
        
      }
    }
    return stack.isEmpty();
}
  
  console.log(isBalanced("(a{[]}a)")); // true
  console.log(isBalanced("({[)]}")); // false
  console.log(isBalanced("(a[]a)"));//true
  console.log(isBalanced("([a]a)"));//false
  console.log(isBalanced("abba"));//true
  console.log(isBalanced("abccba"));//true
  
