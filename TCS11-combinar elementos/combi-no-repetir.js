'use strict';

let nums = [0, 2, 4, 8];

for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
        if (j > i) {
            let result = nums[i] + "" + nums[j]; 
            alert(result.padStart(2, '0')); 
        }
    }
}
