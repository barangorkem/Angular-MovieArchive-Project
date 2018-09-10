import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SliderService } from '../slider.service';
import { SliderContent } from '../slidercontent.model';
import {NgxPaginationModule} from 'ngx-pagination';
import { Slider } from '../slider.model';
@Component({
  selector: 'app-slidercontent',
  templateUrl: './slidercontent.component.html',
  styleUrls: ['./slidercontent.component.css']
})
export class SlidercontentComponent implements OnInit {

  constructor(private route:ActivatedRoute,private sliderService:SliderService) { }
  sliderContentData:SliderContent[];
  sliderData:Slider;
  ngOnInit() {
    let id=parseInt(this.route.snapshot.paramMap.get('id'));
    console.log(id);

    this.sliderService.getSliderContentData(id).subscribe((data)=>{
      debugger;
      this.sliderContentData=data;
      console.log(data);
    });
    this.sliderService.getSliderDataItem(id).subscribe((data)=>{
      debugger;
      this.sliderData=data;
     
    });
  }

}
