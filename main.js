
const money = +prompt( 'Ваш бюджет на месяц?' );
const time = prompt( 'Введите дату в формате YYYY-MM-DD' );

const expenses1 = prompt('Введите обязательную статью расходов в этом месяце');
const price1 = +prompt('Во сколько обойдется?');
const expenses2 = prompt('Введите обязательную статью расходов в этом месяце');
const price2 = +prompt('Во сколько обойдется?');

const appData = {
budget: money,
timeData: time,
expenses: {
    expenses1: price1,
    expenses2:price2
},
optionalExpenses: {},
income: [],
savings: false
}

alert(`Бюджет на день составвляет ${( appData.budget - appData.expenses.expenses1 - appData.expenses.expenses2 ) / 30}`);

console.log(appData)