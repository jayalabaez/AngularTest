import {Component , OnInit} from '@angular/core'

@Component({
selector : 'test-cm',
templateUrl : './test.template.html'

})

export class TestComponent implements OnInit {
testVar : string = 'Test Vars'
products : Array<Product>;
show : boolean  = true;
inputValue:string;
filterValue:string;
pristineProduct : Product;
pristineProducts : Array<KeyValuePair<number,Product>> = new Array<KeyValuePair<number,Product>>();
productsFromSource :Array<Product>;

ngOnInit(){
  this.products = Product.createProducts();
  this.addToSource(this.products);
}


onPagingNotify(skip:number){

debugger;

}

insertData():void{
if(this.inputValue){this.products.push(new Product({name:this.inputValue,id:0,ammount:"25"}));
this.inputValue = "";}
this.addToSource(this.products);
};

addToSource(data){
this.productsFromSource = Object.assign([],data);
  
}


onSearch():void{

if(this.filterValue.length > 0){

let pp = this.productsFromSource.filter(n => n.name.toLocaleLowerCase().match(this.filterValue.toLocaleLowerCase()) || n.ammount.match(this.filterValue) );
debugger;
if(pp.length > 0){
debugger;

 
  this.products = pp;
}

}else if(this.filterValue == ""){
debugger;
this.products = this.productsFromSource;

}
}

toogle():void{ 

this.show = !this.show;
};


toogleUpdate(index):void { 

let toAdd:Product = Object.assign({},this.products[index]);
this.products[index].pristineValue =  toAdd;
// let valuePair : KeyValuePair<number,Product> = [index,toAdd];
// this.pristineProducts.push(valuePair);



//let test:Product|number = this.pristineProducts.find(s=> s[0] == index)[1];

//this.pristineProduct = Object.assign({},this.products[index]);


//this.pristineProducts.push([index,this.products[index]])

//this.pristineProduct =  this.products[index];
//this.products[index].showUpdate  != this.products[index].showUpdate;

if(this.products[index].showUpdate){
this.products[index].showUpdate = false;
}else{this.products[index].showUpdate=true}

}

pristineUpdate(index){
let pristineProduct:Product = this.products[index].pristineValue;

this.products[index].name = pristineProduct.name;
this.addToSource(this.products);
}

cancelUpdate(index):void{
this.pristineUpdate(index);
this.toogleUpdate(index);
}
saveRow(index):void{

//======Save Opertation Here.

this.toogleUpdate(index);
}

delete(index){
  debugger;
this.products.splice(index,1);
this.addToSource(this.products);

};

}




interface KeyValuePair<K,V> extends Array<K|V>{
0:K;
1:V;
}



class UpadateRow<V> {

  showUpdate : boolean = false;
  pristineValue : V

}

class Product extends UpadateRow<Product>{
name:string = "fff";
ammount = "5559991234"
id:number = 90;

   public constructor(init?:Partial<Product>) {
     super();
        Object.assign(this, init);
    }

public static createProducts(): Array<Product>
{
let buffer : Array<Product> =new Array<Product>(); 



for(let i = 0; i<5; i++){
let toAdd = new Product({name:(String(i)+"joel"), id:i , ammount:"876"});
buffer.push(toAdd);
}
buffer.push(new Product({name:"Luis", id:0 ,  ammount:"7875"}));
buffer.push(new Product({name:"Liam", id:0 ,  ammount:"93"}));
buffer.push(new Product({name:"Luillo", id:0 ,  ammount:"445"}));
buffer.push(new Product({name:"Elpiel", id:0 ,  ammount:"7877"}));
return buffer;
};


}