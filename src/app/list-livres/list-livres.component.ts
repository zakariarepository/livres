import {Component, OnInit} from '@angular/core';
import {LivresService} from "../livres.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-list-livres',
  templateUrl: './list-livres.component.html',
  styleUrls: ['./list-livres.component.css']
})
export class ListLivresComponent implements OnInit{

  public livres:any[];

  constructor(private livresService : LivresService) {
    this.livres=[];
  }

  ngOnInit(){
    this.onSearchTextEnetered("")
  }

  searchText : string ='';
  onSearchTextEnetered(searchValue: string){
    this.searchText = searchValue;
    console.log(this.searchText);
    if(searchValue!=''){
      this.livresService.getSearchedLivres(searchValue).subscribe(
        (response) => {
          this.livres = response;
          console.log(response);
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    }else {

    }
  }
}
