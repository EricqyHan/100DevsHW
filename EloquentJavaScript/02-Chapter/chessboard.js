// Chessboard

let bindSize = 10;

for (i = 0; i <= bindSize; i++) {
  let a = " # # # #";
  let b = "# # # #";
  if (i % 2 !== 0) {
    console.log(b);
  } else {
    console.log(a);
  }
}
