-- a)
SELECT FirstName, LastName from Students
join Exams on Exams.StudentId = Students.StudentId
group by Exams.StudentId
having count(Exams.ExamName) > 2 and Exams.Result < 3

-- b)

SELECT group from Students
join Exams on Exams.StudentId = Students.StudentId
group by Exams.StudentId
having count(Exams.ExamName) > 2 and Exams.Result < 3 and count(Students.group) > 10
