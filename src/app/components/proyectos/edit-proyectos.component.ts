import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ImageProyService } from 'src/app/service/image-proy.service';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-edit-proyectos',
  templateUrl: './edit-proyectos.component.html',
  styleUrls: ['./edit-proyectos.component.css']
})
export class EditProyectosComponent implements OnInit {
  proyectos: Proyectos = null;

  constructor(private proyectosS: ProyectosService, private activatedRouter: ActivatedRoute, private router: Router, public imageProyService: ImageProyService) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyectosS.detail(id).subscribe(
      data => {
        this.proyectos = data;
      }, err => {
        alert("Error al editar");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(){
    this.proyectos.img = this.imageProyService.urlImg
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyectosS.update(id, this.proyectos).subscribe(
      data => {
        alert("Proyecto editado correctamente");
        this.router.navigate(['']);
      }, err => {
        alert("Error al editar el proyecto");
        this.router.navigate(['']);
      }
    )
    this.imageProyService.clearUrl();
  }

  uploadImage($event:any) {
    const id = this.activatedRouter.snapshot.params['id'];
    const name = "proyecto_" + id;
    this.imageProyService.uploadImage($event, name)
  }
}
