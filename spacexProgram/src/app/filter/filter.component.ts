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

    filterObj = this.apiService.filterObj;

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


     updateProgramsList(): void {
       this.apiService.get(this.apiService.filterObj).subscribe((data:  any[])=>{
         console.log(data);
         this.apiService.programst = data;
       })
     }

    set_launch_year(year): void {
      this.apiService.filterObj.launch_year = year;
      console.log("Filter in filterObj :", this.apiService.filterObj);
      this.updateProgramsList();
    }

    set_launch_success(event): void {
      this.apiService.filterObj.launch_success = event.target.outerText;
      console.log("Filter in filterObj :", this.apiService.filterObj);
      this.updateProgramsList();
    }

    set_land_success(event): void {
      this.apiService.filterObj.land_success = event.value;
      console.log("Filter in filterObj :", this.apiService.filterObj);
      this.updateProgramsList();
    }

    // mycheck(filters): void {
    //   console.log("FILETER SS :: ",filters)
  	//    Object.keys(filters).forEach(key => {
    //      console.log("KEY   :",key);
    //      filters[key] === '' ? delete filters[key] : key});
  	//     this.groupFilters.emit(filters);
    //   }
  	}
