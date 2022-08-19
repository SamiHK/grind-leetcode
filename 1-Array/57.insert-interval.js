/*
 * @lc app=leetcode id=57 lang=javascript
 *
 * [57] Insert Interval
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 * @runtime O(n)
 * @space O(n)
 */
 var insert = function(intervals, newInterval) {
    
    validateData(intervals, newInterval); // constant
    
    let len = intervals.length;
    let idx = 0
    
    // check on which index interval can be inserted
    while(idx < len){
        if (intervals[idx][0] >= newInterval[0]) {
            break
        }
        idx++
    } // O(n)
    
    // insert the newInterval in intervals
    intervals.splice(idx, 0, newInterval)
    
	// now we need to handle overlapping intervals
    return inArrayMerge(intervals) // O(n), (n)
};


var validateData = (intervals, newInterval) => {
    if(intervals === null || newInterval === null) return [];
    if(newInterval.length === 0) return intervals;
    if(intervals.length === 0) return [newInterval];
    return true;
}


var inArrayMerge = (intervals) => {
    
    let output = [intervals[0]];
    
    for(let k = 1; k < intervals.length; k++) {
        
        let [start, end, lastStart, lastEnd] = [intervals[k][0], intervals[k][1], output[output.length-1][0], output[output.length-1][1]];
        
        // if new interval start is bigger than last interval (start and end) then it is not overlapping
        if(start > lastStart && start > lastEnd) {
            output.push([start, end]);
        } else {
            // overlapping
            output[output.length-1][0] = Math.min(lastStart, start);
            output[output.length-1][1] = Math.max(lastEnd, end);
        }
    }
    
    return output;
}
// @lc code=end

