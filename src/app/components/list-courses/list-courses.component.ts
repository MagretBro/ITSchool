import {Component, OnInit} from '@angular/core';
import {Course, Courses, DayOfWeek} from "../../data/model";
import { CourseServiceService} from "../../service/course-service.service";
import {CoursedialogComponent} from "../coursedialog/coursedialog.component";
import {CourseComponent} from "../course/course.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-list-courses',
  templateUrl: './list-courses.component.html',
  styleUrls: ['./list-courses.component.scss']
})
export class ListCoursesComponent implements OnInit{
  protected readonly Courses = Courses;
  courseList: Course[] = [];

  constructor(public  dialog: MatDialog, private  courseService: CourseServiceService) {}

  ngOnInit() {
    this.courseList = this.courseService.getCourses()
  }

  openDialog(course: any): void {
    this.dialog.open(CourseComponent, {
    data: course
  });
}
}
