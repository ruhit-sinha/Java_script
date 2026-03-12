const $ = (selector) => document.querySelector(selector);

const users = [
  {
    name: "Fellix",
    email: "fellixsinha@gmail.com",
  },
  {
    name: "Dellixe",
    email: "dellixesinha@gmail.com",
    address: { city: "mimbai" },
  },
];

const updateUsers = users.map((user) => {
  const updateUser = {
    ...user,
    Gandu: "1234",
    address: { ...user.address, city: "delhi" },
  };
  return updateUser;
});

console.log(updateUsers);

let a = {
  x: 10,
  y: 20,
};
let b = { ...a, x: "Nice" };
console.log(b);
//
const users2 = [
  {
    id: 1,
    name: "Ruhit kumar",
    age: 20,
    address: "kumarghat",
  },
  {
    id: 2,
    name: "Felix kumar",
    age: 55,
    address: "Kailashahar",
  },
];
const result = users2.filter((user) => user.id === 1);
console.log(result);
