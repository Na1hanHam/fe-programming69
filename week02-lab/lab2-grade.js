function getGrade(score=0){
    if (score>=80) return "A";
     if (score>=70) return "B";
      if (score>=60) return "C";
       if (score>=50) return "D";
       return "F";

}

console.log(getGrade(85));
console.log(getGrade(72));
console.log(getGrade(44));
console.log(getGrade());