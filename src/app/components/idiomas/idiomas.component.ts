import { Component, OnInit } from '@angular/core';
import { Idioma } from 'src/app/model/idioma';
import { IdiomaService } from 'src/app/service/idioma.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-idiomas',
  templateUrl: './idiomas.component.html',
  styleUrls: ['./idiomas.component.css']
})
export class IdiomasComponent implements OnInit {
  idioma: Idioma[] = [];

  constructor(private idiomaS: IdiomaService, private tokenService: TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    this.cargarIdiomas();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarIdiomas(): void{
    this.idiomaS.lista().subscribe(
      data => {
        this.idioma = data;
      }
    )
  }

  delete(id: number){
    if(id != undefined){
      this.idiomaS.delete(id).subscribe(
        data => {
          this.cargarIdiomas();
        }, err => {
          alert("No se pudo borrar el idioma");
        }
      )
    }
  }
}
