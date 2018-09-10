import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Slider } from './slider.model';
import { SliderContent } from './slidercontent.model';
@Injectable({
  providedIn: 'root'
})
export class SliderService {

  constructor(private http:HttpClient) { }

  getSliderData()
  {
    return this.http.get<Slider[]>("http://localhost:52870/api/GetSlider");
  }
  getSliderContentData(id:number)
  {
    return this.http.get<SliderContent[]>("http://localhost:52870/api/GetSliderIcerik/"+id);
  }
  getSliderDataItem(id:number)
  {
    return this.http.get<Slider>("http://localhost:52870/api/GetSliderVerileriGetir/"+id);
  }
}
