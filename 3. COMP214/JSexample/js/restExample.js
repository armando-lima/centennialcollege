const myStudents = (professor, ...students) =>
  console.log(
    "Professor name: " +
      professor +
      "\nNumber of students: " +
      students.length +
      students.forEach((name) => console.log("Student name: " + name))
  );

myStudents("Krunal", "Jorge", "Ishan", "Laura");
