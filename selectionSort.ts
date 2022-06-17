export class SelectionSort{
    static list: number[] = [1, 9, 4.5, 6.6, 5.7, -4.5];
    static selectionSort(list: number[]): void{
        for(let i = 0; i < list.length - 1; i++){
            let currentMin: number = list[i];
            let currentIndexMin: number = i;
            for(let j = i + 1; j < list.length; j++){
                if(currentMin > list[j]){
                    currentMin = list[j];
                    currentIndexMin = j;
                }
            }
            if(currentIndexMin !== i){
                list[currentIndexMin] = list[i];
                list[i] = currentMin;
            }
        }
    }
}
SelectionSort.selectionSort(SelectionSort.list);
for(let k = 0; k < SelectionSort.list.length; k++){
    console.log(SelectionSort.list[k]);
}