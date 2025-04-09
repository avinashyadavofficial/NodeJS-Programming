const data={
    name:"A",
    children:[
        {name:"B",children:[{name:"C",children:[]}]},
        {name:"D",children:[{name:"E",children:[]}]
        }
    ]
};
function printNames(node){
    console.log(node.name);
    node.children.forEach(child=>printNames(child));
}
printNames(data);
/*
A
B
C
D
E
*/