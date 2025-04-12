let arr=[2,3,4,6,5,7,3,1];
function sol(arr){
    let count=0;
    let i=1;
    while(i<arr.length){
        if(arr[i]>arr[i-1]){
            count+=1;
            while(arr[i]>arr[i-1]){
                i++;
            }
            i++;
        }
        
        else if(arr[i]<arr[i-1]){
            count+=1;
            while(arr[i]<arr[i-1]){
                i++;
            }
            i++;
        }

        else{
            while(arr[i]==arr[i-1]){
                i++;
            }
            i++;
            
        }

    }
    return count;
}
let arr2=[2,3,1,2,3,1,2,3,1];
console.log(sol(arr));
console.log(sol(arr2));
