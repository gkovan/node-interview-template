'use strict';

class Solution {


    constructor(sentence) {
        this.sentence = sentence;
        this.name = "gerry";
    }

    // Adding a method to the constructor
    greet() {
        return `${this.name} says hello.`;
    }
}

module.exports = Solution;
