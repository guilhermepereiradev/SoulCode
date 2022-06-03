let a = [5, 15, 10, 20];

function calc(array){
    if(array.length == 0){
        return 8;
    } else {
        return array.pop() + calc(array);
    }
}

console.log(calc(a));