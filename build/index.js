"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection_1 = require("./NumbersCollection");
var CharactersCollection_1 = require("./CharactersCollection");
var LinkedList_1 = require("./LinkedList");
var numbersCollection = new NumbersCollection_1.NumbersCollection([4, -300, 11, 29]);
//Number Collection
numbersCollection.sort();
console.log(numbersCollection.data);
// CharactersCollection
var charactersCollection = new CharactersCollection_1.CharactersCollection('ZXasdasS');
charactersCollection.sort();
console.log(charactersCollection.data);
//LinkedList
var linkedList = new LinkedList_1.LinkedList();
linkedList.add(100);
linkedList.add(-11);
linkedList.add(-3);
linkedList.add(180);
linkedList.add(250);
linkedList.sort();
console.log(linkedList.print());
