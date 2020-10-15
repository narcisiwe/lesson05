'use strict';


let mission = 3000;
let accumulatedMonth = 123;



function getTargetMonth(a, b) {
    const getTargetMonthSum = a / b;
    return getTargetMonthSum;
}
console.log(+getTargetMonth(mission,accumulatedMonth));




let isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n)
}

let money;
let start = function() {
    do 
    {
        money = prompt('Ваш месячный доход?');
    }
    while (!isNumber(money))
};
start();




let expenses=[];
let getExpensesMonth = function(){
    let sum = 0;
    let Sum1 =0;
    
    for (let i=0; i < 2; i++) {
        expenses[i] = prompt('Введите обязательную статью расходов??');
        
        do {
            sum = +prompt('Во сколько это обойдется?');
            } while (!isNumber(sum))
            Sum1+=sum;
         }

   console.log(expenses);
    return Sum1;
};
console.log('Расходы за месяц ' + getExpensesMonth());








if (Math.sign(getTargetMonth*1)>0) {
     console.log('Цель будет достигнута')
         } else {console.log('Цель будет достигнута');
        }









