import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-currency',
  templateUrl: './select-currency.component.html',
  styleUrls: ['./select-currency.component.scss']
})
export class SelectCurrencyComponent implements OnInit {
  @Input() label: string;
  @Input() list: string[];
  @Input() formCtrl: string;
  constructor() { }

  ngOnInit(): void {
  }

}
