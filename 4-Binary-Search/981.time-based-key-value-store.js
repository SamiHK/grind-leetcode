/*
 * @lc app=leetcode id=981 lang=javascript
 *
 * [981] Time Based Key-Value Store
 */

// @lc code=start

class TimeMap{
    
    constructor(){
        this.map = new Map();
    }
    
    // O(1), O(n)
    set(key,value,timestamp){
        
        let valueTimestamps = this.map.has(key) ? this.map.get(key) : [];
        
        valueTimestamps.push([timestamp, value]);
        
        this.map.set(key, valueTimestamps);
    }
    
    
    // log(n);
    get(key, timestamp){
        // map = { foo: [[1, bar], [4, bar2]], key2: [[1, bar], [2, bar2], [3, bar3], [4, bar3]]}
        const keyTimestamps = this.map.has(key) ? this.map.get(key) : [];
        //[[1, bar], [4, bar2]] => get results for [foo and 1,3,4,5]
        let left = 0,
            right = keyTimestamps.length - 1,
            mid, value = null
        
		// using binary search to find the timestamp_prev <= timestamp
        while(left <= right) {
            
            mid = left + Math.floor((right - left) / 2);
            
            if(keyTimestamps[mid][0] <= timestamp) {
                value = keyTimestamps[mid][1];
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        
        return value === null ? "" : value;
    }
}



/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
// @lc code=end


// var TimeMap = function() {
    
// };

// /** 
//  * @param {string} key 
//  * @param {string} value 
//  * @param {number} timestamp
//  * @return {void}
//  */
// TimeMap.prototype.set = function(key, value, timestamp) {
    
// };

// /** 
//  * @param {string} key 
//  * @param {number} timestamp
//  * @return {string}
//  */
// TimeMap.prototype.get = function(key, timestamp) {
    
// };

// /** 
//  * Your TimeMap object will be instantiated and called as such:
//  * var obj = new TimeMap()
//  * obj.set(key,value,timestamp)
//  * var param_2 = obj.get(key,timestamp)
//  */