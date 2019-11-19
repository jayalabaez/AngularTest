import {Component , OnInit , Input}  from "@angular/core"

@Component({
selector:"pag-cm",
templateUrl:"./paging.component.html"

})
export class PagingComponent implements OnInit{
@Input()
total:number;
@Input()
pageSize:number;

pages:Array<number>=[1,2,3,4];
pageSelected:number = 1;


addPages(n:number){
this.pages = [];
  for(let i:number = 0 ; i<n;i++){
    this.pages.push(i);
  }
}

ngOnInit(){
debugger;
if(this.total<=this.pageSize)
 {
   this.pageSelected =1;
   this.pages = [1];
 }else{
  
       if(this.total%this.pageSize == 0)
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

}



}