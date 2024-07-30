
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


// реализация класса
export const COURSELIST: Courses = {
  courses: [
    {
      id: 0,
      name: 'Py',
      dayOfWeek: [1,3]
    },
    {
      id: 1,
      name: 'C',
      dayOfWeek: [3,4]
    },
    {
      id: 2,
      name: 'JS',
      dayOfWeek: [1,2,3,4]
    },
    {
      id: 3,
      name: 'Java',
      dayOfWeek: [2,4]
    }
  ]
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


export const STUDENTLIST: Students = {
  students: [
  {
    id: 11,
    name: 'Rokki',
    email: 'r@rr.rr',
    courseIds: [1,2],
    // dayOfWeek: [3,4]
  },
  {
    id: 12,
    name: 'Lo',
    email: 'll@rr.rr',
    courseIds: [2,3],
    // dayOfWeek: [1,2,3,4]
  },
  {
    id: 14,
    name: 'Kol',
    email: 'kk@rr.rr',
    courseIds: [0],
    // dayOfWeek: [1,3]
  },
]};



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
