process.stdout.write('hello from spinner1.js... \rheyyy\n');
//set a global timer
let time = 0;
//loop through an object containing all of our states
const spinnerState = ([
  '\r|  ',
  '\r/  ',
  '\r-  ',
  '\r\\   ',
  '\r|  ',
  '\r/  ',
  '\r-  ',
  '\r\\  ',
  '\r|   '
]);

//  console.log(spinnerState)

for (const state in spinnerState) {
  setTimeout(() => {
    process.stdout.write(spinnerState[state]);
    //increment our timer so it doesn't all appear at once
  }, time += 100);
}
// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   ');
// }, 700);

// // ... fill in the rest yourself ...

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\|   ');
// }, 900);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\/   ');
// }, 1100);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r-   ');
// }, 1300);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   ');
// }, 1500);