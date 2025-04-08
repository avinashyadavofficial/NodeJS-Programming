/*
2 kinds: 
   Implicit (Type Coercion) – JS does it automatically
    Explicit – You do it on purpose using functions like String(), Number(), etc

    Value	To Number	To String	To Boolean
false	0	"false"	false
true	1	"true"	true
null	0	"null"	false
undefined	NaN	"undefined"	false
'' (empty)	0	""	false
'123'	123	"123"	true
[1,2]	NaN	"1,2"	true
[]	0	""	true
{}	NaN	"[object Object]"	true

 */
//implicit


//Rule 1 : +  Operator
//> If either operand is a string, JS converts the other to string and concatenates:
console.log('5'+2);//52
console.log(2+'5');//25
console.log(true+'5');//true5
console.log(false+'4');//false4

//Rule 2: Other Math Operators (-, *, /, %) → Convert Both to Numbers
console.log('5'-1);//4
console.log(true*3); //3
console.log(true/4); // 0.25
console.log(null/3); //0
console.log(false-4); //-4
console.log(true+2);//3
console.log(0/3); //0

//Rule 3: Booleans → To Number
console.log(true+1); //2
console.log(false-3); //-3

//Rule 4: null → 0 (when coerced to number)
console.log(null+2);//2
console.log(null-2);//-2

//Rule 5: undefined → NaN (Not a Number)
console.log(undefined+1);//NaN
//-> undefined+1 => NaN+1 => NaN

/* 
Rule 6: Arrays and Objects
[] (empty array) → '' → 0 when used in math
[10] → '10' → 10
[1,2] → '1,2' → NaN
{} → NaN (usually)
*/
console.log([]+2); //'2'
console.log([]-1); //1
console.log([1,2]+"Avi"); //"1,2Avi"
console.log([1,2]+3);// "1,23"
console.log([1,2]-3);// NaN => NaN-2 => NaN 
console.log([10]-2);//8

//Rule 7: Object to Primitive
// If an object is used in a context that expects a primitive:
// JS will try to use valueOf() or toString() to convert it.
console.log({}+1);//[object Object]1

//example:
console.log([]+false);//"false"
console.log(null+true);//1
console.log("false"-1);//Nan
console.log([]+false-null+true);// NaN
console.log(true+false+"true");//"1true"
console.log("true"+true+false);//"truetruefalse"
console.log(!!"0"==true);
console.log(!"0");//false
console.log("0");//0
console.log(!!"0");//true
console.log([]==![]);//true
/*
[]=>true
![] => false
so now
[]==false
now we r comparing obj(array) to primitve(boolean) 
so it obj convert into boolean => []=>""=> false
false==false=> true

 */
console.log(!"3");//false
console.log(!"");//true
console.log(null+undefined);//NaN=> 0+NaN => NaN
console.log([]==="");//false
console.log([]=="");   //true











