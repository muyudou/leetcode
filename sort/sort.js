/**
 * 7大排序算法：
 * 1. 冒泡排序
 * 2. 选择排序
 * 3. 插入排序
 * 4. 希尔排序
 * 5. 归并排序
 * 6. 快速排序
 * 7. 堆排序
 */

// 每次讲一个最大或者最小的元素冒泡到最后
function bubbleSort(arr) {
    const len = arr.length;
    // 遍历n-1次
    for (let i = 0; i < len - 1; i++) {
        // 比较范围是0-j，j-n是已经排序好的数据
        for (let j = 0; j < len - i - 1; j++) {
            // 从0开始的话和后面的元素比较
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

arr = [3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
bubbleSort(arr);

// 选择排序: 每趟从无序区中选择最小的记录，和有序区最后一个i做交换
function selectionSort(arr) {
    const len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        let min = arr[i];
        let minIndex = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < min) {
                min = arr[j];
                minIndex = j;
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
    return arr;
}
arr = [3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
selectionSort(arr);

// 插入排序，假设第一个元素是排好序的，然后后面每个元素插入前面排序，像摆扑克牌一样, 
// 遍历之前的元素，如果大于当前的元素，则后移，否则跳出，之后将i的值赋值给j最后的位置
function insertSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let tmp = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > tmp) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = tmp;
    }
    return arr;
}
arr = [3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
insertSort(arr);


// 希尔排序：将元素分为若干个子序列分别进行直接插入排序，gap为一个序列，不断降低为1，为1后即为排完序的序列
// 是插入排序的进化版
function shellSort(arr) {
    let len = arr.length;
    let gap = Math.floor(len / 2);
    for (gap; gap > 0; gap = Math.floor(gap / 2)) {
        for (let i = gap; i < len; i++) {
            let temp = arr[i];
            let j;
            for (j = i - gap; j >= 0 && arr[j] > temp; j -= gap) {
                arr[j + gap] = arr[j];
            }
            arr[j + gap] = temp;
        }
    }
    return arr;
}

arr = [3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
shellSort(arr);

// 把长度为n的输入序列非为2个长度为n/2的子序列，对两个子序列分别采用归并排序，将两个排序好的子序列合并为最终的排序序列
function mergeSort(arr) {
    const len = arr.length;
    if (len < 2) {
        return arr;
    }
    const middle = Math.floor(len / 2);
    return merge(mergeSort(arr.slice(0, middle)), mergeSort(arr.slice(middle)))
}

function merge(left, right) {
    let result = [];
    let i = 0;
    let j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i++]);
        } else {
            result.push(right[j++]);
        }
    }
    while (i < left.length) {
        result.push(left[i++]);
    }
    while (j < right.length) {
        result.push(right[j++]);
    }
    return result;
}

arr = [3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
mergeSort(arr);


function swap(arr, left, right) {
    let tmp = arr[left];
    arr[left] = arr[right];
    arr[right] = tmp;
}
// 快速排序：选择枢纽元，分区，递归排序
function quickSort(arr, left, right) {
    if (right <= left) {
        return arr;
    }
    // 随机选择枢纽元：易错点
    const pivotIndex = Math.floor(Math.random() * (right - left + 1)) + left;
    const pivot = arr[pivotIndex];
    // 交换枢纽元
    [arr[left], arr[pivotIndex]] = [arr[pivotIndex], arr[left]];
    let i = left + 1;
    let j = right;
    while (i < j) {
        // i最后指向比它大的元素
        while (i <= j && arr[i] < pivot) {
            i++;
        }
        // j指向比它小的元素，因为枢纽元在第一位，所以要和比它小的元素替换
        while (j >= i && arr[j] > pivot) {
            j--;
        }
        if (i < j) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    if (arr[j] < pivot) {
        [arr[j], arr[left]] = [arr[left], arr[j]];
    }
    quickSort(arr, 0, j - 1);
    quickSort(arr, j + 1, right);
    return arr;
}
arr = [3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
quickSort(arr, 0, arr.length - 1);


function swap(arr, left, right) {
    let tmp = arr[left];
    arr[left] = arr[right];
    arr[right] = tmp;
}
function quickSort(arr, start, end) {
    let pivot = arr[start];
    if (start >= end) {
        return;
    }
    let i = start + 1;
    let j = end - 1;
    while (i < j) {
        // i和j可以相遇,j最后一定指向的是比枢纽元小的元素
        while (i <= j && arr[i] <= pivot) {
            i++;
        }
        while (j >= i && arr[j] >= pivot) {
            j--;
        }
        if (i < j) {
            swap(arr, i, j);
        }
    }
    swap(arr, j, start);
    quickSort(arr, start, j);
    quickSort(arr, j+1, end);
}
arr = [3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
quickSort(arr, 0, arr.length);

function quickSort2(arr) {
    if (arr.length < 2) {
        return arr;
    }
    const pivot = arr[0];
    const left = [];
    const right = [];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            right.push(arr[i]);
        } else {
            left.push(arr[i]);
        }
    }
    return [...quickSort2(right), pivot, ...quickSort2(left)];
}

arr = [3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
quickSort2(arr);

function swap(arr, left, right) {
    let tmp = arr[left];
    arr[left] = arr[right];
    arr[right] = tmp;
}

// 堆排序
function heapSort(arr) {
    buildHeap(arr);
    for (let j = arr.length - 1; j > 0; j--) {
        swap(arr, 0, j);
        // 这里需要调整的堆的大小要减小，所以heapify需要加上size参数，否则范围不对
        heapify(arr, 0, j);
    }
    return arr;
}

function buildHeap(arr) {
    const index = Math.floor(arr.length / 2) - 1;
    // 从第一个非叶子节点开始调整堆
    for (let i = index; i >= 0; i--) {
        heapify(arr, i, arr.length);
    }
    return arr;
}

// 调整以index为根节点的子树为大顶堆
function heapify(arr, index, size) {
    const len = size;
    let maxIndex = index;
    const leftChild = maxIndex * 2 + 1;
    const rightChild = leftChild + 1;
    if (leftChild < len && arr[leftChild] > arr[index]) {
        maxIndex = leftChild;
    }
    if (rightChild < len && arr[rightChild] > arr[maxIndex]) {
        maxIndex = rightChild;
    }
    if (index !== maxIndex) {
        swap(arr, index, maxIndex);
        heapify(arr, maxIndex, size);
    }
}

var arr=[91,60,96,13,35,65,46,65,10,30,20,31,77,81,22];
heapSort(arr);