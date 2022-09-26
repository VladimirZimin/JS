'use strict';

const numbers = [1, 5, 2, 4, 3];

// ========================================================================
// const greatThenTwo = numbers.filter(function (num) {
//     return num > 2;
// });

const greatThenTwo = numbers.filter(num => num > 2);
// console.log(greatThenTwo);

// ========================================================================

// const multByTwo = greatThenTwo.map(function (num) {
//     return num * 3;
// });

const multByTwo = greatThenTwo.map(num => num * 3);

// console.log(multByTwo);

// ========================================================================

// const sorted = multByTwo.sort(function (a, b) {
//     return a - b;
// });

const sorted = multByTwo.sort((a, b) => a - b);
// console.log(sorted);

// ========================================================================

// const res = numbers
//     .filter(function (num) {
//         return num > 2;
//     })
//     .map(function (num) {
//         return num * 3;
//     })
//     .sort(function (a, b) {
//         return a - b;
//     })

const res = numbers
  .filter(num => num > 2)
  .map(num => num * 3)
  .sort((a, b) => a - b);

// console.log(res);

// ========================================================================

// Сортируем тех кто в онлайн по рангу

const players1 = [
  { id: 'id-1', tag: 'Mango', isOnline: true, rank: 800 },
  { id: 'id-2', tag: 'Poly', isOnline: false, rank: 600 },
  { id: 'id-3', tag: 'Ajax ', isOnline: true, rank: 100 },
  { id: 'id-4', tag: 'Kiwi', isOnline: true, rank: 400 },
];

// const onlineAndSorted = players
//     .filter(function (player) {
//     return player.isOnline;
//     })
//     .sort(function (prevPlayer, nextPlayer) {
//         return prevPlayer.rank - nextPlayer.rank;
// })

const onlineAndSorted = players1
  .filter(player => player.isOnline)
  .sort((prevPlayer, nextPlayer) => prevPlayer.rank - nextPlayer.rank);

// console.log(onlineAndSorted);

// ========================================================================

const players = [
  { id: 'Player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'Player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'Player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'Player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'Player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];
// Увеличием кол-во поинтов каждого игрока

// const updatePlayers = players.map(function (player) {
//     return {
//         ...player,
//         points: player.points + player.points * 0.1
//     };
// });

// const updatePlayers = players.map(player=> {
//     return {
//         ...player,
//         points: player.points + player.points * 0.1
//     };
// });

const updatePlayers = players.map(player => ({
  ...player,
  points: player.points + player.points * 0.1,
}));
// console.table(updatePlayers);

// ========================================================================

// Увеличиваем кол-во игроков по id

const playerIdToUpdate = 'Player-3';

// const updatedPlayers = players.map(function (player) {
//     if (player.id === playerIdToUpdate) {
//         return {
//             ...player,
//             timePlayed: player.timePlayed = 58,
//         };
//     }
//     return player;
// })

// const updatedPlayers = players.map(player => {
//     return player.id === playerIdToUpdate
//         ? {
//             ...player,
//             timePlayed: player.timePlayed + 50,
//         }
//         : player
// });
const updatedPlayers = players.map(player =>
  player.id === playerIdToUpdate
    ? { ...player, timePlayed: player.timePlayed + 50 }
    : player,
);

// console.table(updatedPlayers);
