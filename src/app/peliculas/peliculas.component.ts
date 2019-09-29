import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../general.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {

  public peliculas: any[] = []
  public busqueda: string = "";
  public firstCharge: boolean = false;
  constructor(
    private general: GeneralService,
    private router: Router
  ) { }

  ngOnInit() {
    this.general.getRequest({}, "/films/").then(data => {
      this.peliculas = data['results'];
      this.firstCharge = true;
      this.peliculas = this.filterBy('episode_id');
    })
  }
  filterBy(prop: string) {
    console.log("BUSQUEDA__", prop);
    prop = "title = " + +prop
    if (prop.length === 0) { this.peliculas = this.filterBy('episode_id'); }
    return this.peliculas.sort((a, b) => a[prop] > b[prop] ? 1 : a[prop] === b[prop] ? 0 : -1);
  }

  filterByName(prop: string) {
    if (prop.length === 0) { this.peliculas = this.filterBy('episode_id'); }
    return this.peliculas.sort((a, b) => a['title'] > b['title'] ? 1 : a['title'] === b['title'] ? 0 : -1);    
  }

movieSelect(movie) {
  let url_new = movie['url']
  let initial = url_new.length - 2
  var direction = url_new.substring(initial);
  this.router.navigate([`/peliculas-detail/${direction}`], { relativeTo: direction, });
}

filterItems(query) {
  return this.peliculas = this.peliculas.find(this.peliculas['title'] = query);
}

}
