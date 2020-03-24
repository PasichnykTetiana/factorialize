
// function factorialize(num) {
//     var m=1;
//
//     for( i=1; i<num+1; i+=1) {
//         m=m*i;
//
// }
//     return m;
// }
//
// console.log(factorialize(5));

// function factorialize(num) {
//     var x=num;
//     for( i=1; i<num; i+=1) {
//
//         x=x*i; //если оставить num - виснет, wtf?
//
//
//     }
//     return x;
// }
//
// console.log(factorialize(5));

function factorialize(num) {
    if (num < 0) {
        return -1;
    } else if (num === 0) {
        return 1;
    } else {
        return (num * (factorialize(num -1)));
    }
}

console.log(factorialize(5)); прример
