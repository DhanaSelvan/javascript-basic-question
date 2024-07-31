// Program - 1 (Check the two arrays are equality)
var arr1 = [1, 2, 3, 4]
var arr2 = [5, 6, 7, 8]

var arr3 = [10, 20, 30, 40]
var arr4 = [50, 60, 70]
console.log('Program - 1')
console.log('Example for the Array Equality')
console.log('Here the arr1 and arr2 are Equality')
console.log(arr1.length == arr2.length)

console.log('Example for the Array Not Equality')
console.log('Here the arr3 and arr4 are Not Equality')
console.log(arr4.length == arr3.length)

// Program - 2 (Remove an element in array by its index)
var arr5 = [10, 20, 30, 40, 50];
var index = 2;
console.log('\nProgram - 2')
console.log("Before Removing an item ->", arr5);
for(let ind=0; ind<arr5.length; ind++) {
    if(ind==index) {
        arr5.splice(ind, 1);
    }
}
console.log("After Removing an item ->", arr5);

// Program - 3 (Inserting an item at specific position)
var arr6 = ['Apple', 'Banana', 'Dog', 'Eat'];
var item = 'Cat';
var pos = 3;
console.log('\nProgram - 3')
console.log('Before Inserting an Item ->', arr6);
arr6.splice(pos, 0, item);
console.log('After Inserting an Item ->', arr6);

// Program - 4 (Finding the Longest String in an Array)
var arr7 = ['Apple', 'Banana', 'Dog', 'Eat'];
arr7.sort()
console.log('\nProgram - 4')
console.log('Largest String in the Array ->', arr7[0])

// Program - 5 (Insertions of Two Sets)
console.log('\nProgram - 5')
var arr8 = new Set([1, 2, 3, 6, 5]);
var arr9 = new Set([6, 7, 4, 5, 10]);
var intersection = arr8.intersection(arr9)
console.log('Intersection of Two Sets ->', intersection)
