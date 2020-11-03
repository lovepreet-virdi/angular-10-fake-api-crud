import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'customHello'
})
export class TitleFilterPipe implements PipeTransform {
    transform(title: string): string {
        if (!title) {
            return ''
        }
        return 'Hello' + ' ' + title;
    }
}