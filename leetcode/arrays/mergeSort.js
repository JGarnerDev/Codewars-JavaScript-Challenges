// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

// Note:

// The number of elements initialized in nums1 and nums2 are m and n respectively.
// You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2.
// Example:

// Input:
// nums1 = [1,2,3,0,0,0], m = 3
// nums2 = [2,5,6],       n = 3

// Output: [1,2,2,3,5,6]

// Constraints:

// -10^9 <= nums1[i], nums2[i] <= 10^9

const merge = (nums1, m, nums2, n) => {
	nums1.splice(m, n, ...nums2);
	nums1.sort((a, b) => a - b);
	console.log(nums1);
};

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3); // [1,2,2,3,5,6]

merge([0, 0, 0, 0, 0, 0, 0, 0], 3, [2, 5, 6], 3); // [0,0,0,2,5,6,0,0]
merge([0], 0, [1], 1); // [1]
// merge([0, 0, 0, 0, 0], 0, [1, 2, 3, 4, 5], 5); // [1,2,3,4,5]
// merge([4, 5, 6, 0, 0, 0], 3, [1, 2, 3], 3); // [1,2,3,4,5,6]
// merge([-1, 0, 0, 3, 3, 3, 0, 0, 0], 6, [1, 2, 2], 3); // [-1,0,0,1,2,2,3,3,3]
