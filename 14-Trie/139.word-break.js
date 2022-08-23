/*
 * @lc app=leetcode id=139 lang=javascript
 *
 * [139] Word Break
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
 var wordBreak = function(s, wordDict) {
    
    let trie = new Trie();
    
    //Insert words in Trie
    for(const word of wordDict){
        trie.insert(word);
    }
    
    return trie.segmentSearch(s);
};



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
    search(word, index){
        let root = this.root;
        for(; index < word.length; index++){
            if(!(word[index] in root.branches)){
                // console.log(word, index, word[index])
                if(root.end){
                    index--;
                    break;
                } else return [false, index];
            }
            root = root.branches[word[index]];
        }
        return [true, index];
    }

    // R: O(W), S: O(1), here `W` is word
    segmentSearch(word){
        
        let length = word.length;
        let i = 0;
        let netIdx = 0;
        
        while(i < length){
            let pair = this.search(word.slice(netIdx, length+1), 0);
            // console.log(pair)
            if(pair[0] == false) return false;
            else {
                i = pair[1]+1;
                netIdx += i;
            }
            i = netIdx;
        }
        
        return true;
    }
}


// @lc code=end
/**

/// failing

"abcd"
["a","abc","b","cd"]

/// passing
"a"
["b"]
"leetcode"
["leet","code"]
"catsandog"
["cats","dog","sand","and","cat"]
"applepenapple"
["apple","pen"]

**/

