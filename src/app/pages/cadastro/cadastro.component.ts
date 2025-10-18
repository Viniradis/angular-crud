import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from 'src/app/models/Produtos';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  btnAcao = "Cadastrar!"
  btnTitulo = "Cadastrar Produto!"

  constructor(private produtoService: ProdutoService, private router: Router) {}

  createProduto(produto: Produto) {
    this.produtoService.CreateProduto(produto).subscribe(() => {
      this.router.navigate(['/'])
    });
  }
}
