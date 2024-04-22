import Categoria from './Categoria';

export default interface Postagem {
  id: number;
  nomeProduto: string;
  descricaoProduto: string;
  estoque: number;
  preco: number;
  dataValidade: string;
  categoria: Categoria | null;
}