// import {CourseId, COURSELIST, STUDENTLIST, Students} from "../../data/model";


import { Component, OnInit } from '@angular/core';
import { Student } from "../../data/model";
import {CourseServiceService} from "../../service/course-service.service";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements  OnInit {
  // protected readonly Students = Students;
  studentList: Student[] = []
  daysOfWeek: string[] = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
  courseIds: string[] = ['Py', 'C', 'JS', 'Java'];

  ////////// ???????
  constructor(private courseService: CourseServiceService) {
  }

  ngOnInit() {
    this.studentList = this.courseService.getStudents()
  }

}
