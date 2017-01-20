import {Component} from '@angular/core'
import {CourseService} from './Courses.Service'


@Component({
	selector: 'courses',
	template:`<h2>Courses</h2>
				<p>Below are the exaples of interpolation along with ngfor</p>
				{{title}}
				<ul>
					<li *ngFor='let course of courses'>{{course}}</li>
				</ul>
				<p>Focus into below text box and focus out to see custom directive
				working</p>
				<input type='text' customdirective/>	
				
				`,
	providers: [CourseService]	
})


export class CoursesComponent
{
	title='our course title - angular2';
	courses: string[];
	constructor(private courseService:CourseService){
		this.courses = this.courseService.fetchCourses();
	}
}