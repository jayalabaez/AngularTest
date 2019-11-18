import {Component} from '@angular/core'

@Component({
selector : 'test-cm',
templateUrl : './test.template.html'

})

export class TestComponent {
testVar : string = 'Test Vars'
products : Array<Product> = Product.createProducts();
show : boolean  = true;
inputValue:string;
pristineProducts : Array({nmae:strin);
insertData():void{
if(this.inputValue){this.products.push(new Product({name:this.inputValue,id:0}));
this.inputValue = "";}

};

toogle():void{ 

this.show = !this.show;
};
toogleUpdate(index):void { 
this.pristineProducts.push([index,this.products[index]])
//this.pristineProduct = Object.assign({},this.products[index]);
//this.pristineProduct =  this.products[index];
//this.products[index].showUpdate  != this.products[index].showUpdate;
if(this.products[index].showUpdate){
this.products[index].showUpdate = false;
}else{this.products[index].showUpdate=true}

}

cancelUpdate(index):void{
this.products[index] = this.pristineProduct;
this.pristineProduct = new Product();
this.toogleUpdate(index);
}
saveRow():void{

}

delete(index){
  debugger;
this.products.splice(index,1);

};

}

class UpadateRow {

  showUpdate : boolean = false;

}

class Product extends UpadateRow{
name:string = "fff";
id:number = 90;

   public constructor(init?:Partial<Product>) {
     super();
        Object.assign(this, init);
    }

public static createProducts(): Array<Product>
{
let buffer : Array<Product> =new Array<Product>(); 



for(let i = 0; i<10; i++){
let toAdd = new Product({name:(String(i)+"joel"), id:i});
buffer.push(toAdd);
}
return buffer;
};


}