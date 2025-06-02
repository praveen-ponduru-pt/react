str = 'ABCDDDEFGH'
console.log(str[-1]) 

let maxLength = 0;
let currentLength = 0;
for(let i = 0; i < str.length; i++){
    if(str.charCodeAt(i) - str.charCodeAt(i-1) === 1){
        currentLength++;
    } else {
        currentLength = 1;
    }
    console.log(currentLength)
    maxLength = Math.max(maxLength, currentLength);
}

console.log(maxLength)