const ages = [11, 13, 12, 14, 17];
const ages2 = [15, 16, 10];
const ages3 = [25, 26, 20];
const allAges = ages.concat(ages2).concat(ages3);
const allAges2 = [...ages, ...ages2, 5, ...ages3];
// console.log(allAges2);

const business = 400;
const minister = 300;
const Sochib = 240
const takaPoisa = [ 650, 888, 3020, 450, 230]
// const maximum = Math.max(business, minister, Sochib);
const maximum = Math.max(...takaPoisa);
console.log(maximum);