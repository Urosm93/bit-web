// Sort a previously defined array. Place its sorted values into a new array whose values are equivalent to the first array's values multiplied by 2.
// Input: [ 13, 11, 15, 5, 6, 1, 8, 12 ]
// Output: [ 2, 10, 12, 16, 22, 24, 26, 30 ]



function sort(array){
    newArr = [];

    for(var i = 0; i < array.length; i++){
        var element = array[i + 1];
        var tmp = 0;
        if(element < array[i]){
            newArr[newArr.length] = array[i];
        }
        else{
            newArr[newArr.length] = element;
        }
    }
    return newArr;
}
console.log(sort([ 13, 11, 15, 5, 6, 1, 8, 12 ]));
