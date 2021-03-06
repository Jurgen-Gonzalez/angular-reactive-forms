import { Component, OnInit } from '@angular/core';

interface MenuItem {
  texto: string;
  ruta: string;
}

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styles: [],
})
export class SidemenuComponent {
  reactiveMenu: MenuItem[] = [
    {
      texto: 'Basicos',
      ruta: './reactive/basicos',
    },
    {
      texto: 'Dinamicos',
      ruta: './reactive/dinamicos',
    },
    {
      texto: 'Switches',
      ruta: './reactive/switches',
    },
  ];
}
