'use strict'

let money, time;
function start(){
    time = prompt( 'Введите дату в формате YYYY-MM-DD', '');
    while(isNaN(money) || money == "" || money == null ){
        money = +prompt( 'Ваш бюджет на месяц?', '');
    }
}

start();


let appData = {
budget: money,
timeData: time,
expenses: {},
optionalExpenses: {},
income: [],
savings: true
}


function chooseExpences(){
    for(let i = 0; i < 2; i++){
        let a = prompt('Введите обязательную статью расходов в этом месяце', '');
        let b = +prompt('Во сколько обойдется?', '');
    
        if((typeof(a) === 'string') && (typeof(a) != null) && (typeof(b) != null)
            && a != '' && b != '' && a.length < 50){
            console.log('done');
            appData.expenses[a] = b;
        }else{
            i = i - 1;
        }
    };
    
}
chooseExpences();


function detectDayBudget(){
        let prevState = 0;
        for(let item in appData.expenses){
            prevState = prevState + appData.expenses[item];
        }
        appData.moneyPerDay = ((appData.budget - prevState) / 30).toFixed();
    alert(`Бюджет на день составвляет ${appData.moneyPerDay}`);
}

detectDayBudget();



function  detectLevel() {
    if(appData.moneyPerDay < 100){
        console.log('Минимальный уровень достатка');
    }else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
        console.log('Средний уровень достатка');
    }else if(appData.moneyPerDay > 2000){
        console.log('Высокий уроввень достатка');
    }else{
        console.log('Произошла ошибка!');
    }
}
detectLevel();

function checksSavings(){
    if(appData.savings){
        let save = +prompt('Какова сумма накоплений');
        let percent = +prompt('Под какой процент?');

        appData.monthInCome = (save / 100 / 12) * percent;
        alert('Доход в месяц с вашего депозита: ' + appData.monthInCome);
    }
}

checksSavings();


function chooseOptExpenses(){
    for(let i = 1; i <= 3; i++){
        let questionOptExpenses= prompt('Статья необязательных расходов');
        appData.optionalExpenses[i] = questionOptExpenses;
    }
}
chooseOptExpenses()
console.log(appData)