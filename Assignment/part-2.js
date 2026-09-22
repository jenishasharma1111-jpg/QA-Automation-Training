// ==========================================
// PART 2: MODERN JAVASCRIPT (ES6+)
// Q13 - Q24
// ==========================================


// Q13. Swap with Destructuring

function swap(a, b) {
  [a, b] = [b, a];
  return [a, b];
}

console.log("Q13: Swap with Destructuring");
console.log(swap(1, 2)); // [2, 1]


// Q14. Extract from Object

function describe(user) {
  const { name, email } = user;

  return `${name} can be reached at ${email}`;
}

const user = {
  name: "Sara",
  email: "s@example.com",
  age: 30
};

console.log("\nQ14: Extract from Object");
console.log(describe(user));
// Sara can be reached at s@example.com


// Q15. Merge with Spread

function merge(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

const pahiloObject = {
  a: 1,
  b: 2
};

const dosroObject = {
  b: 9,
  c: 3
};

console.log("\nQ15: Merge with Spread");
console.log(merge(pahiloObject, dosroObject));
// { a: 1, b: 9, c: 3 }


// Q16. Sum All
// Rest Parameters

function sumAll(...numbers) {
  return numbers.reduce((sum, number) => sum + number, 0);
}

console.log("\nQ16: Sum All");
console.log(sumAll(1, 2, 3)); // 6
console.log(sumAll(5, 5, 5, 5)); // 20


// Q17. Safe Nested Access
// Optional Chaining

function getCity(user) {
  return user?.address?.city ?? "Unknown";
}

console.log("\nQ17: Safe Nested Access");

console.log(
  getCity({
    address: {
      city: "Delhi"
    }
  })
);
// Delhi

console.log(getCity({}));
// Unknown


// Q18. Double the Array
// map()

function doubleAll(numbers) {
  return numbers.map((number) => number * 2);
}

console.log("\nQ18: Double the Array");
console.log(doubleAll([1, 2, 3]));
// [2, 4, 6]


// Q19. Filter Adults
// filter()

function getAdults(people) {
  return people.filter((person) => person.age >= 18);
}

const people = [
  {
    name: "A",
    age: 15
  },
  {
    name: "B",
    age: 22
  }
];

console.log("\nQ19: Filter Adults");
console.log(getAdults(people));
// [ { name: 'B', age: 22 } ]


// Q20. Total Price
// reduce()

function totalPrice(items) {
  return items.reduce((sum, item) => sum + item.price, 0);
}

const items = [
  {
    price: 10
  },
  {
    price: 5
  },
  {
    price: 20
  }
];

console.log("\nQ20: Total Price");
console.log(totalPrice(items));
// 35


// Q21. Find a User
// find()

function findById(users, id) {
  return users.find((user) => user.id === id);
}

const users = [
  {
    id: 1
  },
  {
    id: 2
  }
];

console.log("\nQ21: Find a User");
console.log(findById(users, 2));
// { id: 2 }

console.log(findById(users, 5));
// undefined


// Q22. Chained Pipeline
// filter -> map -> reduce

function sumEvenSquares(numbers) {
  return numbers
    .filter((number) => number % 2 === 0)
    .map((number) => number * number)
    .reduce((sum, number) => sum + number, 0);
}

console.log("\nQ22: Chained Pipeline");
console.log(sumEvenSquares([1, 2, 3, 4]));
// 20


// Q23. Safe JSON Parse
// try / catch / finally

function safeParse(text) {
  try {
    return JSON.parse(text);
  } catch (error) {
    return null;
  } finally {
    console.log("done");
  }
}

console.log("\nQ23: Safe JSON Parse");

console.log(safeParse('{"a":1}'));
// done
// { a: 1 }

console.log(safeParse("not json"));
// done
// null


// Q24. Custom Error Class

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

function validateAge(age) {
  if (age < 0) {
    throw new ValidationError("Age must be positive");
  }

  return age;
}

console.log("\nQ24: Custom Error Class");

console.log(validateAge(25));
// 25

try {
  console.log(validateAge(-3));
} catch (error) {
  console.log(error.name);
  console.log(error.message);
}

// ValidationError
// Age must be positive


// ==========================================
// END OF PART 2
// ==========================================