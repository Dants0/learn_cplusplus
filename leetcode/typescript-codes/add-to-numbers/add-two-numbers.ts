let arr1 = [2, 4, 3]
let arr2 = [5, 6, 4]

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let carry = 0
  let head: ListNode | null = null
  let current: ListNode | null = null
  while (l1 || l2 || carry) {
    const val1 = l1 ? l1.val : 0
    const val2 = l2 ? l2.val : 0
    const sum = val1 + val2 + carry
    carry = Math.floor(sum / 10)
    const newNode = new ListNode(sum % 10)
    if (!head) {
      head = newNode
      current = newNode
    } else {
      current.next = newNode
      current = current.next
    }
    if (l1) l1 = l1.next
    if (l2) l2 = l2.next
  }
  return head
}