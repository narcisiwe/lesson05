'use strict';

let isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n)
};

let money;
let start = function() {
    do 
    {
        money = prompt('Ваш месячный доход?');
    }
    while (!isNumber(money))
};
start();


const deposit = confirm('Есть ли у вас депозит в банке? Yes/Ok No/Cancel');


let expenses=[];
let sum = 0;
    let Sum =0;
let getExpensesMonth = function(){
    for (let i=0; i < 2; i++) {
        expenses[i] = prompt('Введите обязательную статью расходов??');
    do {
            sum = +prompt('Во сколько это обойдется?');
     } while (!isNumber(sum))
            Sum+=sum;
         }
   console.log(expenses);
    return Sum;
};
console.log('Расходы за месяц ' + getExpensesMonth());


const addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую?');
const mission = 3000000;
const period = 12;


// const getExpenseSsum = function(a, b, c){ 
//     return a + b + c;
// };
// const getExpensesMonth = getExpensessum (addExpenses, expenses1, expenses2);
// console.log(getExpensesMonth);


const getAccumulatedMonth = function(data) {
    return (data);
 };
 const accumulatedMonth  = getAccumulatedMonth (money-Sum);
 console.log(accumulatedMonth);


function getTargetMonth(a, b) {
    const getTargetMonthSum = a / b;
    return getTargetMonthSum;
}
console.log(getTargetMonth(mission,accumulatedMonth));


const budgetDay = function(data) {
    return (data);
 };
 const budgetDaySum  = budgetDay (accumulatedMonth/30);
 console.log(budgetDaySum);

let showTypeOf = function(data){
    console.log(data, typeof(data));
}
showTypeOf(money);
showTypeOf(addExpenses);


const getStatusIncome= function(){
if (budgetDay>=1200) {
    console.log('У вас высокий уровень дохода')
} else if (budgetDay>=600) {
    console.log('У вас средний уровень дохода')
} else if (budgetDay>=0) {
    console.log('К сожалению у вас уровень дохода ниже среднего')
} else 
    {console.log('Что то пошло не так');
}
};


if (Math.sign(getTargetMonth*1)>0) {
     console.log('Цель будет достигнута')
         } else {console.log('Цель будет достигнута');
        }