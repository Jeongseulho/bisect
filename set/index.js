const myArr = [1, 2, 3, 3];

// Set { 1, 2, 3 }
const mySet = new Set(myArr);

// Set { 1, 2, 3, 4 }
mySet.add(4); // Set { 1, 2, 3, 4 }

// Set { 2, 3, 4 }
mySet.delete(1); // true

mySet.has(2); // true

mySet.size; // 3

// Set {}
mySet.clear();
