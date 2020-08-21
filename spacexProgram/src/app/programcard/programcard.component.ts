import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-programcard',
  templateUrl: './programcard.component.html',
  styleUrls: ['./programcard.component.css']
})
export class ProgramcardComponent implements OnInit {

	programs = [];
  constructor(private apiService: ApiService) { }

	ngOnInit() {
		this.apiService.get().subscribe((data:  any[])=>{
			console.log(data);
			this.programs = data;
		})
	}

}
