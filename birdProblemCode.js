//we can solve this problem in two ways first is by sorting the array and then counting the consecutive max element in array and also min element in array and then return if two elements have same freq then we will return the one with smaller value (ID acc to question)

//second way is by creating a frequency array and storing frequency of each id and return the freq of least frequent and most frequent

//i will solve this problem using frequency array


function Solve(arr) {
    const map = [];
    var maxNum = 0;
    var minNum = 100;
    var maxChar = 0;
    var minChar = 0;
    for (var num of arr) { 
        if (map[num]) {
            map[num]++;
        } else { 
            map[num] = 1;
        }
    }
    for (var num in map) { 
        if (map[num] > maxNum) { 
            maxNum = map[num];
            maxChar = num;
        }
    }
    for(var num in map){
        if(map[num] < minNum){
            minNum = map[num];
            minChar = num
        }
    }
    return {maxChar,minChar};
}

let arr1 = [1,1,2,2,4,4,4,4,5]
let arr2 = [2,2,2,2,4,4,4,4,5]
let arr3 = [1,2,2,4,4,4,4,5] 

console.log(Solve(arr1));
console.log(Solve(arr2));
console.log(Solve(arr3));