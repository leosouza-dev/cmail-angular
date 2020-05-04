import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'cmail';
  private _isNewEmailFormOpen = false;

  public get isNewEmailFormOpen() {
    return this._isNewEmailFormOpen;
  }

  public toggleNewEmailForm(){
    this._isNewEmailFormOpen = !this.isNewEmailFormOpen
  }
}
