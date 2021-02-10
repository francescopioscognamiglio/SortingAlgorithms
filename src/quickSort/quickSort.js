/**
 * Quick sort is a sorting recursive algorithm.
 * It is based on the concept of "Divide and Conquer" (like merge sort): split a problem into n elementary problems.
 * 
 * Quick sort logic:
 * Instead of merge sort, it try to split the array given in input into two parts where the first part is less or equal than a point
 * and the second one is greater than that point.
 * So at the end of splitting we have a point and we call recursively the same logic on the first part and the second part (both without the point)
 * because we have found the final position of the point.
 * @param {*} A array
 * @param {*} i start of the portion of the array to consider
 * @param {*} f end of the portion of the array to consider
 */
function quickSort(A, i = 0, f = 0) {

    // base case
    if (i >= f) return;

    // calculate the point of the portion
    var m = partition(A, i, f);

    // split array into two parts
    // call quickSort on the first part (without the point m)
    quickSort(A, i, m-1);
    // call quickSort on the second part (without the point m)
    quickSort(A, m+1, f);
}

/**
 * Create two parts of the array given as parameter where the first part is less or equal than a point
 * and the second one is greater than that point.
 * @param {*} A array
 * @param {*} i start of the partition of the array given as parameter
 * @param {*} f end of the partition of the array given as parameter
 */
function partition(A, i, f) {

    // the point is the first element of the partition of the array
    var p = A[i];

    // create indexes to iterate on the partition of the array
    var ia = i;
    var ib = f;

    // iterate until we know the final position of the point
    while (true) {
        while (ia < f && A[ia] <= p) ia++;
        while (A[ib] > p) ib--;

        if (ia < ib) {
            var temp = A[ia];
            A[ia] = A[ib];
            A[ib] = temp;
        } else {
            var temp = A[i];
            A[i] = A[ib];
            A[ib] = temp;
            return ib;
        }
    }
}