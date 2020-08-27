import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
    programst = [];

    filterObj = {
      land_success : "",
      launch_success :"",
      launch_year : ""
    };

    private SERVER_URL = "https://api.spacexdata.com/v3/launches?limit=100&amp;launch_success="+this.filterObj.launch_success+"&amp;land_success="+this.filterObj.land_success+"&amp;launch_year="+this.filterObj.launch_year;

  	constructor(private httpClient: HttpClient) {}


  public get(newObj){
    console.log("NEW OBJ "+JSON.stringify(newObj));
    if(newObj) {
      this.SERVER_URL = "https://api.spacexdata.com/v3/launches?limit=100&amp;launch_success="+newObj.launch_success+"&amp;land_success="+newObj.land_success+"&amp;launch_year="+newObj.launch_year;
  }
  console.log('API CALL : ' + this.SERVER_URL);
		return this.httpClient.get(this.SERVER_URL);
	}
}
