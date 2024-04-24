const myArr = [1, 2, 3, 3];

// Set { 1, 2, 3 }
const mySet = new Set(myArr);

// Set { 1, 2, 3, 4 }
mySet.add(4); // Set { 1, 2, 3, 4 }

// Set { 2, 3, 4 }
mySet.delete(1); // true

mySet.has(2); // true

mySet.size; // 3

for (const value of mySet) {
  console.log(value); // 2, 3, 4
}

// Set {}
mySet.clear();

const set1 = new Set([1, 2, 3, 4, 5]);
const set2 = new Set([4, 5, 6, 7, 8]);

// 합집합
const union = new Set([...set1, ...set2]);
console.log([...union]); // [1, 2, 3, 4, 5, 6, 7, 8]

// 교집합
const intersection = new Set([...set1].filter((value) => set2.has(value)));
console.log([...intersection]); // [4, 5]

// 차집합
const difference = new Set([...set1].filter((value) => !set2.has(value)));
console.log([...difference]); // [1, 2, 3]
