import {Component , OnInit , Input ,Output}  from "@angular/core"

@Component({
selector:"pag-cm",
templateUrl:"./paging.component.html"

})
export class PagingComponent implements OnInit{
@Input()
total:number;

@Input()
pageSize:number;
pages:Array<number>;
pageSelected:number = 1;

@Output() notify : EventEmitter<string> = new EventEmitter<string>();

addPages(n:number){
this.pages = [];
  for(let i:number = 1 ; i<n;i++){
    this.pages.push(i);
  }
}

ngOnInit(){
debugger;
if(parseInt(<string><unknown>this.pageSize) > this.total)
 {
  debugger;
   this.pages = [1];
    this.pageSelected =1;
 }else{
  
       if(<number>this.total%<number>this.pageSize == 0)
           {
            this.addPages(this.total/this.pageSize);   
           }
           else{
             let total:number = this.total/this.pageSize;
             if(Math.floor(total) > 0){

               ++total; 
     
             }

            this.addPages(Math.ceil(total));

           }

      }
};



}