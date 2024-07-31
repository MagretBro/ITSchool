
// определение класса
export class Courses {
  courses: Course[]=[];
}

export class Course {
  id?: number;
  name: string="";
  dayOfWeek?: DayOfWeek[];
  students?: Student[];
}




export class Students {
  students: Student[]=[];
}
export class Student {
  id?: number;
  name?: string;
  email?: string;
  courseIds?: CourseId[];
  // dayOfWeek?: DayOfWeek[];
}




export enum DayOfWeek {
  Sunday = 0,
  Monday = 1,
  Tuesday = 2,
  Wednesday = 3,
  Thursday = 4,
  Friday = 5,
  Saturday = 6
}

export enum CourseId {
  Py = 0,
  C = 1,
  JS = 2 ,
  Java = 3
}
