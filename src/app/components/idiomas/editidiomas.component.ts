import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Idioma } from 'src/app/model/idioma';
import { IdiomaService } from 'src/app/service/idioma.service';

@Component({
  selector: 'app-editidiomas',
  templateUrl: './editidiomas.component.html',
  styleUrls: ['./editidiomas.component.css']
})
export class EditidiomasComponent implements OnInit {
  idioma: Idioma = null;

  constructor(private idiomaS: IdiomaService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.idiomaS.detail(id).subscribe(
      data => {
        this.idioma = data;
      }, err => {
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(){
    const id = this.activatedRouter.snapshot.params['id'];
    this.idiomaS.update(id, this.idioma).subscribe(
      data => {
        alert("Idioma actualizado correctamente");
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar el idioma");
        this.router.navigate(['']);
      }
    )
  }
}