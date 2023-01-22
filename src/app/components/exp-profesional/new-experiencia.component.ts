import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ImageExpService } from 'src/app/service/image-exp.service';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {
  expLab: Experiencia = null;
  nombreE: string = '';
  descripcionE: string = '';
  fecha: string = '';
  img: string = '';

  constructor(private sExperiencia: SExperienciaService, private router: Router, public imageExpService: ImageExpService) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    this.img = this.imageExpService.urlImg;
    const expe = new Experiencia(this.nombreE, this.descripcionE, this.fecha, this.img);
    this.sExperiencia.save(expe).subscribe(data =>{alert("Experiencia añadida");
                                                   this.router.navigate(['']);
    }, err => {
      alert("Falló");
      this.router.navigate(['']);
    }
    )
    this.imageExpService.clearUrl();
  }

  uploadImage($event: any){
    const name = "experiencia_" + this.nombreE;
    this.imageExpService.uploadImage($event, name)
  }
}
