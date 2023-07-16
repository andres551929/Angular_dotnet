import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-tarjeta-credito',
  templateUrl: './tarjeta-credito.component.html',
  styleUrls: ['./tarjeta-credito.component.css']
})
export class TarjetaCreditoComponent implements OnInit {
listarTarjetas: any[] = [
  {titular: 'Juan Perez', numeroTarjeta: '2312312312', fechaExpiracion : '11/12', cvv: '123'},
  {titular: 'Elver Gomez', numeroTarjeta: '312312312', fechaExpiracion : '12/13', cvv: '321'}

];

form: FormGroup;

  constructor(private fb: FormBuilder){
    this.form = this.fb.group({
      titular: [''],
      numeroTarjeta: [''],
      fechaExpiracion: [''],
      cvv: ['']
    })
  }

  ngOnInit(): void {

  }

  agregarTarjeta(){
    console.log(this.form);

    const tarjeta: any = {
      titular: this.form.get('titular')?.value,
      numeroTarjeta: this.form.get('numeroTarjeta')?.value,
      fechaExpiracion: this.form.get('fechaExpiracion')?.value,
      cvv: this.form.get('cvv')?.value
    }
   this.listarTarjetas.push(tarjeta)
    this.form.reset();
}

}
