import { Routes } from '@angular/router';
import { Inicio } from './inicio/inicio';
import { Contactos } from './contactos/contactos';

export const routes: Routes = [
  { path: '', component: Inicio },
  { path: 'contactos', component: Contactos },
  { path: '**', redirectTo: '' }, // por si meten ruta rara
];
