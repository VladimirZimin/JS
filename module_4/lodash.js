//console.dir(_); // для вызова-просмотра методов, метод начинается с точки

/*
 * isEmpty()
 */

console.log(_.isEmpty({})); // true
console.log(_.isEmpty({ a: 1 })); // false

/*
 * get()
 *
 * - user && user.location && obj.location.city
 * - user?.location?.city
 */

const user = {
  name: 'mango',
  location: {
    city: 'Lviv',
  },
};

console.log(_.get(user, 'location.city')); // lviv

console.log(user.location.city); // lviv

if (user && user.location && user.location.city) {
  console.log(user.location.city); // lviv
}

console.log(user?.location?.city); // lviv

/*
 * union()
 */

console.log(_.union([1, 2, 3], [3, 4, 5])); // [1, 2, 3, 4, 5]

/*
 * range()
 */

console.log(_.range(10, 51)); // [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50]

/*
 * sortBy()
 */

/*
 * sum() и sumBy()
 */

console.log(_.sum([1, 2, 3, 4, 5])); // 15

const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
  { id: 'player-3', name: 'Aiwi', timePlayed: 230, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
  { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
];

console.log(_.sumBy(players, player => player.timePlayed)); // 1240

/*
 * uniq() и uniqBy()
 * sortedUniq() и sortedUniqBy()
 */

/*
 * random()
 */

/*
 * min() и max()
 * minBy() и maxBy()
 */

console.log(_.minBy(players, player => player.timePlayed));
// {id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true}

/*
 * camelCase(), capitalize(), kebabCase(), lowerCase(), upperCase()
 */

console.log(_.kebabCase(' a b c ')); // a-b-c
