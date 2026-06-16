const students = [
  { name: 'Aarav', marks: 78, passed: true, subject: 'Math' },
  { name: 'Diya', marks: 42, passed: false, subject: 'Science' },
  { name: 'Kabir', marks: 88, passed: true, subject: 'Math' },
  { name: 'Meera', marks: 65, passed: true, subject: 'English' },
  { name: 'Rohan', marks: 38, passed: false, subject: 'Science' },
  { name: 'Isha', marks: 92, passed: true, subject: 'Math' },
  { name: 'Vivaan', marks: 75, passed: true, subject: 'English' },
  { name: 'Anaya', marks: 70, passed: true, subject: 'Science' }
]


const topperformers = students.filter(student => student.passed && student.marks >= 70);
console.log('Top Performers:', topperformers);

const totalMarks = students.reduce((total, student) => total + student.marks, 0);
const averageMarks = totalMarks /  students.length;
console.log('Average Marks:', averageMarks.toFixed(2));

const subjects = [...new Set(students.map(student => student.subject))];

const subjectAverages = subjects.map(subject => {
  const subjectStudents = students.filter(student => student.subject === subject && student.passed && student.marks >= 70);
  const totalSubjectMarks = subjectStudents.reduce((total, student) => total + student.marks, 0);
  const averageSubjectMarks = subjectStudents.length > 0 ? totalSubjectMarks / subjectStudents.length : 0;
  return { subject, averageMarks: averageSubjectMarks.toFixed(2) };
});
console.log('Average Marks by Subject for Top Performers:', subjectAverages);                                       


