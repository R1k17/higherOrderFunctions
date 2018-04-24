let data = [
  {
    "_id": "5ad78a9f6e3fd840138e975d",
    "age": 30,
    "name": "Patti Vang",
    "gender": "female",
    "company": "VIOCULAR",
    "email": "pattivang@viocular.com"
  },
  {
    "_id": "5ad78a9fbc0e3e8d4c05334b",
    "age": 32,
    "name": "Ava Mckee",
    "gender": "female",
    "company": "ZERBINA",
    "email": "avamckee@zerbina.com"
  },
  {
    "_id": "5ad78a9ffb59eca01412c170",
    "age": 35,
    "name": "Cherie Humphrey",
    "gender": "female",
    "company": "ZANILLA",
    "email": "cheriehumphrey@zanilla.com"
  },
  {
    "_id": "5ad78a9f449c5d69180d5298",
    "age": 35,
    "name": "Stafford Hoover",
    "gender": "male",
    "company": "PARAGONIA",
    "email": "staffordhoover@paragonia.com"
  },
  {
    "_id": "5ad78a9f9af707d2d0a8ff66",
    "age": 34,
    "name": "Marla Boyle",
    "gender": "female",
    "company": "ISOSPHERE",
    "email": "marlaboyle@isosphere.com"
  },
  {
    "_id": "5ad78a9f87409c4ae1429fc3",
    "age": 33,
    "name": "Curtis Bernard",
    "gender": "male",
    "company": "PROXSOFT",
    "email": "curtisbernard@proxsoft.com"
  },
  {
    "_id": "5ad78a9fe398d94f08211411",
    "age": 35,
    "name": "Janna Witt",
    "gender": "female",
    "company": "STRALUM",
    "email": "jannawitt@stralum.com"
  },
  {
    "_id": "5ad78a9fed4b7c2e76784ab2",
    "age": 35,
    "name": "Alford Huffman",
    "gender": "male",
    "company": "COLAIRE",
    "email": "alfordhuffman@colaire.com"
  },
  {
    "_id": "5ad78a9f7634e4f0abac6661",
    "age": 37,
    "name": "Joyner Haynes",
    "gender": "male",
    "company": "ZYTRAX",
    "email": "joynerhaynes@zytrax.com"
  },
  {
    "_id": "5ad78a9f4fa5263115cebde2",
    "age": 38,
    "name": "Tonya Beasley",
    "gender": "female",
    "company": "JUNIPOOR",
    "email": "tonyabeasley@junipoor.com"
  },
  {
    "_id": "5ad78a9f9b5f632dc8d95305",
    "age": 27,
    "name": "Kimberly Huber",
    "gender": "female",
    "company": "TURNABOUT",
    "email": "kimberlyhuber@turnabout.com"
  },
  {
    "_id": "5ad78a9f9ab3d1e51eb135d5",
    "age": 40,
    "name": "Charlene Walters",
    "gender": "female",
    "company": "DIGIFAD",
    "email": "charlenewalters@digifad.com"
  },
  {
    "_id": "5ad78a9fc92135ee7c4d9c42",
    "age": 25,
    "name": "Best Guerrero",
    "gender": "male",
    "company": "ENTOGROK",
    "email": "bestguerrero@entogrok.com"
  },
  {
    "_id": "5ad78a9fee033a093e0cc7b9",
    "age": 24,
    "name": "Franco Daugherty",
    "gender": "male",
    "company": "PLUTORQUE",
    "email": "francodaugherty@plutorque.com"
  },
  {
    "_id": "5ad78a9f5d751448d90ce6a7",
    "age": 30,
    "name": "Savannah Moss",
    "gender": "female",
    "company": "UNISURE",
    "email": "savannahmoss@unisure.com"
  },
  {
    "_id": "5ad78a9f2dbae2a7d43e745b",
    "age": 40,
    "name": "Cathleen Ellison",
    "gender": "female",
    "company": "VERAQ",
    "email": "cathleenellison@veraq.com"
  },
  {
    "_id": "5ad78a9fbfc0354052b04498",
    "age": 28,
    "name": "Jeri Durham",
    "gender": "female",
    "company": "HARMONEY",
    "email": "jeridurham@harmoney.com"
  },
  {
    "_id": "5ad78a9fa19084c7f4e16591",
    "age": 24,
    "name": "Stone Barrera",
    "gender": "male",
    "company": "SOPRANO",
    "email": "stonebarrera@soprano.com"
  },
  {
    "_id": "5ad78a9f57678b5fc7c9b8a0",
    "age": 34,
    "name": "Lee Foreman",
    "gender": "male",
    "company": "OBONES",
    "email": "leeforeman@obones.com"
  },
  {
    "_id": "5ad78a9f50914e33d317fa93",
    "age": 24,
    "name": "Carroll Casey",
    "gender": "male",
    "company": "ZINCA",
    "email": "carrollcasey@zinca.com"
  },
  {
    "_id": "5ad78a9fb99a1bff180a1522",
    "age": 39,
    "name": "Natasha Huff",
    "gender": "female",
    "company": "MOMENTIA",
    "email": "natashahuff@momentia.com"
  },
  {
    "_id": "5ad78a9f1760c987f9ead95c",
    "age": 27,
    "name": "Erin Boone",
    "gender": "female",
    "company": "NORALEX",
    "email": "erinboone@noralex.com"
  },
  {
    "_id": "5ad78a9f7446161ae0d91cfd",
    "age": 40,
    "name": "Browning Valencia",
    "gender": "male",
    "company": "MOREGANIC",
    "email": "browningvalencia@moreganic.com"
  },
  {
    "_id": "5ad78a9fe6b7e979f8093507",
    "age": 40,
    "name": "Freda Diaz",
    "gender": "female",
    "company": "OTHERWAY",
    "email": "fredadiaz@otherway.com"
  }
]



function makeArr(data){
  return data.map(function(obj){
    return obj.name
  })
}

//console.log(makeArr(data));


//Array of objects^
//name age

function createObj(data){
  return data.map(function(obj){
    let object = {};
    object.name = obj["name"];
    object.age = obj["age"];
    return object;
  })
}

//console.log(createObj(data));

function totalAge(data){
  return data.reduce(function(acc, obj){
    return acc + obj.age;
  },0)
}

//console.log(totalAge(data));


function collector(data){
  return data.reduce(function(acc,obj){
    let name = obj.name;
    let age = obj.age;
    if("names" in acc){
     acc["names"].push(name);
     acc["ages"].push(age);
     // same but longer
      const nameArr = acc["names"];
      nameArr.push(name);      
      acc["names"] = nameArr;
      const ageArr = acc["ages"];
      ageArr.push(age);      
      acc["ages"] = ageArr;
      // ==================
    }else {
      acc["names"] = [name];
      acc["ages"] = [age];
    }
    return acc;
  },{})
}

// console.log(collector(data));

// Questions
// 1 build function input is data and output array of objects with an id which contains the string 'e3'

function selectedObjects(data){
  let objects = [];
  data.filter(function(obj){
    if(obj._id.includes('e3') === true){
      objects.push(obj);
    }
  })
  return objects;
}

console.log(selectedObjects(data));

// 2 build a function input is data and output is an array with objects with an id which contains any one of the following strings from this array ['e3', '78','35']
// output >> [{},{}]

function specialId(data){
  let objects = [];
  data.filter(function(obj){
    // if(obj._id === item){
    objects.push(obj._id);
  })
  return objects;
}
console.log(specialId(data));

// 3 build a function input is data output average age of all people
function averageAge(data){
  return data.reduce(function(acc, obj){
    return acc + obj.age;
  },0)/data.length;
}

console.log(averageAge(data));

// 4 build function input is data output is average age of all females
// https://medium.freecodecamp.org/reduce-f47a7da511a9
function averageFemaleAge(data){
  let count = 0;
  data.filter(function(obj){
    if(obj.gender === 'female'){
      count += 1;
    }})

  return data.reduce(function(acc, obj){
    if(obj.gender === 'female'){
      acc += obj.age;
    }
    return acc;
  },0)/count;
  
}
console.log(averageFemaleAge(data));


// higher order functions to use
// .filter() .reduce() .map()
  // >   .filter() >> erstellt neues array mit Elementen, die den Test bestanden haben
  // >   .map()    >>
  // >   .reduce() >>


// What is that?
// https://www.json-generator.com/







