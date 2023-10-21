//DOM
//навигация по документу

/*
самые верхние объекты дерева
доступны как свойства объекта document
*/

// const htmlElement = document.documentElement;
// const headElement = document.head;
// const bodyElement = document.body;
// console.log(htmlElement)
// console.log(headElement)
// console.log(bodyElement)
const bodyElement = document.body;
const firstChildNode = bodyElement.firstChild
const lastChildNode = bodyElement.lastChild

console.log(firstChildNode);
console.log(lastChildNode);