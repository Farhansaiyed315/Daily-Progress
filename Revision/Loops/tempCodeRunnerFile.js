
const studentMarks = {
  math: 85,
  english: 78,
  science: 92,
  history: 74,
  computer: 88
};



let total = 0;

for (const subject in studentMarks){
    total += studentMarks[subject];
}

console.log("Total Marks:", total);
