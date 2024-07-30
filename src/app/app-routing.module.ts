import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import * as path from "node:path";
import {StudentComponent} from "./components/student/student.component";
import {CourseComponent} from "./components/course/course.component";
import {MainComponent} from "./components/main/main.component";
import {ListCoursesComponent} from "./components/list-courses/list-courses.component";

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'course', component: ListCoursesComponent},
  { path: 'student', component: StudentComponent },
  { path: 'course-card', component: CourseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
