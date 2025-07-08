const text = "for...of loop";

for (const char of text) {
  if (char !== " ") {
    console.log(char);
  }
}