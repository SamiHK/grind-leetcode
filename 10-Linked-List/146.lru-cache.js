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


/* Doubly Linked List */
class LRUNode {
    constructor(key, val, next = null) {
        this.key = key;
        this.val = val;
        this.prev = null;
        this.next = next;//mostly head
    }
}

// Runtime O(1), Space O(C) C= capacity
// Implementation the LRUCache class
class LRUCache {
    
    constructor(capacity) {
        this.head = null;
        this.tail = null;
        this.map = {};
        this.length = 0;
        this.capacity = capacity;
    }
    
    // Runtime O(n), Space O(1)
    // Get key if exists and make it most recently used.
    get(key){
        // if key is not in map return -1
        if (!(key in this.map)) {
            return -1;
        }
        // make this key most recent
        this.makeMostRecent(key);
        return this.map[key].val;       
    }
    
    // Set Key, if capacity is reached, remove least recently used key, make other key the MMR key.
    // Runtime O(n), Space O(1)
    put(key, val){
        
        // if key is in map make is MRU and return
        if (key in this.map) {
            this.map[key].val = val;
            this.makeMostRecent(key); // O(1)
            return;
        }
        
        // if capacity was already reached, delete map value based on tail's key and then remove tail by shifting is back
        if (this.length === this.capacity) {
            delete this.map[this.tail.key];
            // if there was only one element
            if (this.head === this.tail) {
                this.head = null;
                this.tail = null;
            } else {
                // deleting tail by shifting to prev and making current as null
                this.tail = this.tail.prev;
                this.tail.next = null;
            }
        } else {
            ++this.length;
        }
        
        // if we have to enter new LRUNode and we have capacity
        // we can enter new node with info of key, val and head(default null)
        const node = new LRUNode(key, val, this.head);
        
        // if head is there make node previous
        if (this.head) {
            this.head.prev = node;
        } else {
            // if no node is there this node can become tail
            this.tail = node;
        }
        
        // now shifting head backwards
        this.head = node // this.head = this.head.prev
        
        // putting entry in map
        this.map[key] = node;
        
    }
    
    // Runtime O(n), Space O(1)
    makeMostRecent(key){
        
        const node = this.map[key];
        
        // if node is head then their is only one element and its most recent
        if (node === this.head) {
            return node.val;
        }

        if (node.prev) {
            // if node have a previous then remove node and attach previous to next;
            node.prev.next = node.next;
        }
        if (node.next) {
            // if node have a next node then remove node and attach it to its previous node
            node.next.prev = node.prev;
        }
        if (node === this.tail) {
            // if node is tail, in this case make previous of node as tail
            this.tail = node.prev;
        }
        // now insert node at start
        node.prev = null;
        node.next = this.head;
        this.head.prev = node;
        this.head = node;        
    }
}
// @lc code=end

