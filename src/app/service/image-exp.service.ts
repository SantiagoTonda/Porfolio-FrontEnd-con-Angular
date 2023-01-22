import { Injectable } from '@angular/core';
import { Storage, ref, uploadBytes, list, getDownloadURL } from '@angular/fire/storage';
import { ActivatedRoute } from '@angular/router';
import { Experiencia } from '../model/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ImageExpService {
  url: string = "";
  urlImg: string = "";
  nombre:string = "";

  constructor(private storage: Storage) { }

  public uploadImage($event:any, name: string){
    const file = $event.target.files[0]
    const imgRef = ref(this.storage, `imagenExp/`+ name)
    this.nombre = name;
    uploadBytes(imgRef,file)
    .then(response => {this.getImages()})
    .catch(error => console.log(error)
    )
  }


  getImages(){
    const imagesRef= ref(this.storage, 'imagenExp')
    list(imagesRef)
    .then(async response => {
      for(let item of response.items){
        this.url = await getDownloadURL(item);
        if(this.nombre == item.name){
          this.urlImg = this.url;
        }
      }
    })
    .catch(error => console.log(error)
    )
  }

clearUrl() {
  this.url = "";
  this.urlImg = "";
  }


}





/*export class ImageExpService {
  url: string = "";
  urlTemp: string = "";
  urlsplit: string = "";
  itemname: string = "";

  constructor(private storage: Storage, private activatedRouter: ActivatedRoute) { }

  public uploadImage($event: any, name: string){
    const file =  $event.target.files[0]
    console.log(file);
    
    const imgRef = ref(this.storage, `imagenExp/`+ name) //Name = "experiencia_" + id
    uploadBytes(imgRef, file)
    .then(response => {this.getImages()})
    .catch(error => console.log(error))
  }

  getImages(){
    const id = this.activatedRouter.snapshot.params['id'];
    const imagesRef = ref(this.storage, 'imagenExp')
    list(imagesRef)
    .then(async response => {
      for(let item of response.items){
        //this.url = await getDownloadURL(item);
        this.urlTemp = await getDownloadURL(item);
        //console.log("item name = " + item.name);
        this.itemname = item.name;
        this.urlsplit = this.itemname.slice(12);
        console.log("url split = " + this.urlsplit);        

        if (this.urlsplit == id) {
          this.url = this.urlTemp;
        }
      }
      console.log("La id es: " + id);
      

    })
    .catch(error => console.log(error))
  }
}*/