
export class Livre{

  book_id : string;

  name : string;

  cover : string

  authors: Array<string>= [];

  year : string;

  constructor(book_id : string,cover : string, authors : Array<string>, year : string, name : string) {
    this.book_id = book_id;
    this.cover = cover;
    this.authors = authors;
    this.year = year;
    this.name = name;
  }

}
