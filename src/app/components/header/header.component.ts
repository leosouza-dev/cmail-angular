import { Component } from '@angular/core';

@Component({
  selector: 'cmail-header',
  templateUrl: './header.component.html',
  styleUrls: [
    './header.component.css',
    './header.search.css'
]
})
export class HeaderComponent{

  private _isMenuOpen = false

  get isMenuOpen(){
    return this._isMenuOpen
  }

  toggleMenu(){
    // por estar chamando um método getter, mão precisamos abrir/fehar os parenteses
    // ele funciona como uma propriedade
    this._isMenuOpen = !this.isMenuOpen
  }
}