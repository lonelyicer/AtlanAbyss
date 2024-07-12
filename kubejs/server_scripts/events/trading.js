// function trading(event) {
//     let trade = (card_id, ingredient, output) => {
//         event.recipes.thermal.press(output, [
//             ingredient,
//             card_id,
//         ]).energy(1000)
//     }

//     global.trades.forEach(element => {
//         if (global.transactions[element])
//             global.transactions[element].forEach(transaction => {
//                 trade('kubejs:trade_card_' + element, transaction.in, transaction.out)
//             })
//     });

//     global.professions.forEach(element => {
//         if (global.transactions[element])
//             global.transactions[element].forEach(transaction => {
//                 trade('kubejs:profession_card_' + element, transaction.in, transaction.out)
//             })
//     });
// }