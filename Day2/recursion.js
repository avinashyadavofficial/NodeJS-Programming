/*JavaScript uses a call stack to keep track of function calls.
Think of it like a stack of plates — LIFO (Last In, First Out).
Every time a function is called:
It’s added to the top of the stack
When a function finishes, it’s removed
*/

function recurse(x) {
    if (x > 3) return;
    console.log(x);
    recurse(x + 1);
  }
recurse(1);

//callback
// recurse(1) → prints 1, calls recurse(2)
// recurse(2) → prints 2, calls recurse(3)
// recurse(3) → prints 3, calls recurse(4)
// recurse(4) → hits if (x > 3) → returns
/*
1
2
3
 */

function mystery(n) {
    if (n <= 0) return;
    mystery(n - 2);
    console.log(n);
  }
mystery(5);
//callback:
/*
Step	What Happens
1	mystery(5)
2	→ calls mystery(3)
3	→ calls mystery(1)
4	→ calls mystery(-1)
5	mystery(-1) returns
6	console.log(1)
7	console.log(3)
8	console.log(5) 
*/
/*
1
3
5
 */
