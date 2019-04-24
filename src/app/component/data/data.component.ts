import { Component, OnInit } from '@angular/core';
import { DataSerService } from 'src/app/service/data-ser.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  
  constructor(private mobileser:DataSerService) { }
  MobileData;
  myArr=[];
  
  
  del(d)
  {
    let ind=this.MobileData.indexOf(d);
    this.MobileData.splice(ind,1);
  }
  mobile;
  sortid()
  {
    this.mobile="mobId";
  }
  sortname()
  {
    this.mobile="mobName";
  }
  sortprice()
  {
    this.mobile="mobPrice";
  }
  ngOnInit() {
    this.mobileser.getMobileData().subscribe(res=>{
      this.MobileData=res;
    })
  }

}
