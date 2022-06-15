import { AfterContentInit, AfterViewInit, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges, ViewChild, ElementRef, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-mostrar-saldo',
  templateUrl: './mostrar-saldo.component.html',
  styleUrls: ['./mostrar-saldo.component.css']
})
export class MostrarSaldoComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterViewInit, OnDestroy{

  @Input()
  appSaldo: number = 1921;

  saldoAnterior!: number | string;

  @ViewChild("paraSaldoAnterior")
  paraSaldoAnterior!: ElementRef<HTMLParagraphElement>;
  
  constructor() { }  
  
  ngOnChanges(changes: SimpleChanges): void { //1º
    console.log('%cngOnChanges executado!', 'font-size: 20px; color: red;');
    
    if(changes['appSaldo'].previousValue == undefined){
      this.saldoAnterior = "Saldo não informado.";
    }else {
      this.saldoAnterior = changes['appSaldo'].previousValue;
    }
    
  }
  
  ngOnInit(): void { //2º
    console.log('%cngOnInit executado!', 'font-size: 20px; color: red;');
  }
  
  ngDoCheck(): void { //3º
    console.log('%cngDoCheck executado!', 'font-size: 20px; color: red;');
  }

  ngAfterContentInit(): void {//4º
    console.log('%cngAfterContentOnInit executado!', 'font-size: 20px; color: red;');
  }

  ngAfterViewInit(): void {//6º
    console.log('%cngAfterViewInit executado!', 'font-size: 20px; color: red;');
    console.log(this.paraSaldoAnterior)
  }

  ngOnDestroy(): void {//8º
    console.log('%cngOnDestroy executado!', 'font-size: 20px; color: green;')
  }
}
