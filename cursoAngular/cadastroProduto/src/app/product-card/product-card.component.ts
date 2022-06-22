import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input()
  productName: string = '';
  
  @Input()
  productPrice: number = 0;
  
  @Input()
  imgSrc: string = '';
  
  constructor(
    private snackBar: MatSnackBar
  ) { }


  ngOnInit(): void {
  }

  buy(){
    this.snackBar.open(`${this.productName} comprado!`, 'OK', {
      duration: 5000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    })
  }
}
