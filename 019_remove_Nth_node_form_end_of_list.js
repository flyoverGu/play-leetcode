function removeNthFromEnd(head, n) {
    var fast = head;
    var slow = head;
    while (fast) {
        fast = fast.next;
        n-- < 0 ? (slow = slow.next) : {};
    };

    if (n == 0) {
        return slow.next = null;
    } else if (n < 0) {
        slow.next = slow.next.next;
    } else  {
        return null;
    }
    return head;
}


function node(val, next) {
    this.val = val;
    this.next = next;
}

removeNthFromEnd(new node(1, new node(2)), 2);
