// Ви маєте набір функцій, які повертають проміси з випадковими затримками. Ваше завдання — виконати всі проміси одночасно за допомогою Promise.all і обробити результати.



// Створіть функцію delayedPromise, яка приймає значення і затримку (у мілісекундах) і повертає проміс, який вирішується з заданим значенням після затримки.
// Створіть масив з 5 промісів, використовуючи функцію delayedPromise, із різними значеннями та затримками.
// Використайте Promise.all, щоб одночасно виконати всі проміси з масиву.
// Обробіть результати вирішення промісів та виведіть їх у консоль.


function delayedPromise(value, ms){
    return new Promise((resolve, reject)=>{
        const ms = Math.floor(Math.random() * (5000 - 1000) + 1000)
        setTimeout(()=>{
            resolve(`проміс ${value} виконався за ${ms} мілесекунд`)
        },ms)
    })
}

const arrayPromise = [
    delayedPromise("promise1"),
     delayedPromise("promise2"),
      delayedPromise("promise3"),
      delayedPromise("promise4"),
      delayedPromise("promise5"),
    ]

    Promise.all(arrayPromise).then()