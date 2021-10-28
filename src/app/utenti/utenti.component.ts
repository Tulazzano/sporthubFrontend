import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

import { Utente } from 'src/utente';
import { UtentiServiceService } from '../utenti-service.service';


@Component({
  selector: 'app-utenti',
  templateUrl: './utenti.component.html',
  styleUrls: ['./utenti.component.css']
})
export class UtentiComponent implements OnInit {

  utenti : Utente [] = []; //Lo creo vuoto perchè prima mi serve il servizio;
  checkoutForm = this.formBuilder.group({ nome: '', cognome: ''});
  
  nome : string= this.getNome();

  constructor(private utentiService: UtentiServiceService,
                private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getUtenti();
    console.log(this.utenti);
  }

  getUtenti() : void{
     this.utentiService.getUtenti().subscribe(utenti=>this.utenti=utenti);
  }

  getNome() : string{

    console.log(this.checkoutForm.get("nome")?.value);
    return this.checkoutForm.get("nome")?.value;
    
  }
  onSubmit(): void { 
    console.warn('Hai inserito: ', this.checkoutForm.value);
    this.utentiService.add(this.checkoutForm.value).subscribe( user => console.log(user);});
    this.checkoutForm.reset();
  }

  delete(id: number){
    this.utentiService.deleteUser(id);
  }
}
