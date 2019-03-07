import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'dc-editor-toolbar',
  template: `
    <mat-toolbar color="secondary">
      <mat-toolbar-row>
        <button mat-button (click)="action.emit('refresh')">Refresh</button>
      </mat-toolbar-row>
    </mat-toolbar>`,
  styles: [`
    .spacer {
      flex: 1 1 auto;
    }`]
})
export class ToolbarComponent implements OnInit {

  constructor() { }

  @Output()
  action = new EventEmitter<string>();

  ngOnInit() {
  }
}
