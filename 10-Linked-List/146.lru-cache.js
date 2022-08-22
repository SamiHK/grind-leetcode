/*
 * @lc app=leetcode id=146 lang=javascript

Implement the LRUCache class:

LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
int get(int key) Return the value of the key if the key exists, otherwise return -1.
void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.
The functions get and put must each run in O(1) average time complexity.

 

Example 1:

Input
["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
[[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
Output
[null, null, null, 1, null, -1, null, -1, 3, 4]

Explanation
LRUCache lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // cache is {1=1}
lRUCache.put(2, 2); // cache is {1=1, 2=2}
lRUCache.get(1);    // return 1
lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
lRUCache.get(2);    // returns -1 (not found)
lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
lRUCache.get(1);    // return -1 (not found)
lRUCache.get(3);    // return 3
lRUCache.get(4);    // return 4



 * [146] LRU Cache
 */

// @lc code=start
/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
//////////////////////////////////////////////////////////////////////////////
// JavaScript Object Class Implementation
// This solution requires more code and space due to the need to separately
// define a doubly linked list and a hash map, but has better performance due
// to strictly maintaining constant time lookups and additions.
//////////////////////////////////////////////////////////////////////////////

class LRUNode {
    /**
     * @param {number} key
     * @param {number} val
     * @param {LRUNode=} next = `null`
     * @constructor
     */
    constructor(key, val, next = null) {
        this.key = key;
        this.val = val;
        this.prev = null;
        this.next = next;
    }
}

class LRUCache {
    /**
     * @param {number} capacity
     * @constructor
     */
    constructor(capacity) {
        this.head = null;
        this.tail = null;
        this.map = {};
        this.length = 0;
        this.capacity = capacity;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if (!(key in this.map)) {
            return -1;
        }
        this.makeMostRecent(key);
        return this.map[key].val;
    }

    /**
     * @param {number} key
     * @param {number} val
     * @return {void}
     */
    put(key, val) {
        if (key in this.map) {
            this.map[key].val = val;
            this.makeMostRecent(key);
            return;
        }

        if (this.length === this.capacity) {
            delete this.map[this.tail.key];
            if (this.head === this.tail) {
                this.head = null;
                this.tail = null;
            } else {
                this.tail = this.tail.prev;
                this.tail.next = null;
            }
        } else {
            ++this.length;
        }

        const node = new LRUNode(key, val, this.head);

        if (this.head) {
            this.head.prev = node;
        } else {
            this.tail = node;
        }
        this.head = node;

        this.map[key] = node;
    }

    /**
     * @param {number} key
     * @return {void}
     */
    makeMostRecent(key) {
        const node = this.map[key];

        if (node === this.head) {
            return node.val;
        }

        if (node.prev) {
            node.prev.next = node.next;
        }
        if (node.next) {
            node.next.prev = node.prev;
        }
        if (node === this.tail) {
            this.tail = node.prev;
        }

        node.prev = null;
        node.next = this.head;
        this.head.prev = node;
        this.head = node;
    }
}
// @lc code=end

