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
pageSelected:number = 2;

adjustPage():void{}

ngOnInit(){

if(this.total<this.pageSize)
{
this.pageSelected =1;
this.pages = [1];
}else{



}

}



}