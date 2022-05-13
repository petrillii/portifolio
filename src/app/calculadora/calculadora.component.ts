import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss']
})
export class CalculadoraComponent implements OnInit {
  idade = 25;
  peso = 60;
  altura = 170;
  sexo = '';
  result: string = '';
  msg: string = '';

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  masculino(){
    this.sexo = 'M';
  }

  femenino(){
    this.sexo = 'F';
  }

  calcularIMC(){
    const IMC = this.peso / Math.pow(this.altura/100,2);
    if (IMC <= 18) {
      this.result = 'Abaixo do peso';
      this.msg = 'Você se encontra abaixo do peso normal';
    } else if (IMC >= 18.01 && IMC <= 24.99) {
      this.result = 'Peso normal';
      this.msg = 'Seu peso está saudável';
    } else if (IMC >= 25 && IMC <= 29.99) {
      this.result = 'Sobrepeso';
      this.msg = 'Acima do normal';
    } else if (IMC >= 30 && IMC <= 34.99) {
      this.result = 'Obesidade';
      this.msg = 'Está em estado de obesidade';
    } else if (IMC >= 35) {
      this.result = 'Muito Obeso (Obesidade mórbida)';
      this.msg = 'Seu peso está muito acima do normal';
    }
    this.result = IMC.toFixed(2);
  }

}
