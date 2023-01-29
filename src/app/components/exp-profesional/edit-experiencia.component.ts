import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ImageExpService } from 'src/app/service/image-exp.service';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent implements OnInit {
  expLab: Experiencia = null;

  constructor(private sExperiencia: SExperienciaService, private activatedRouter: ActivatedRoute, private router: Router, public imageExpService: ImageExpService) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sExperiencia.detail(id).subscribe(
      data => {
        this.expLab = data;
      }, err => {
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.expLab.img = this.imageExpService.urlImg
    this.sExperiencia.update(id, this.expLab).subscribe(
      data => {
        alert("Experiencia actualizada correctamente");
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar la experiencia");
        this.router.navigate(['']);
      }
    )
    this.imageExpService.clearUrl();
  }

  uploadImage($event:any) {
    const id = this.activatedRouter.snapshot.params['id'];
    const name = "experiencia_" + id;
    this.imageExpService.uploadImage($event, name)
  }
}
