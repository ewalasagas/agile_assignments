import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})

export class LikeComponent {

  @Input('isActive') isActive: boolean = true;
  @Input('likesCount') likesCount: number = 0;
  // @Output('change') click = new EventEmitter();

  onClicked() {
    this.likesCount += (this.isActive) ? -1 : 1;
    this.isActive = !this.isActive;
    // this.click.emit({newValue: this.isActive});
  }
}

export interface LikeChangedEventArgs { 
  newValue: boolean;
}
