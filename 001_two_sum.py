class Solution:
    # @return a tuple, (index1, index2)
    def twoSum(self, num, target):
	hashMap = {}
	result = []
	index = 1
	for item in num:
		if hashMap.has_key(item):
			return (hashMap[item], index)
		else:
			hashMap[target-item] = index 
		index = index + 1
test = Solution()
print test.twoSum({2, 7, 11, 15}, 9)
