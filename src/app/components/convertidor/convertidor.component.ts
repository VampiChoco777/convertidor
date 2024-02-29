import { Component } from '@angular/core';

@Component({
  selector: 'app-convertidor',
  templateUrl: './convertidor.component.html',
  styleUrl: './convertidor.component.scss'
})
export class ConvertidorComponent {
  cantidad: number =0;
  tengo: string = 'USD';
  quiero: string = 'EUR';
  total: number = 0;
  monedas: string[] = ['USD', 'EUR', 'LIBRA'];

  convertir(): void
  {
    switch(this.tengo)
    {
      case 'USD':
        if(this.quiero === 'USD')
        {
          this.total = this.cantidad;
        }
        if(this.quiero === 'EUR')
        {
          this.total = this.cantidad * 0.85;
        }
        if(this.quiero === 'LIBRA')
        {
          this.total = this.cantidad * 0.73;
        }
        break;
      case 'EUR':
        if(this.quiero === 'USD')
        {
          this.total = this.cantidad * 1.17;
        }
        if(this.quiero === 'EUR')
        {
          this.total = this.cantidad;
        }
        if(this.quiero === 'LIBRA')
        {
          this.total = this.cantidad * 0.86;
        }
        break;
      case 'LIBRA':
        if(this.quiero === 'USD')
        {
          this.total = this.cantidad * 1.37;
        }
        if(this.quiero === 'EUR')
        {
          this.total = this.cantidad * 1.17;
        }
        if(this.quiero === 'LIBRA')
        {
          this.total = this.cantidad;
        }
        break;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }
}


