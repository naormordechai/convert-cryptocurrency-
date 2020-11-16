import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { CurrencyService } from 'src/app/services/currency.service';
import { map } from 'rxjs/operators';
import { ICryptoDisplay } from 'src/app/models/crypto-display.model';

@Component({
  selector: 'app-exchange-container',
  templateUrl: './exchange-container.component.html',
  styleUrls: ['./exchange-container.component.scss']
})
export class ExchangeContainerComponent implements OnInit {
  form: FormGroup;
  cryptoList: Observable<string[]>;
  currenciesList: Observable<string[]>;
  rate: number;
  cryptoDisplay: Partial<ICryptoDisplay>;
  isLoading = false;
  constructor(private fb: FormBuilder, private currencyService: CurrencyService) { }

  ngOnInit(): void {
    this.buildForm();
    this.cryptoList = this.currencyService.getCryptoNames().pipe(
      map(({ crypto }) => {
        return Object.keys(crypto);
      })
    );
    this.currenciesList = this.currencyService.getCurrenciesNames().pipe(
      map((res) => {
        return Object.keys(res);
      })
    );
  }

  private buildForm(): void {
    this.form = this.fb.group({
      cryptocurrency: [null, [Validators.required]],
      currency: [null, [Validators.required]],
    });
  }

  onSearch(formValue: { cryptocurrency: string; currency: string; }): void {
    this.cryptoDisplay = {};
    this.isLoading = true;
    this.currencyService.getRate(formValue.cryptocurrency, formValue.currency)
      .subscribe(res => {
        this.isLoading = false;
        if (res.success) {
          this.rate = res.rates[formValue.cryptocurrency];
          this.cryptoDisplay.currency = formValue.currency;
          this.cryptoDisplay.value = this.rate;
          this.cryptoDisplay.count = 1;
        }
      });
  }

  countChanged(event: any): void {
    const newCount = +event.target.value || 1;
    const newValue = this.rate * newCount;
    this.cryptoDisplay = {
      ...this.cryptoDisplay,
      count: newCount,
      value: newValue
    };
  }
}
