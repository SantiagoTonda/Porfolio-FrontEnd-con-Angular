import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Idioma } from 'src/app/model/idioma';
import { IdiomaService } from 'src/app/service/idioma.service';

@Component({
  selector: 'app-newidiomas',
  templateUrl: './newidiomas.component.html',
  styleUrls: ['./newidiomas.component.css']
})
export class NewidiomasComponent implements OnInit {
  nombre: string;
  nivel: string;

  constructor(private idiomaS: IdiomaService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const idioma = new Idioma(this.nombre, this.nivel);
    this.idiomaS.save(idioma).subscribe(
      data => {
        alert("Idioma añadido correctamente");
        this.router.navigate(['']);
      }, err => {
        alert("Error al añadir el idioma");
        this.router.navigate(['']);
      }
    )
  }
}
