import { Component, OnInit } from '@angular/core';

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

  constructor(){}

  ngOnInit(): void {

  }
}
