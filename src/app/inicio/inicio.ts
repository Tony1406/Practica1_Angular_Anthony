import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [RouterLink],          // 👈 aquí metes RouterLink
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
})
export class Inicio {

}
