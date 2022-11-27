// Write your solution here!

const cats = ['Milo', 'Otis', 'Garfield'];

let destructivelyAppendCat = () => cats.push('Ralph');

let destructivelyPrependCat = () => cats.unshift('Bob');

let destructivelyRemoveFirstCat = () => cats.shift('Broom');

let destructivelyRemoveLastCat = () => cats.pop();

function appendCat(){
    const appendCat2 = cats.slice()
    appendCat2.push()
    return appendCat2;
}

function prependCat(){
    const prependCat2 = cats.slice()
    prependCat2.unshift()
    return prependCat2;
}


function removeLastCat(){
    const removeLast = cats.slice()
    removeLast.pop();
    return removeLast;
}


function removeFirstCat(){
    const removeFirst = cats.slice()
    removeFirst.shift();
    return removeFirst;
}