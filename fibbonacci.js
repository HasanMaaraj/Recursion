const fibs = n => {
    if (n === 1) return [0];
    let fibArray = [0, 1];
    for (let i = 2; i < n; i++) {
        fibArray.push(fibArray[fibArray.length-1] + fibArray[fibArray.length-2]);
    }
    return fibArray;
}

console.log(fibs(1));
console.log(fibs(2));
console.log(fibs(8));
console.log(fibs(16));


const fibsRec = (n) => {
    if (n === 1) return [0];
    if (n === 2) return [0,1];
    return [...fibsRec(n-1), fibsRec(n-1)[n-2]+fibsRec(n-1)[n-3]];
}

console.log(fibsRec(1));
console.log(fibsRec(2));
console.log(fibsRec(8));
console.log(fibsRec(16));