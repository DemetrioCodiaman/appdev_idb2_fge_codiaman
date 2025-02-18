import { Component } from '@angular/core';

@Component({
  selector: 'app-course-info',
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.css']
})
export class CourseInfoComponent {
  courses = [
    { name: 'APPDEV1', link: '/courses/appdev' },
    { name: 'CMARCH1', link: '/courses/cmarch' },
    { name: 'INASEC2', link: '/courses/inasec' },
    { name: 'LRIZAL1', link: '/courses/rizal' },
  ];
}
