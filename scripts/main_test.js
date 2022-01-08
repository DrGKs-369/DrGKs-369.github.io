//單行註解
/*
多行註解
*/

var myHeading = document.querySelector('h1'); //將h1存入變數myHeading；querySelector('元素')，選擇元素
myHeading.textContent = 'Hello world!';

function multiply(num1,num2) { //自訂函式
    let result = num1 * num2;
    return result;
}

alert( multiply(1,2) ); //彈出對話框(純輸出)
alert('123123');

document.querySelector('html').onclick = function() { //事件（Events）監視器，監視滑鼠點擊
    alert('Ouch! Stop poking me!');
}