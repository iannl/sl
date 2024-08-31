const length = require("./");

if (
  length("\u001B[4mtest\u001B[0m") == 4 &&
  length("😀") == 1 &&
  length("\u001B[4m😀\u001B[0m") == 1 &&
  length("hello") == 5
) {
  console.log("All tests passed!");
} else {
  console.log("One or more tests failed.");
}
