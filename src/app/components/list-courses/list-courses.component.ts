import { Component } from '@angular/core';
import {Courses, COURSELIST, DayOfWeek} from "../../data/model";
import {CoursedialogComponent} from "../coursedialog/coursedialog.component";
import {CourseComponent} from "../course/course.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-list-courses',
  templateUrl: './list-courses.component.html',
  styleUrls: ['./list-courses.component.scss']
})
export class ListCoursesComponent {
  protected readonly Courses = Courses;
  courseList = COURSELIST;

  constructor(public  dialog: MatDialog) {}

  openDialog(course: any): void {
    this.dialog.open(CourseComponent, {
    data: course
  });
}
}
