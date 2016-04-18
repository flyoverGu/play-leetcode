class Solution:
    # @return an integer
    def lengthOfLongestSubstring(self, s):
	hashMap = {}
	max = 0
	index = 0
	lastPos = -1
	for ch in s:
		if hashMap.has_key(ch) and lastPos < hashMap[ch]:
			lastPos = hashMap[ch]
		max = self.getMax(max, index-lastPos)
		hashMap[ch] = index
		#print ch, index, max, lastPos
		index = index + 1
	return max
    def getMax(self, a, b):
	if a > b: return a
	else : return b
test = Solution()
print test.lengthOfLongestSubstring("abcdefga1234567")
#1 2 3 4 5 6 7 1 5
#0 1 2 3 4 5 6 7 8

