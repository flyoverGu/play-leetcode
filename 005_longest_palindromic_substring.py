class Solution:
	# @return a string
	def longestPalindrome(self, s):
		longest = 1
		start = 0
		for index in xrange(len(s)):
			if index - longest - 1 >= 0 and s[index-longest-1:index+1] == s[index-longest-1:index+1][::-1]:
				start = index - longest - 1
				longest += 2
			if index - longest >= 0 and s[index-longest:index+1] == s[index-longest:index+1][::-1]:
				start = index - longest
				longest += 1				
			
		return s[start:start + longest]

test = Solution()
print test.longestPalindrome('aba')
