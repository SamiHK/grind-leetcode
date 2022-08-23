/*
 * @lc app=leetcode id=621 lang=javascript
 *
 * [621] Task Scheduler
 */

// @lc code=start
/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
/**
 * @param {array[]} tasks
 * @param {number} n
 * @return {number}
 * @runtime O(n)
 * @space O(1)
 */
 var leastInterval = function(tasks, n) { 

    let table = new Array(26).fill(0); // for [A-Z] letters
    
    // one way
    let MostRepeatingTaskNum = 0
    let NumberOfDifferetMostRepeatingTasks = 0;
    let coolDownPeriod = n;
    
    for(let i = 0; i < tasks.length; i++){  
        
        let hash = tasks[i].charCodeAt(0) - 'A'.charCodeAt(0);
        table[hash] = ++table[hash];
        
        if(table[hash] > MostRepeatingTaskNum){
            MostRepeatingTaskNum = table[hash]; // most repeating task value
            NumberOfDifferetMostRepeatingTasks = 1;
        } else if(table[hash] === MostRepeatingTaskNum) NumberOfDifferetMostRepeatingTasks++ // there are more than one max number
    }
    
    //FORMULA = MAX(tasks.length, ( MostRepeatingTaskNum - 1 ) * ( cooldownPeriod + 1 ) + NumberOfDifferetMostRepeatingTasks)
    return Math.max(tasks.length, (MostRepeatingTaskNum - 1) * (coolDownPeriod + 1) + NumberOfDifferetMostRepeatingTasks)
    
}

// var leastInterval = function(tasks, n) {
  
//   let m = new Map();
//   let maxVal = 0;
//   let maxValCount = 0;
  
//   for(let k of tasks){
      
//     let taskValue = m.has(k) ? m.get(k) + 1 : 1;
      
//     m.set(k, taskValue);
// 	// set our maxVal and number of maxVal tasks only if we have a new max
//     if(taskValue > maxVal){
//       maxVal = taskValue;
//       maxValCount = 1;
// 	// otherwise, increment number of maxVal tasks
//     } else if(taskValue === maxVal){
//       maxValCount++;
//     }
//   }
//   // our formula, handle the edge case
//   return Math.max(tasks.length, (maxVal - 1) * (n + 1) + maxValCount);
// };
// Concepts: The result value can be calculated by determining the task(s) that occur(s) most often. First let's consider the case where there is just 1 task that occurs most often, in this case, 'B'

// Case 1: [A, B, B, C] n=2
// The shortest solution would be [B, A, C, B]
// Notice how the solution isn't something like [A, B, C, _, B]. We've spaced out the most occuring task (B) as wide as possible in the array, by having it be at the beginning and end.

// Case 2: [A, B, B, C, C] n = 2
// Consider this, where there are multiple tasks that occur most often (B and C). The solution is essentially the same as Case 1, but with both of our max occuring tasks (B, C) spread out as much as possible, at the beginning and end, with the A in the middle.
// Shortest solution: [B, C, A, B, C]

// Case 3: [A, B, C, C, C] n=2
// If we consider the case where the number of occurrences for the max tasks is 3, we can see that a pattern shows itself.
// Shortest solution: [C, A, _, C, B, _, C]
// C will always have 2 spaces between it, and we try to fill it in with the other tasks. From this, we can see that the solution is a multiple of the max number of occurences - 1.

// What if n = 3?

// Case 4: [A, B, B, C] n = 3
// For the first example [A, B, B, C], we'll do the same as before by spreading out the most occurring task, but in order to satisfy the n=3 spacing, we will have to put 1 space somewhere in between (it doesn't matter where).
// Solution => [B, A, C, _, B]

// We can start to see a pattern here, and thus, we can create a formula to determine the answer!

// in short, the formula is...
// resultCount = (maxOccurrences - 1) * (n + 1) + (numMaxTasks);

// Let's break this down...

// maxOccurences - 1
// As seen in case 3, we know that we need to multiply times maxOccurences. We must subtract 1 because we dont need to have any empty spaces or filling after the last occurence, at the end.

// (n + 1)
// We need to multiply times n+1 because there will always be n spaces in between, which when multiplying, would not be including the actual task if we were to not add 1.

// +maxNumTasks
// This is to consider the case where there is more than 1 task that needs to be appended at the end, such as in Case 2.

// Edge cases
// It's possible that there is more than enough "filler" tasks to complete.
// Consider [A, B, C, C, D, E, F, G] where n = 2;

// Using our formula, our answer would be 4. Clearly this isn't correct because there are more than 4 tasks in the starting array!
// Thus, we can just return the length of the initial array.



// var leastInterval = function(tasks, n) {
     
//     let count = new Array(26).fill(0),
//         max = 0,
//         maxNum = 0;
    
//     for(const c of tasks) {
//         const index = c.charCodeAt(0) - 'A'.charCodeAt(0);
        
//         if(++count[index] > max){
//             max = count[index];
//             maxNum = 1;
//         } else if(count[index] === max) maxNum++;
//     }
    
//     return Math.max(tasks.length, (max - 1) * (n+1) + maxNum);
// };

// @lc code=end

