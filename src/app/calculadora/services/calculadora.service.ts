import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  constructor() { }

  calcularImc(peso: number, altura: number): number{
    return ((peso/altura)^2);
  }

  /* somar(num1: number, num2: number): number {
    return (num1 + num2);
  }
  multiplicar(num1: number, num2: number): number{
    return (num1 * num2);
  }
  dividir(num1: number, num2: number): number{
    return (num1/num2);
  }
  subtrair(num1: number, num2: number): number{
    return (num1 - num2);
  } */
}
