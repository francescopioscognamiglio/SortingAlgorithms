/**
 * Merge sort is a sorting recursive algorithm.
 * It is based on the concept of "Divide and Conquer": split a problem into n elementary problems.
 * 
 * Merge sort logic:
 * Split the array given in input into two parts, then split each part into two sub parts
 * and go on until we reach elementary cases (single ordered elements).
 * Starting from these elementary cases to the first two parts, the two sub parts are merged and returned.
 * @param {*} A array
 * @param {*} i start of the portion of the array to consider
 * @param {*} f end of the portion of the array to consider
 */
function mergeSort(A, i = 0, f = 0) {

    // length of the portion
    var n = f - i + 1;
    // base case
    if (n === undefined || n <= 1) return;

    // calculate the midpoint of the portion
    var m = Math.floor((i + f) / 2);

    // split array into two parts
    // call mergeSort on the first part
    mergeSort(A, i, m);
    // call mergeSort on the second part
    mergeSort(A, m+1, f);

    // merge the two parts
    merge(A, i, m, f);
}

/**
 * Merge two parts of the array given as parameter.
 * @param {*} A array
 * @param {*} i start of the first part of the array given as parameter
 * @param {*} m midpoint (when end the first part and begin the second)
 * @param {*} f end of the second part of the array given as parameter
 */
function merge(A, i, m, f) {

    // length of the first part of the array
    var na = m - i + 1;
    // length of the second part of the array
    var nb = f - (m + 1) + 1;

    // create new array that contains the ordered parts
    var C = new Array(na + nb);

    // create indexes to iterate on the two parts of the array
    var ia = i;
    var ib = m + 1;

    // iterate on each empty element of the new array to insert ordered elements from the two parts
    for (var ic = 0; ic < na + nb; ic++) {
        if ((ib > f) || (ia <= m && A[ia] <= A[ib])) {
            C[ic] = A[ia++];
        } else {
            C[ic] = A[ib++];
        }
    }

    // copy the new array into the array given as parameter
    for (var ic = 0, ia = i; ic < na + nb; ic++, ia++) {
        A[ia] = C[ic];
    }
}