import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-exchange-form',
  templateUrl: './exchange-form.component.html',
  styleUrls: ['./exchange-form.component.scss'],
})
export class ExchangeFormComponent implements OnInit {
  @Input() exchangeForm: FormGroup;
  @Input() cryptoList: string[];
  @Input() currenciesList: string[];
  @Output() searchEvent = new EventEmitter();
  @Input() person: any;

  constructor() { }

  ngOnInit(): void {
  }

  submitHandler(): void {
    this.searchEvent.emit(this.exchangeForm.value);
  }

}
