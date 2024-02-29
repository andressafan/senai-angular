import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Produto, ProdutoCadastro } from 'src/app/models/Produto.model';
import { ProdutoService } from 'src/app/produto.service';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css']
})
export class CadastroProdutoComponent {
  public produto: ProdutoCadastro = new ProdutoCadastro("","","",0);

  constructor(private _produtoService:ProdutoService, private _router: Router){}

  cadastrar():void{
    this._produtoService.cadastrarProduto(this.produto).subscribe(
      produto => {
        this.produto = new ProdutoCadastro("","","",0);
        alert("Cadastro Efetuado com Sucesso!");
      },
      err => {
        alert("Erro ao Cadastrar");
      }
    );
    this._router.navigate(["restrito/lista"]);
  }
}
