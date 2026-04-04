// const makeOrder = (dish) => {

//     const promise = new Promise((onRes, onRej)=>{
//         const random = Math.random() > 0.5//true false

//         setTimeout(()=>{
//         if(random === true){
//             onRes("ось ваше блюдо ${dish}")
//         }else{
//             onRej("ви залишаетесь голодні, продукти скінчилися")
//         }
//     },1000)
//     })

//     return promise
// }

// makeOrder("періжок").then(onMakeOrderSucses).catch(onMakeOrderError)



// function onMakeOrderSucses(result){
//     console.log("виклик функції onMakeOrderSucses",result);
    
// }

// function onMakeOrderError(error){
//     console.log("виклик функції onMakeOrderError",error);
    
// }





// Напиши функцію delay(ms), яка повертає проміс, що переходить в стан "resolved" через ms мілісекунд. Значенням промісу, яке виповнилося має бути та кількість мілісекунд, яку передали під час виклику функції delay.



// const delay = ms => {
//   const promise = new Promise((onSucses)=>{

//      setTimeout(()=>{
//         onSucses(ms)
//      }, ms)
//   })
// return promise
// };
// const logger = time => console.log(`Resolved after ${time}ms`);
// // Виклич функції для перевірки
// delay(2000).then(logger); // Resolved after 2000ms
// delay(1000).then(logger); // Resolved after 1000ms
// delay(1500).then(logger); // Resolved after 1500ms


// Перепиши функцію toggleUserState() так, щоб вона не використовувала callback-функцію callback, а приймала всього два параметри allUsers і userName і повертала проміс.


// const users = [
//   { name: 'Mango', active: true },
//   { name: 'Poly', active: false },
//   { name: 'Ajax', active: true },
//   { name: 'Lux', active: false },
// ];
// const toggleUserState = (allUsers, userName) => {
// return new Promise((onSucses)=>{

//      const updatedUsers = allUsers.map(user =>

//     user.name === userName ? { ...user, active: !user.active } : user,
//   );
//   onSucses(updatedUsers)
// })

  
// };
// const logger = updatedUsers => console.table(updatedUsers);
// /*
//  * Зараз працює так
//  */
// // toggleUserState(users, 'Mango', logger);
// // toggleUserState(users, 'Lux', logger);
// /*
//  * Повинно працювати так
//  */
// toggleUserState(users, 'Mango').then(logger);
// toggleUserState(users, 'Lux').then(logger);



// // Перепиши функцію makeTransaction() так, щоб вона не використовувала callback-функції onSuccess і onError, а приймала всього один параметр transaction і повертала проміс.

// const randomIntegerFromInterval = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };
// const makeTransaction = (transaction) => {
//     const promise = new Promise((onSuccess, onError)=>{
//           const delay = randomIntegerFromInterval(200, 500);
// setTimeout(() => {
//     const canProcess = Math.random() > 0.3;
//     if (canProcess) {
//       onSuccess(transaction.id, delay);
//     } else {
//       onError(transaction.id);
//     }
//   }, delay);
//     })
// return promise

  
// };
// const logSuccess = (id, time) => {
//   console.log(`Transaction ${id} processed in ${time}ms`);
// };
// const logError = id => {
//   console.warn(`Error processing transaction ${id}. Please try again later.`);
// };
// /*
//  * Працює так
//  */
// // makeTransaction({ id: 70, amount: 150 }, logSuccess, logError);
// // makeTransaction({ id: 71, amount: 230 }, logSuccess, logError);
// // makeTransaction({ id: 72, amount: 75 }, logSuccess, logError);
// // makeTransaction({ id: 73, amount: 100 }, logSuccess, logError);
// /*
//  * Повинно працювати так
//  */
// makeTransaction({ id: 70, amount: 150 })
//   .then(logSuccess)
//   .catch(logError);

// makeTransaction({ id: 71, amount: 230 })
//   .then(logSuccess)
//   .catch(logError);

// makeTransaction({ id: 72, amount: 75 })
//   .then(logSuccess)
//   .catch(logError);

// makeTransaction({ id: 73, amount: 100 })
//   .then(logSuccess)
//   .catch(logError);





// const andrij = new Promise((resolve, reject)=>{
//   setTimeout(()=>{
//     resolve("Андрій створив розмітку хедера")
//   },1000)
// })


// const ostap = new Promise((resolve, reject)=>{
//   setTimeout(()=>{
//     resolve("остап стилізував розмітку")
//   },2000)
// })


// const katerina = new Promise((resolve, reject)=>{
//   setTimeout(()=>{
//     resolve("катерина запушила код на гітхаб")
//   },1500)
// })


// Promise.all((andrij, ostap, katerina))


// .then((result)=>{
//   console.log(result);
//   console.log("проєкт виконанно успішно");
  
// })

// .catch((error)=>{
//   console.log(error);
// })




// const andrij = new Promise((resolve, reject)=>{
//   setTimeout(()=>{
//     resolve("Андрій прибіг першим")
//   },1000)
// })


// const ostap = new Promise((resolve, reject)=>{
//   setTimeout(()=>{
//     resolve("остап прибіг першим")
//   },2000)
// })


// const katerina = new Promise((resolve, reject)=>{
//   setTimeout(()=>{
//     reject("катерина прибіг першим")
//   },1500)
// })


// Promise.race((andrij, ostap, katerina))
// .then((winner)=>{
//   console.log("переможець", winner);
  
// })
// .catch((error)=>{
//   console.log(error);
// })