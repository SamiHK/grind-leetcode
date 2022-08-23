/*
 * @lc app=leetcode id=208 lang=javascript
 *
 * [208] Implement Trie (Prefix Tree)
 */

// @lc code=start

class TrieNode{
    constructor(value){
        this.value = value;
        this.end = false;
        this.branches = {};
    }
}
class Trie{
    
    // R: O(1), S: O(1) 
    constructor(){
        this.root = new TrieNode("*");
    }
    
    // R: O(W), S: O(W), here `W` is word
    insert(word){
        let root = this.root;
        for(const c of word){
            // if character does not exit we insert
            if(!(c in root.branches)){
                root.branches[c] = new TrieNode(c);
            }
            // moving to currently entered/next character
            root = root.branches[c];
        }
        // if word ends that means its searchable
        root.end = true;
    }

    // R: O(W), S: O(1), here `W` is word
    search(word){
        let root = this.root;
        for(const c of word){
            if(!(c in root.branches)){
                // if character is not found in TrieNodes series
                return false;
            }
            
            // moving to currently entered/next character
            root = root.branches[c];
        }
        // if search is complete check if same was inserted before
        return root.end;
    }

    // R: O(W), S: O(1), here `W` is word
    startsWith(prefix){
        let root = this.root;
        for(const c of prefix){
            if(!(c in root.branches)){
                // if character is not found in TrieNodes series
                return false;
            }
            
            // moving to currently entered/next character
            root = root.branches[c];
        }
        
        // branches always exist, no need to find the end
        // ends are required for word completion 
        return true;
    }
}
// @lc code=end
/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

// Prefix Tree
// Autocomplete
// Search
// Dictionary

// A trie (pronounced as "try") or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. There are various applications of this data structure, such as autocomplete and spellchecker.

// Implement the Trie class:

// Trie() Initializes the trie object.
// void insert(String word) Inserts the string word into the trie.
// boolean search(String word) Returns true if the string word is in the trie (i.e., was inserted before), and false otherwise.
// boolean startsWith(String prefix) Returns true if there is a previously inserted string word that has the prefix prefix, and false otherwise.
 

// Example 1:

// Input
// ["Trie", "insert", "search", "search", "startsWith", "insert", "search"]
// [[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]
// Output
// [null, null, true, false, true, null, true]

// Explanation
// Trie trie = new Trie();
// trie.insert("apple");
// trie.search("apple");   // return True
// trie.search("app");     // return False
// trie.startsWith("app"); // return True
// trie.insert("app");
// trie.search("app");     // return True

//  * Your Trie object will be instantiated and called as such:
// var obj = new Trie();
// let word = "sami";
// let prefix = "sam";
// obj.insert(word);
// console.log(obj);
// var param_2 = obj.search(word);
// console.log(param_2);
// var param_3 = obj.startsWith(prefix);
// console.log(param_3);
// param_3 = obj.startsWith("i");
// console.log(param_3);
// param_3 = obj.startsWith("sa");
// console.log(param_3);


