import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { AddPostComponent } from './add-post/add-post.component';

@Injectable()

export class AddScreenCanDeactivateGuard implements CanDeactivate<AddPostComponent> {
    canDeactivate(component: AddPostComponent):boolean {
        
        if (component.postsForm.dirty) {
            return confirm('Are you sure to leave the changes?')
        }
        return true;
    }
}
