import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ContiComponent } from './components/conti/conti.component';
import { ImagComponent } from './components/imag/imag.component';
import { TittleComponent } from './components/tittle/tittle.component';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { VirtualComponent } from './components/virtual/virtual.component';
import { BottonComponent } from './components/botton/botton.component';
import { EjemploComponent } from './components/ejemplo/ejemplo.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,ContiComponent,ImagComponent,TittleComponent,EncabezadoComponent,VirtualComponent,BottonComponent,EjemploComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'colegio';
}
