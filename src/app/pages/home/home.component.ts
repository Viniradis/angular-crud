import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ExcluirComponent } from 'src/app/componentes/excluir/excluir.component';
import { Produto } from 'src/app/models/Produtos';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  produtos: Produto[] = [];
  produtosGeral: Produto[] = [];

  colunas = ['Situacao', 'Nome', 'Preço', 'Estoque', 'Ações', 'Excluir']

  constructor(private produtoService: ProdutoService, public dialog: MatDialog ) { }

  ngOnInit(): void {
    this.produtoService.GetProdutos().subscribe(data => {
      const dados = data.dados;

      this.produtos = data.dados;
      this.produtosGeral = data.dados;
    });
  }

  search(event : Event) {
    const target = event.target as HTMLInputElement;
    const value = target.value.toLocaleLowerCase();

    this.produtos = this.produtosGeral.filter(produto => {
      return produto.nome.toLocaleLowerCase().includes(value);
    })
  }

  OpenDialog(id: number) {

    this.dialog.open(ExcluirComponent, {
      width: '450px',
      height: '450px',
      data: {
        id: id
      }
    })
  }
}
