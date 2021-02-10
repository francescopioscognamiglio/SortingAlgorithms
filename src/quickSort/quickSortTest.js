// test on normal input
a1 = [1, 2, 1, 5, 10, 1, 15, 2];
quickSort(a1, 0, 7);
console.log(a1);
// test on another normal input
a2 = [10, 1, 3, 7];
quickSort(a2, 0, 3);
console.log(a2);
// test on empty input
a3 = [];
quickSort(a3);
console.log(a3);
// test on input with single value
a4 = [5];
quickSort(a4, 0, 0);
console.log(a4);