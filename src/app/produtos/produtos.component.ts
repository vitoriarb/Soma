import { Component, OnInit } from '@angular/core';
import { ProdutoModel } from '../models/produto';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})


export class ProdutosComponent implements OnInit {

  produto: ProdutoModel = new ProdutoModel();
  produtos: Array<any> = new Array();


  
  public margem_lucro: number;
  public preco_fabrica: number;
  public result:number;

  constructor(private produtoService: ProdutoService) { }

  ngOnInit(){
    this.listarProdutos();
    
  }

  
  salvar(){
    this.produtoService.criarProduto(this.produto).subscribe( produto => {
      this.produto = new ProdutoModel();
      this.listarProdutos();
    }, err => {
      console.log("Erro ao criar o produto", err)
    });
  }

  listarProdutos(){
    this.produtoService.listarProdutos().subscribe( produtos => {
      this.produtos = produtos;
    }, err => {
      console.log("Error em listar os produtos", err);
    });
  }

  editarProdutos(id: number){
    this.produtoService.editarProduto(id,this.produto).subscribe( produto =>{
      this.produto = new ProdutoModel();
      this.listarProdutos();
    }, err => {
      console.log("Erro ao atuaalizar o produto", err)
    });
  }

  removerProduto(id: any){
    this.produtoService.removerProduto(id).subscribe( produto => {
      this.produto = new ProdutoModel();
      this.listarProdutos();
    }, err => {
      console.log("Erro ao deletar o produto", err)
    });
  }

  conta(){
    this.result = this.margem_lucro + this.preco_fabrica;
    console.log(this.result);
  }

}