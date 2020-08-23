import { Component, OnInit, OnChanges, Input, ChangeDetectorRef } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-programcard',
  templateUrl: './programcard.component.html',
  styleUrls: ['./programcard.component.css']
})
export class ProgramcardComponent implements OnChanges {
  @Input() groupFilters: Object;
	@Input() searchByKeyword: string;

	programs : any[] = [];
  filteredprograms: any[] = [];
  constructor(private apiService: ApiService,
  private ref: ChangeDetectorRef) { }

	ngOnInit() : void {
		this.apiService.get().subscribe((data:  any[])=>{
			console.log(data);
			this.programs = data;
		})
	}

  ngOnChanges(): void {
		// if (this.groupFilters) this.filterprogramslist(this.groupFilters, this.programs);
	}
  //
  // filterprogramslist(filters: any, programs: any): void {
	// 	this.filteredprograms = this.programs;
	// 	const keys = Object.keys(filters);
	// 	const filterprogram = user => {
	// 		let result = keys.map(key => {
	// 			if (!~key.indexOf('age')) {
	// 				if(user[key]) {
	// 					return String(user[key]).toLowerCase().startsWith(String(filters[key]).toLowerCase())
	// 				} else {
	// 					return false;
	// 				}
	// 			}
	// 		});
	// 		result = result.filter(it => it !== undefined);
	// 		if (filters['ageto'] && filters['agefrom']) {
	// 			if (user['age']) {
	// 				if (+user['age'] >= +filters['agefrom'] && +user['age'] <= +filters['ageto']) {
	// 					result.push(true);
	// 				} else {
	// 					result.push(false);
	// 				}
	// 				} else {
	// 					result.push(false);
	// 				}
	// 			}
	// 		return result.reduce((acc, cur: any) => { return acc & cur }, 1)
	// 	}
	// 	this.filteredprograms = this.programs.filter(filterprogram);
	// 	}



}
