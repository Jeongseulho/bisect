const myObj = [
  ['name', 'John'],
  ['age', 30],
];

// Map { 'name' : 'John', 'age' : 30 }
const myMap = new Map(myObj);

// Map { 'name' : 'John', 'age' : 30, 'job' : 'developer' }
myMap.set('job', 'developer');

myMap.get('name'); // John
myMap.get('nonexistent'); // undefined

myMap.has('name'); // true
myMap.has('nonexistent'); // false

// Map { 'name' : 'John', 'age' : 30 }
myMap.delete('name'); // true

myMap.size; // 2

myMap.keys(); // MapIterator { 'age', 'job' }
myMap.values(); // MapIterator { 30, 'developer' }
myMap.entries(); // MapIterator { [ 'age', 30 ], [ 'job', 'developer' ] }

for (const [key, value] of myMap) {
  console.log(key, value);
}

// Map {}
myMap.clear();
