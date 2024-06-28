import { Injectable } from '@angular/core';
import {Livre} from "./modules/livre";
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class LivresService {

  livres: Array<Livre>= [];


  getSearchedLivres(motcle : string){
    return this.http.get<any>('https://hapi-books.p.rapidapi.com/search/'+motcle,{headers: {
        'X-RapidAPI-Key': '71f9679725msh3d647fa97d6c0a4p111390jsnab9114d3cd09',
        'X-RapidAPI-Host': 'hapi-books.p.rapidapi.com'
      }} );
  }
  constructor(private http : HttpClient) {
    this.livres=[]
  }
}
