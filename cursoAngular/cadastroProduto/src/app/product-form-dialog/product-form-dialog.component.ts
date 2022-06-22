import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-form-dialog',
  templateUrl: './product-form-dialog.component.html',
  styleUrls: ['./product-form-dialog.component.css']
})
export class ProductFormDialogComponent implements OnInit {

  formProduto: FormGroup = this.fb.group({
    name: ['',[Validators.required]],
    price: [0,[Validators.required]],
    picture: ['',[Validators.required]]
  })

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  adicionarProduto(): void{
    console.log(this.formProduto.value)
  }
}
