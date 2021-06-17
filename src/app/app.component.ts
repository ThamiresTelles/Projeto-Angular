import { Component } from '@angular/core';
import { NodeThamiresService } from './services/node-thamires.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Projeto-Angular';
  texto = "";

  constructor(private nodeThamiresService: NodeThamiresService) {}

  carregarTexto() {
    console.log("carregarTexto");

    this.nodeThamiresService.obterTextoPost()
      .subscribe((response: any) => {
        console.log(response);
        this.texto = response.mensagem;
      });

    console.log("fim");
    
  }
}
