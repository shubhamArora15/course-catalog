import { Pipe, PipeTransform } from '@angular/core';

// To handle different filter
@Pipe({ name: 'coursesFilter' })
export class CoursesFilter implements PipeTransform {
    transform(categories, keyword: string, category: string) {

        if (!keyword && (!category ||  category.trim().toLowerCase() === 'all')) {
            return categories
        }
        let keyWordFilters = categories.filter(item => { return item.title.trim().toLowerCase().includes(keyword.trim().toLowerCase()) });
        let categoryFilters = categories.filter(item => { return item.category.trim().toLowerCase().includes(category.trim().toLowerCase()) })

        if (keyword && !category || (keyword && category.trim().toLowerCase() === 'all')) {
            return keyWordFilters
        }

        if (!keyword && category) {
            return categoryFilters
        }

        if (keyword && category) {
            return keyWordFilters
                .filter(item => { return item.category.trim().toLowerCase().includes(category.trim().toLowerCase()) })
        }
    }
}