import { Sorter } from './Sorter'
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const numbersCollection = new NumbersCollection([4, -300, 11, 29])

//Number Collection
numbersCollection.sort();
console.log(numbersCollection.data);

// CharactersCollection
const charactersCollection = new CharactersCollection('ZXasdasS');
charactersCollection.sort()
console.log(charactersCollection.data);

//LinkedList
const linkedList = new LinkedList();
linkedList.add(100);
linkedList.add(-11);
linkedList.add(-3);
linkedList.add(180);
linkedList.add(250);
linkedList.sort();
console.log(linkedList.print());