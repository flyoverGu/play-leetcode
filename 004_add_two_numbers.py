class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

class Solution:
    # @return a ListNode
    def addTwoNumbers(self, l1, l2):
    	carry = 0
	head = ListNode(carry)
	ll = head
	while carry or l1 or l2:
		node = ListNode(carry)	
		if l1:
			node.val += l1.val
			l1 = l1.next
		if l2:
			node.val += l2.val
			l2 = l2.next
		carry = node.val / 10
		node.val %= 10
		ll.next, ll = node, node
	return head.next


node1 = ListNode(1)
node2 = ListNode(2)
node3 = ListNode(3)
node1.next = node2
node2.next = node3

node4 = ListNode(4)
node5 = ListNode(5)
node6 = ListNode(6)
node4.next = node5
node5.next = node6
	    
test = Solution()
node = test.addTwoNumbers(node1, node4)
while node != None:
	print node.val
	node = node.next
