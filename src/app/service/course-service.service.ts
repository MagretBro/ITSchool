import { Injectable } from '@angular/core';
import {Courses, Students, Course, Student} from "../data/model";

@Injectable({
  providedIn: 'root'
})


export class CourseServiceService {
  // реализация класса

  // export const COURSELIST: Courses = {
  private courses: Courses = {
    courses: [
      { id: 0, name: 'Py', dayOfWeek: [1, 3] },
      { id: 1, name: 'C', dayOfWeek: [3, 4] },
      { id: 2, name: 'JS', dayOfWeek: [1, 2, 3, 4] },
      { id: 3, name: 'Java', dayOfWeek: [2, 4] }
    ]
  };



  // export const STUDENTLIST: Students = {
  private students: Students = {
    students: [
      { id: 11, name: 'Rokki', email: 'r@rr.rr', courseIds: [1, 2] },
      { id: 12, name: 'Lo', email: 'll@rr.rr', courseIds: [2, 3] },
      { id: 14, name: 'Kol', email: 'kk@rr.rr', courseIds: [0] }
    ]};

  /////////// WHAT IS IT??

  getCourses(): Course[] {
    return this.courses.courses;
  }

  getStudents(): Student[] {
    return  this.students.students;
  }


  // constructor() { }
}
