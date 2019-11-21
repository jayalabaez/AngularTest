import {Component , OnInit , Input ,Output , EventEmitter , OnChanges}  from "@angular/core"

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
skip:number;
take:number;
@Output() notify : EventEmitter<any> = new EventEmitter<any>();

addPages(n:number){
this.pages = [];
  for(let i:number = 1 ; i<=n;i++){
    this.pages.push(i);
  }

 this.skip = (this.pageSelected - 1) * this.pageSize;
 this.notify.emit({skip:this.skip, take:this.pageSize});

}

addPagesWithoutEmitt(n:number){
this.pages = [];
  for(let i:number = 1 ; i<=n;i++){
    this.pages.push(i);
  }
}

resetSelected(){

if(parseInt(<string><unknown>this.pageSize) > this.total)
 {
 
   this.addPagesWithoutEmitt(1);
    this.pageSelected =1;

 }else{
  
       if(<number>this.total%<number>this.pageSize == 0)
           {

            this.addPagesWithoutEmitt(this.total/this.pageSize);  
              this.pageSelected = this.pages.length;
           }
           else{
             let total:number = this.total/this.pageSize;
             if(Math.floor(total) > 0){

               ++total; 
     
             }

            this.addPagesWithoutEmitt(total);
             this.pageSelected = this.pages.length;
           }

      };

this.ngOnInit();

}

ngOnChanges(){

this.resetSelected();

}

ngOnInit(){
debugger;
if(parseInt(<string><unknown>this.pageSize) > this.total)
 {
  debugger;
   this.addPages(1);
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

            this.addPages(total);

           }
      }
};

}