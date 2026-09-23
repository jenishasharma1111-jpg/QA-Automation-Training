// Part 3 - Asynchronous Programming
// Q25 - Q32


// Q25. Predict the Output (Event Loop)

console.log('A');

setTimeout(() => {
  console.log('B');
}, 0);

Promise.resolve().then(() => {
  console.log('C');
});

console.log('D');

// Expected output:
// A
// D
// C
// B
//
// Why:
// Synchronous code runs first, then Promise microtasks,
// and finally setTimeout macrotasks.



// Q26. Delay Function (Promise)

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

// Test Q26
delay(1000).then(() => {
  console.log('Hi');
});



// Q27. Rewrite with async/await

async function run() {
  console.log('Start');

  await delay(1000);

  console.log('End');
}

// Test Q27
run();



// Q28. Simulated Fetch

function fetchUser(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: id,
        name: 'User' + id
      });
    }, 500);
  });
}

async function getUser() {
  const user = await fetchUser(1);
  console.log(user);
}

// Test Q28
getUser();



// Q29. Run in Parallel (Promise.all)

async function loadAll() {
  const startTime = Date.now();

  const users = await Promise.all([
    fetchUser(1),
    fetchUser(2),
    fetchUser(3)
  ]);

  const endTime = Date.now();
  const totalTime = endTime - startTime;

  console.log(users);
  console.log('Total time:', totalTime, 'ms');

  return users;
}

// Test Q29
loadAll();



// Q30. Handle a Rejection

function riskyFetch() {
  return new Promise((_, reject) => {
    reject(new Error('Network failed'));
  });
}

async function safe() {
  try {
    const result = await riskyFetch();
    console.log(result);
  } catch (err) {
    console.log('Caught:', err.message);
  }
}

// Test Q30
safe();



// Q31. Timeout Wrapper

function withTimeout(promise, ms) {
  const timeoutPromise = new Promise((_, reject) => {
    setTimeout(() => {
      reject('Timed out');
    }, ms);
  });

  return Promise.race([promise, timeoutPromise]);
}

// Test Q31
withTimeout(delay(3000), 1000)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log('Timeout result:', error);
  });



// Q32. Retry with Recovery

async function retry(fn, times) {
  let lastError;

  for (let attempt = 1; attempt <= times; attempt++) {
    try {
      const result = await fn();
      return result;
    } catch (error) {
      lastError = error;

      console.log('Attempt', attempt, 'failed');

      if (attempt < times) {
        console.log('Retrying...');
      }
    }
  }

  throw lastError;
}


// Test Q32

let attemptCount = 0;

async function flakyFetch() {
  attemptCount++;

  if (attemptCount < 3) {
    throw new Error('Temporary network error');
  }

  return 'Fetch successful';
}

retry(flakyFetch, 3)
  .then((result) => {
    console.log('Retry result:', result);
  })
  .catch((error) => {
    console.log('Retry failed:', error.message);
  });