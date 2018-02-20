/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    let result = 0;
    debugger;
     for(let i = 0; i < preferences.length; i++) {
         let current = preferences[i];
         if (preferences[preferences[current - 1] - 1]-1 === i) result++;
 }
 return parseInt(result/3);
};
