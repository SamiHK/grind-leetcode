/*
 * @lc app=leetcode id=295 lang=javascript
 *
 * [295] Find Median from Data Stream
 */

// @lc code=start



/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

 class MedianFinder{
    constructor(){
    // Use below links if you want to understand more about the PriorityQueue
	// https://github.com/datastructures-js/priority-queue
    // https://support.leetcode.com/hc/en-us/articles/360011833974-What-are-the-environments-for-the-programming-languages
        this.minHeap = new MinPriorityQueue(); // holds right part 
        this.maxHeap = new MaxPriorityQueue(); // holds left part(elements in right > elements in left)
    }
        
    addNum(num){
        // inserting in min heap bubbles up the smallest element in this heap to top
        this.minHeap.enqueue(num); 
        this.maxHeap.enqueue(this.minHeap.dequeue().element);
        // To balance the size
        // This will always keep min heap size >= max heap size
        if (this.minHeap.size() < this.maxHeap.size()) {
            this.minHeap.enqueue(this.maxHeap.dequeue().element); 
        }
    }
    
    findMedian(){
        // Odd size input array
        if (this.minHeap.size() > this.maxHeap.size()) return this.minHeap.front().element;
        else return (this.minHeap.front().element + this.maxHeap.front().element) / 2; // Even size input array
    }
}

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
// @lc code=end

