/*
 * @lc app=leetcode id=973 lang=javascript
 *
 * [973] K Closest Points to Origin
 */

// @lc code=start
var kClosest = function(points, k) {
    if(points.length <= 0) return [];
    if(k === 0) return [];
    if(k > points.length) return [];
    if(k === points.length) return points;
    
    for(let i = 0; i < points.length; i++){
        let point = points[i];
        points[i].push((point[0]*point[0] + point[1]*point[1]));
    }
    
    points.sort(([x1, y1, z1], [x2, y2, z2]) => z1 - z2); // ascending order of distance
    return points.slice(0, k).map(([x, y, z]) => [x, y]);
};


// var kClosest = function(points, k) {
  
    
//     if(points.length <= 0) return [];
//     if(k === 0) return [];
//     if(k > points.length) return [];
//     if(k === points.length) return points;
//     // if(points.length == 2 && k == 1) return ((points[0][0]**2 + points[0][1]**2) > (points[1][0]**2 + points[1][1]**2)) ? [points[1]]:[points[0]]
    
//     for(let i = 0; i < points.length; i++){
//         let point = points[i];
//         points[i].push((point[0]*point[0] + point[1]*point[1]));
//     }
    
//     let bucket = new Array();
    
//     for(let i = 0; i < points.length; i++){
        
//         (bucket[points[i][2]]) ?
//             bucket[points[i][2]].push([points[i][0], points[i][1]]) 
//                 : bucket[points[i][2]] = [[points[i][0], points[i][1]]];
//     }
    
//     // now iterating over bucket will give us the results
//     let res = [];
//     for(let i = 0; i < bucket.length; i++){
//         if(bucket[i]){
//             res = [...res, ...bucket[i]];
//         }
//         if(res.length - k >= 0){
//             return res;
//         }
//     }
//     return res;
// };
// @lc code=end

