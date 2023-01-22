export class Educacion {
    id?: number;
    nombreE: string;
    descripcionE: string;
    fecha: string;
    img: string;

    constructor(nombreE: string, descripcionE: string, fecha: string, img: string) {
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
        this.fecha = fecha;
        this.img = img;
    }
}
