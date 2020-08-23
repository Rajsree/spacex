import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from "@angular/forms";
import { ApiService } from '../api.service';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})

export class FilterComponent implements OnInit {
  form: FormGroup;
  	@Output() autoSearch: EventEmitter<string> = new EventEmitter<string>();
  	@Output() groupFilters: EventEmitter<any> = new EventEmitter<any>();
  	searchText: string = '';
  	constructor(private fb: FormBuilder,  	private apiService: ApiService) {}

    land_success = '';
    launch_success = '';
    launch_year="";

  	ngOnInit(): void {
  		this.buildForm();
  	}

  	buildForm(): void {
  		this.form = this.fb.group({
  			ageto: new FormControl(''),
        land_fail : new FormControl(''),
        land_success : new FormControl(''),
        launch_success : new FormControl('')
  		});
    }

    set_launch_year(year): void {
      console.log("Lunch Year : ", year);
      this.launch_year = year;
      console.log("Current status : Launch Year -> : " + this.launch_year + "Launch_success -> :"+this.launch_success+ "Land -> :" +this.land_success)
    }
    set_launch_success(event): void {
      console.log("Lunch Success : ", event);
      this.launch_success = event.target.outerText;
      console.log("Current status : Launch Year -> : " + this.launch_year + "Launch_success -> :"+this.launch_success+ "Land -> :" +this.land_success)
    }

    set_land_success(event): void {
      console.log("Land Success : ", event.value);
      this.land_success = event.value;
      console.log("Current status : Launch Year -> : " + this.launch_year + "Launch_success -> :"+this.launch_success+ "Land -> :" +this.land_success)
    }

    mycheck(filters): void {
      console.log("FILETER SS :: ",filters)
  	   Object.keys(filters).forEach(key => {
         console.log("KEY   :",key);
         filters[key] === '' ? delete filters[key] : key});
  	    this.groupFilters.emit(filters);
      }
  	}
