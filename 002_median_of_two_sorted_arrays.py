class Solution:
    # @return a float
    def findMedianSortedArrays(self, A, B):
	num = []
	for item in A+B:
		num.append(item)
	num.sort()
	count = len(A) +len(B)
	if count % 2 == 0:
		return (float(num[count/2]) + num[count/2-1]) / 2
	else :
		return float(num[count/2])
		
test = Solution()
print test.findMedianSortedArrays([1,3],[2,4])

