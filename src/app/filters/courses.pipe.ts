import { Pipe, PipeTransform } from '@angular/core';

// To handle different filter
@Pipe({ name: 'coursesFilter' })
export class CoursesFilter implements PipeTransform {
    transform(courses, keyword: string, category: string) {

        if (!keyword && (!category || category.trim().toLowerCase() === 'all')) {
            return courses
        }
        if (keyword && !category || (keyword && category.trim().toLowerCase() === 'all')) {
            return courses.filter(item => {
                return item.title.trim().toLowerCase().includes(keyword.trim().toLowerCase()) ||
                    item.instructor.trim().toLowerCase().includes(keyword.trim().toLowerCase())
            });
        }

        if (!keyword && category) {
            return courses.filter(item => {
                return item.category.trim().toLowerCase().includes(category.trim().toLowerCase())
            })

        }

        if (keyword && category) {
            return courses.filter(item => {
                return item.title.trim().toLowerCase().includes(keyword.trim().toLowerCase()) ||
                    item.instructor.trim().toLowerCase().includes(keyword.trim().toLowerCase())
            }).filter(item => { return item.category.trim().toLowerCase().includes(category.trim().toLowerCase()) })
        }
    }
}