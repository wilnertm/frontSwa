import { GeneralService } from './../general.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-peliculas-detail',
  templateUrl: './peliculas-detail.component.html',
  styleUrls: ['./peliculas-detail.component.css']
})
export class PeliculasDetailComponent implements OnInit {
  @Input() id: string;
  public pelicula: any[] = []
  public vehiculos: any[] = []
  public planetas: any[] = []
  public especies: any[] = []
  public naves: any[] = []
  public personajes: any[] = []
  public firstCharge: boolean = false;

  constructor(
    private router: ActivatedRoute,
    private general: GeneralService,
    private routerOut: Router
  ) { }

  ngOnInit() {
    this.router.paramMap.subscribe(params => {
      this.id = params.get('id')
    })
    if (this.id != "") {
      this.loadData(this.id)
    }
  }
  loadData(id) {
    this.general.getRequest({}, "/films/" + id).then(data => {
      console.log("DATOS_PELICULA", data);
      this.pelicula = data;
      this.firstCharge = true;
      this.getCharacters();
      this.getPlanets();
      this.getSpecies();
      this.getVehicles();
      this.getStartships();
    })
      .catch(error => {
        console.log("ERROR", error);
      })
  }
  getVehicles() {
    let temp = this.pelicula['vehicles']
    let longitud = temp.length
    for (let i = 0; i < longitud; i++) {
      this.general.getNoUrlRequest({}, temp[i]).then(data => {
        if (data) {
          this.vehiculos.push(data)
        }
      })
    }
  }
  getPlanets() {
    let temp = this.pelicula['planets']
    let longitud = temp.length
    for (let i = 0; i < longitud; i++) {
      this.general.getNoUrlRequest({}, temp[i]).then(data => {
        if (data) {
          this.planetas.push(data)
        }
      })
    }
  }
  getSpecies() {
    let temp = this.pelicula['species']
    let longitud = temp.length
    for (let i = 0; i < longitud; i++) {
      this.general.getNoUrlRequest({}, temp[i]).then(data => {
        if (data) {
          this.especies.push(data)
        }
      })
    }
  }
  getStartships() {
    let temp = this.pelicula['starships']
    let longitud = temp.length
    for (let i = 0; i < longitud; i++) {
      this.general.getNoUrlRequest({}, temp[i]).then(data => {
        if (data) {
          this.naves.push(data)
        }
      })
    }
  }
  getCharacters() {
    let temp = this.pelicula['characters']
    let longitud = temp.length
    for (let i = 0; i < longitud; i++) {
      this.general.getNoUrlRequest({}, temp[i]).then(data => {
        if (data) {
          this.personajes.push(data)
        }
      })
    }
  }

  detailSelect(item, mod) {
    let url = ""
    switch (mod) {
      case "personaje":
        url = '/personajes-detail/'
        break;
      case "planeta":
        url = '/planetas-detail/'
        break;
      case "especie":
        url = '/especies-detail/'
        break;
      case "vehiculo":
        url = '/vehiculos-detail/'
        break;
      case "nave":

        break;

      default:
        break;
    }
    console.log("ITEM_SELECCIONADO_____", item);
    let direction = item['url'];
    this.routerOut.navigate([url], { queryParams: {data: direction}, });
  }

}
