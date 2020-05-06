import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  //começando com form reativo
  formCadastro = new FormGroup({
    nome: new FormControl(),
    usernam: new FormControl(),
    senha: new FormControl(),
    avatar: new FormControl()
  })

  constructor() { }

  ngOnInit(): void {
  }

  handleCadastroUsuario(){
    if(this.formCadastro.valid){
      console.log(this.formCadastro.value);
    }
    else{
      console.log('Campos precisam ser preenchidos')
    }
  }

}
