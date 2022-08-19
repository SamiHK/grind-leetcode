/*
 * @lc app=leetcode id=56 lang=javascript
 *
 * [56] Merge Intervals
 */

// @lc code=start
// Javascript Trick
// b = [1, 2, 24, 3, 35, 4, 4, 6];
// ascending sort nums/chars
// b.sort( (a,b) => (a-b) ) = [1, 2, 3, 4, 4, 6, 24, 35]
// descending sort nums/chars
// b.sort( (a,b) => (b-a) ) = [1, 2, 3, 4, 4, 6, 24, 35]

// Javascript sorting for intervals of array is always in ascending order
// a = [[2,9],[0,2],[2,4],[4,9]];


// Ascending sort Intervals
// a.sort() => [[0,2],[2,4],[2,9],[4,9]];
// OR 
// a.sort( ([a],[b]) => ([a-b])) = [[0,2],[2,4],[2,9],[4,9]];

// Descending sort Intervals
// a.sort() => [[0,2],[2,4],[2,9],[4,9]];
// and a.reverse();

// a.sort( ([a],[b]) => ([b-a])) = [[4,9],[2,9],[2,4],[0,2]];



// const object = [[0,2],[2,9],[2,4],[4,9]];

// for (let key in object) {
//   console.log(`${key}: ${object[key]}`); // 0: [0,2]
// }

// for (let obj of object) {
//   console.log(`${obj[0]} : ${obj[1]}`); // 0: 2

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 * @runtime O(n log (n)) - sorting + looping
 * @space O(n)
 */
 var merge = function(intervals) {
        
    //[[2,9],[0,2],[4,9],[2,4]]
    intervals.sort(([v1],[v2]) => ([v1-v2]));  // sort interval in descending order
    //[[4,9],[2,9],[2,4],[0,2]]
    
    let output = [intervals[0]];
    for(let k = 1; k < intervals.length; k++) {
        
        let [start, end] = intervals[k];
        let [lastStart, lastEnd] = output[output.length-1];
        
        // if new interval start is bigger than last interval, not overlapping
        if(start > lastStart && start > lastEnd) {
            output.push([start, end]);
        } else {
            // overlapping
            output[output.length-1][0] = Math.min(lastStart, start);
            output[output.length-1][1] = Math.max(lastEnd, end);
        }
    }
    
    return output;
};
// @lc code=end

