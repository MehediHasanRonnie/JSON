const data = require("./friends_data.json");

console.log(data.partner[0].name); //dataa access

delete data.partner[1].name; //delete data

data.partner[1].name = "akkas"; //modify data

//looping data access usuing JSON
for (x in data) {
  console.log(x);
}

const data2 = {
  name: "mehedi",
  age: 25,
};
console.log(JSON.stringify(data2));

const data3 = `{
    "name" : "hasan",
    "age" : 24
}`;
console.log(JSON.parse(data3));
