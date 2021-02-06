function insertionSort(a) {
    n = a.length;

    for (i = 0; i < n; i++) {
        j = i;
        while (j > 0 && a[j-1] > a[j]) {
            temp = a[j];
            a[j] = a[j-1];
            a[j-1] = temp;
            j--;
        }
    }

    return a;
}