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
    console.log("GRP FLS OnInit:",this.groupFilters)
		this.apiService.get(null).subscribe((data:  any[])=>{
			console.log(data);
			this.programs = data;
      this.apiService.programst = this.programs;
		})
	}

  ngOnChanges(): void {
    console.log("GRP FLS OnChanges :",this.groupFilters)
		if (this.groupFilters)
      console.log("CHANGED :", this.groupFilters)
      this.apiService.get(this.groupFilters).subscribe((data : any[]) => {
        this.programs = data;
      })
	}



}
