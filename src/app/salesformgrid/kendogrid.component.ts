import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgForm, NgModel, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
//import { products } from "./products";
import { Product } from "./kendogrid";
@Component({
  selector: 'app-kendogrid',
  templateUrl: './kendogrid.component.html',
  styleUrls: ['./kendogrid.component.css']
})
export class KendogridComponent {

  
 private gridView1:any[];
 public modalRef: BsModalRef;
public serializedForm :Object;
 public title;
  halo: Array<any> = [];
 
 myForm:FormGroup
  constructor(private modalService: BsModalService,fb:FormBuilder) 
  {
    this.myForm= fb.group({
        ProductCode:[ ],
        'ProductName' : [''],
        ProductQty : [ ],
        ProductPrice : [ ],
        ProductDiscount : [ ]
    });
    //console.log(products);
  }
 
  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }


  ProductForm = new FormGroup({
     ProductCode:new FormControl(),
     ProductName: new FormControl(),
     ProductQty:new FormControl(),
     ProductPrice: new FormControl(),
     ProductDiscount:new FormControl()
}); 

onFormSubmit(form: NgForm) {
    // console.log('Name:' + this.userForm.get('ProductName').value);
    // console.log('Qty:' + this.userForm.get('ProductQty').value);
    // console.log('Price:' + this.userForm.get('ProductPrice').value);
    // console.log('Discount:' + this.userForm.get('ProductDiscount').value);
   //console.log(this.halo.push(this.));
   console.log(form); ///ye object hona chahiye
    var title=this.ProductForm.get('ProductCode').value;
    var title1= this.ProductForm.get('ProductName').value;
    var title2= this.ProductForm.get('ProductQty').value;
    var title3= this.ProductForm.get('ProductPrice').value;
    var title4= this.ProductForm.get('ProductDiscount').value;
    var title5=title2*title3;
    console.log(title1);
    console.log(title2);
    console.log(title3);
    console.log(title4);
    console.log('Value of Form:'+(this.ProductForm).value);
    console.log(this.halo.push({title,title1,title2,title3,title4,title5}));
    let halo1:Array<any>=[];
  this.halo.forEach(halo=>{ 
   halo1.push(
   {
    "ProductCode":halo.title,
    "ProductName":halo.title1,
    "ProductQty":halo.title2,
    "ProductPrice":halo.title3,
    "ProductDiscount":halo.title4,
    "Amount":halo.title5
   });
});
    //console.log(this.halo1.push());
    console.log(halo1);
   //this.serializedForm = JSON.stringify(form);
   //console.log(this.serializedForm);
   this.gridView1 = halo1; 
   //let json = this.serializedForm;
  //let objs = Object.keys(json).map(key => json[key]);
  //console.log(objs);
  // this.gridData.push();
  //this.ProductForm.setValue( );
  
} 


}
