
let point = { x : 10, y : 20};

// console.log(__proto__);

let p3D = { z : 30, __proto__ : point };

console.log(p3D, p3D.x, p3D.y, p3D.z, p3D.__proto__);





