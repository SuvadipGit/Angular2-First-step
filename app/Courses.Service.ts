import { Injectable } from '@angular/core';

@Injectable()
export class CourseService {
	
	fetchCourses(): string[]{
		return ['course1','course2','course3'];
	}
}