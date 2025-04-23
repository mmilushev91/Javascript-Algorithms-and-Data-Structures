/*The teacher is really happy with the program you have created so far. But now they want to have an easy way to check if a student
has a passing grade. A passing grade is anything that is not an "F".

Complete the function hasPassingGrade that takes a student score as a parameter. Your function should return true if the student has 
a passing grade and false if they do not.*/

function hasPassingGrade(score) {
  const studentGrade = getGrade(score);

  if (studentGrade === "F") return false;
  return true;
}

console.log(hasPassingGrade(100));
console.log(hasPassingGrade(53));
console.log(hasPassingGrade(87));
