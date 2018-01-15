import { Component, OnInit } from '@angular/core';
import { isUndefined } from 'util';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {
  title: string;
  currencyList: string[];
  currencyListTH: string[];
  currentSource: string;
  currentTarget: string;
  outputTarget: string;
  result: number;
  calculate: boolean;
  sourceAmount: number;
  outputClass: string;
  constructor(private route: ActivatedRoute) { }
  ngOnInit() {
    this.currencyList = [];
    this.title = 'Currency Change';
    this.currencyList.push('THB');
    this.currencyList.push('USD');
    this.currencyList.push('EUR');
    this.currencyListTH = [];
    this.currencyListTH.push('บาท');
    this.currencyListTH.push('ดอลลาร์');
    this.currencyListTH.push('ยูโร');
    this.currentSource = this.currencyList[0];
    this.currentTarget = this.currencyList[0];
    this.result = null;
    this.calculate = false;
    // this.sourceAmount = 0;
    this.outputClass = 'alert alert-success';
  }

  onCurrentSourceClick(currency: string) {
    this.currentSource = currency;
  }
  onCurrentTargetClick(currency: string) {
    if (currency === 'บาท') {
      this.currentTarget = 'THB';
    } else if (currency === 'ดอลลาร์') {
      this.currentTarget = 'USD';
    } else {
      this.currentTarget = 'EUR';
    }
  }

  onCalculated(amount: number) {
    let result: number;
    this.calculate = true;
    let exchangeRates: number[];
    this.sourceAmount = +amount;
    exchangeRates = [];
    exchangeRates['THB'] = 33;
    exchangeRates['USD'] = 1.01;
    exchangeRates['EUR'] = 1;
    result = this.sourceAmount * exchangeRates[this.currentTarget] / exchangeRates[this.currentSource];
    this.outputTarget = this.currentTarget;
    this.result = result;
  }

}
