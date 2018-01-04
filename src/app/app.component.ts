import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { OdataService } from './odata.services';
//import { AppModel } from './app-model';

@Component({
  selector: 'app-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class appComponent implements OnInit {
  public details :Object;
  public greeting :string;
  public title :string;
  private isShowMore :Boolean;

  constructor(
    public odataService: OdataService,
    public activeRoute: ActivatedRoute,public router: Router)
  { 

  }

  ngOnInit() {
    this.activeRoute.params.subscribe(
      params => this.getOdataList(params["id"])
    );
    this.greeting = "hello!";
    this.isShowMore = false;
  }

  public getOdataList(id: number){
    this.odataService.getOdataList(id)
      .subscribe(
        data => {
          this.details = data["items"]
          //console.log(this.details["title"]);
          //this.title = this.details["title"]  单独的json数据 不能读取，需要放到数组遍历才行。。。
        },
        error => console.error(error)
      );
  }

  public showDetail():void{
    this.isShowMore =true;
    //this.router.navigateByUrl("order")
  }

}
