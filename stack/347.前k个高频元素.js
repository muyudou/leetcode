/**
 * 统计元素出现的频率构造map结构，用map的前k个元素构造小顶堆
 * 前k个元素构建小顶堆，后面的元素和堆顶进行比较，如果比它小，不做任何处理，如果比它大，则和堆顶元素替换，重新调整堆为小顶堆
 * 如果是前k个大的元素，使用小顶堆，这样最后剩余的k个元素就是最大的，小的都删除掉
 * 反之，如果是前k小的数据，使用大顶堆，这样最后k个数据就是最小的，大的都已经出去了
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const map = {};
    const len = nums.length;
    for (let i = 0; i < len; i++) {
        if (map[nums[i]]) {
            map[nums[i]]++;
        } else {
            map[nums[i]] = 1;
        }
    }
    const heap = [0];
    let count = 0;
    // 收集map的前k个元素构造小顶堆,heap里存的是key
    Object.keys(map).forEach((key) => {
        if (count++ < k) {
            heap.push(key);
            if (count === k) {
                buildHeap(heap, map, k);
            }
        }  else if (map[key] > map[heap[1]]) {
            heap[1] = key;
            heapify(heap, map, 1);
        }
    })
    return heap.slice(1);
};

function buildHeap(heap, map, k) {
    const start = Math.floor(k / 2);
    for (let i = start; i > 0; i--) {
        heapify(heap, map, i);
    }
}

function heapify(heap, map, i) {
    const len = heap.length;
    let minIndex = i;
    const leftChild = 2 * i;
    if (leftChild <= len && map[heap[leftChild]] < map[heap[i]]) {
        minIndex = leftChild;;
    }
    const rightChild = leftChild + 1;
    if (rightChild <= len && map[heap[rightChild]] < map[heap[minIndex]]) {
        minIndex = rightChild;
    }
    // 如果堆顶元素大于孩子节点，则和孩子节点进行交换
    if (minIndex !== i) {
        [heap[i], heap[minIndex]] = [heap[minIndex], heap[i]];
        if (minIndex < len) {
            heapify(heap, map, minIndex);
        }
    }
}
