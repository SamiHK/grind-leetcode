/*
 * @lc app=leetcode id=1235 lang=javascript
 *
 * [1235] Maximum Profit in Job Scheduling
 */

// @lc code=start
/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 * @runtime O(nlogn > n > logn) = O(nlogn)
 * @space O(n)
 */
 var jobScheduling = function(startTime, endTime, profit) {
    
    //     Think on DP.
    //     Sort the elements by starting time, then define the dp[i] as the maximum profit taking elements from the suffix starting at i.
    //     Use binarySearch (lower_bound/upper_bound on JS) to get the next index for the DP transition.
    
    if(startTime == null || endTime == null || profit == null) return 0;
    if(startTime.length != endTime.length || startTime.length !== profit.length) return 0;
    
    let jobs = [];
    let dp = [];
    
    // create jobs array with startTime, endTime and profit
    for(let i = 0; i< endTime.length; i++){
        jobs.push([startTime[i], endTime[i], profit[i]])
    }
    
    // sort jobs based on ascending endTimes. i.e. on second index
    jobs.sort((a,b) => a[1] - b[1]);
    
    // [[ 1, 3, 50 ], [ 2, 4, 10 ], [ 3, 5, 40 ], [ 3, 6, 70 ]]
    //create base case for dp, store first profit in dp
    dp[0] = jobs[0][2];
    
    // since we already have profit detail for first job, need to check next jobs profit with previous jobs
    for(let i = 1; i< endTime.length; i++){
        
        var pftIndex = binary(i);
        let pft = (pftIndex === -1) ? 0 : dp[pftIndex];
        
        // if previous profit + jobs[i][profit] is greater then update
        dp[i] = Math.max(dp[i-1] , pft + jobs[i][2]);
    }
    return dp[dp.length -1];
    
    
    //---------------------------//
    
    // helper function
    function binary(index){
        var l = 0;
        var h = index-1; // check between start and index
        var profitIndex = -1 // if no profit index found
        
        while(l <= h){
            var mid = Math.floor((l+h) / 2);
            
            // checking endTime of mid element is LESS_OR_EQUAL than startTime of index(next) element
            if(jobs[mid][1] <= jobs[index][0]){
                profitIndex = mid;
                l = mid+1
            }else{
                h = mid-1
            }
        }
        
        return profitIndex
    }
};
    
// @lc code=end

