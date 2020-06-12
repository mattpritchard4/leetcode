  class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
      this.val = val === undefined ? 0 : val;
      this.next = next === undefined ? null : next;
    }
  }

  const reverseList = (head: ListNode | null): ListNode | null => {
    let previous = null;
    let current = head;
    while (current != null) {
      let temp = current.next;
      current.next = previous;
      previous = current;
      current = temp;
    }
    return previous;
  };

  const list = new ListNode(
    1,
    new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, null))))
  );

  reverseList(list);
