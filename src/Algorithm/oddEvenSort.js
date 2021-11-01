export async function combSort(arr) {
    let length = arr.length;
    let shrink = 1.3;
    let gap = length;
    let sorted = false;

    while (!sorted) {
        gap = parseInt(gap/shrink);
        if (gap <= 1) {
            sorted = true;
            gap = 1;
        }

        for (let i = 0; i < length-gap; i++) {
            let sm = gap + i;
            if (arr[i] > arr[sm]) {
               arr = [arr[i], arr[sm]] = [arr[sm], arr[i]]
                sorted = false;
            }
        }
    }
}
  