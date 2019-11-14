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

insertData():void{
if(this.inputValue){this.products.push(new Product({name:this.inputValue,id:0}));
this.inputValue = "";}

};

toogle():void{ 

this.show = !this.show;
};

delete(index){
this.products.splice(index,1);

};

}

 class Product{
name:string = "fff";
id:number = 90;

   public constructor(init?:Partial<Product>) {
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