import {Component, Inject, OnInit} from '@angular/core';
import { CourseServiceService} from "../../service/course-service.service";
import {Courses, DayOfWeek, Student} from "../../data/model";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  protected readonly Courses = Courses;
  // courseList = COURSELIST;
  daysOfWeek: string[] = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
  studentsForCourse: Student[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private  courseService: CourseServiceService) { }

  ngOnInit() {
    this.studentsForCourse = this.courseService.getStudents().filter((student: Student) =>
    // this.studentsForCourse = STUDENTLIST.students.filter(student =>
    student.courseIds?.includes(this.data.id));
    console.log(this.studentsForCourse);
  }

  protected readonly  DayOfWeeks = DayOfWeek;

  // protected readonly STUDENTLIST = STUDENTLIST;
}
