import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { OrderModel } from '../order-model';
import { OdataService } from '../odata.services';

@Component({
    selector: 'order-component',
    templateUrl: './order.component.html',
    styleUrls: ['./order.component.css']
  })

  export class OrderComponent implements OnInit {
    public orders: Array<OrderModel>;
    public origin;
    public change;
    public sums;
    constructor(
      public odataService: OdataService,
      public activeRoute: ActivatedRoute)
    { 
  
    }
  
    ngOnInit() {
      this.activeRoute.params.subscribe(
        params => this.getOdataList(params["id"])
      );
     
    
    }
  
    public getOdataList(id: number){
      this.odataService.getOdataList(id)
        .subscribe(
          data => {
            this.orders = data["items"]
          },
          error => console.error(error)
        );
    }
    public onFocus(event){
      let fileInput=document.getElementsByTagName("input");
      //console.log(fileInput);
      let xiaoji=document.getElementsByTagName("label");
     // console.log(xiaoji);
      let target=(window.event.target||window.event.srcElement);
      ////console.log(target);
      for( let i=0;i< fileInput.length;i++){
        if(fileInput[i]==target){
          let inputValue=parseInt(fileInput[i].value);
          //console.log(inputValue);
         this.origin= inputValue;
        // console.log(this.origin);
        }
        
    }
  }
    public onBlur(event){
      let fileInput=document.getElementsByTagName("input");
     // console.log(fileInput);
      let xiaoji=document.getElementsByTagName("label");
      let tijiao=document.getElementById("submit");
      //console.log(xiaoji);
      let target=(window.event.target||window.event.srcElement);
       for( let i=0;i< fileInput.length;i++){
       // let inputValue=parseInt(fileInput[i].value);
       // console.log(fileInput.length);
       if(fileInput[i]==target){
        let inputValue=parseInt(fileInput[i].value);
        //console.log(inputValue);
       this.change= inputValue;
       //console.log( this.change);
      
       if(this.change<this.origin&&this.change>0){
        for (let j=0;j<xiaoji.length;j++){
          let total=xiaoji[0];
           let sum=parseInt(total.innerHTML)
          sum+=this.change;
        total.innerHTML=sum.toString();
        this.sums=sum;
        tijiao.style.backgroundColor="red";
       
       }
            
          }else{alert("库存不足！")}
          
        }  
    }
  }
  public tijiao(){
    window.alert("下单成功！")
         
          
        }
        
      } 
    
  