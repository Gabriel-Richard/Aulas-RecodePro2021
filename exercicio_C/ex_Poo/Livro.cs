
using System;

public class Class1
{
	public Class1()
	{
		private string nome;
		private string autor;
		private int nroPaginas;
		private double preco;

		public string getNome() {
			return this.nome;
		}
        public void setNome(string nome) { 
			this.nome=nome
		}
		public string getAutor() {
			return this.autor;
		}
		public void setautor(string autor) {
			this.autor = autor 
		}
		public int getNroPaginas() {
			return this.nroPaginas;
		}
		public void setNroPaginas( int nroPaginas) {
			this.nroPaginas = nroPaginas;
		}
		public double getPreco () {
			return this.preco;
		}
		public void setPreco(double preco) {
			this.preco = preco;
		}
		


	}
}
