import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ImageProyService } from 'src/app/service/image-proy.service';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-new-proyectos',
  templateUrl: './new-proyectos.component.html',
  styleUrls: ['./new-proyectos.component.css']
})
export class NewProyectosComponent implements OnInit {
  nombre: string;
  descripcion: string;
  link: string;
  img: string;

  constructor(private proyectosS: ProyectosService, private router: Router, public imageProyService: ImageProyService) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    this.img = this.imageProyService.urlImg;
    const proyectos = new Proyectos(this.nombre, this.descripcion, this.link, this.img);
    this.proyectosS.save(proyectos).subscribe(
      data => {
        alert("Proyecto creado correctamente");
        this.router.navigate(['']);
      }, err =>{
        alert("Fallo al añadir la skill");
        this.router.navigate(['']);
      }
    )
    this.imageProyService.clearUrl();
  }

  uploadImage($event: any){
    const name = "proyecto_" + this.nombre;
    this.imageProyService.uploadImage($event, name)
  }
}
