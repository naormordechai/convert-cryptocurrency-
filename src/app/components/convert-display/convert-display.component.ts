import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-convert-display',
  templateUrl: './convert-display.component.html',
  styleUrls: ['./convert-display.component.scss']
})
export class ConvertDisplayComponent implements OnInit {
  @Input() target: string;
  @Input() value: number;
  @Input() count: number;

  @Output() countChangedEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
