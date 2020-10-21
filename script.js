'use strict';

const isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
};

let money;
const start = function() {
    do 
    {
        money = prompt('Ваш месячный доход?');
    }
    while (!isNumber(money));
};
start();


const deposit = confirm('Есть ли у вас депозит в банке? Yes/Ok No/Cancel');


const expenses=[];
let sum = 0;
let getExpensesSum = 0;
const getExpensesMonth = function(){
    for (let i=0; i < 2; i++) {
        expenses[i] = prompt('Введите обязательную статью расходов??');
    do {
            sum = +prompt('Во сколько это обойдется?');
     } while (!isNumber(sum));
     getExpensesSum+=sum;
         }
   console.log(expenses);
    return getExpensesSum;
};
console.log('Расходы за месяц ' + getExpensesMonth());


const addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую?');
const mission = 3000000;
const period = 12;


function getAccumulatedMonth(money, getExpensesSum) {
    const getAccumulatedMonthSum = money - getExpensesSum;
    return getAccumulatedMonthSum;
}
const accumulatedMonth = getAccumulatedMonth(money,getExpensesSum);
console.log(accumulatedMonth);


function getTargetMonth(mission,accumulatedMonth) {
    const getTargetMonthSum = mission / accumulatedMonth;
    return getTargetMonthSum;
}
const ToBeOrNot = getTargetMonth(mission,accumulatedMonth);
console.log(ToBeOrNot);


const budgetDay = accumulatedMonth/30;
 console.log(budgetDay );


 const showTypeOf = function(data){
    console.log(data, typeof(data));
}
showTypeOf(money);
showTypeOf(addExpenses);


const getStatusIncome = function(){
    if (budgetDay>= 1200) {
        console.log('У вас высокий уровень дохода')
    } else if (budgetDay>= 600) {
        console.log('У вас средний уровень дохода')
    } else if (budgetDay>= 0) {
        console.log('К сожалению у вас уровень дохода ниже среднего')
    } else {
        console.log('Что то пошло не так');
    }
};
console.log(getStatusIncome());

      
if (ToBeOrNot>0) {
     console.log('Цель будет достигнута')
         } else {console.log('Цель будет достигнута');
        }