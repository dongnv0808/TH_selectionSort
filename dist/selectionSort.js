"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectionSort = void 0;
class SelectionSort {
    static selectionSort(list) {
        for (let i = 0; i < list.length - 1; i++) {
            let currentMin = list[i];
            let currentIndexMin = i;
            for (let j = i + 1; j < list.length; j++) {
                if (currentMin > list[j]) {
                    currentMin = list[j];
                    currentIndexMin = j;
                }
            }
            if (currentIndexMin !== i) {
                list[currentIndexMin] = list[i];
                list[i] = currentMin;
            }
        }
    }
}
exports.SelectionSort = SelectionSort;
SelectionSort.list = [1, 9, 4.5, 6.6, 5.7, -4.5];
SelectionSort.selectionSort(SelectionSort.list);
for (let k = 0; k < SelectionSort.list.length; k++) {
    console.log(SelectionSort.list[k]);
}
