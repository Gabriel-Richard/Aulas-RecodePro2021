import React, {useState} from "react"

export default function Calc() {
    const [total, setTotal] = useState(0);//vamos usar o tota, mas sempre q for mudar o valor tem q usar o setTotal.
    const [operacao, setOperacao] = useState ('');
    const [resposta, setResposta] = useState (false);
    const [valor, setValor] = useState ([]);
    const [formData, setFormData] = useState ({
        valor1: '',
        valor2: '',
        operador: '',
    })

    const onChangeInput = (e) => 
    setFormData({...formData, [e.target.name]: e.target.value});// os 3 pontinhos é para setar cada coisa do formData.

    let operador = formData.operador;
    let n1 = Number(formData.valor1);
    let n2 = Number(formData.valor2);

    function Calcular(e){
        e.preventDefault();

        setValor([formData.valor1, formData.valor2]);

        if (operador === '+') {
            setTotal (n1 + n2);
            setOperacao ('soma');
          } else if (operador === '-') {
            setTotal  (n1 - n2);
            setOperacao ('subtração');
          } else if (operador === '*') {
            setTotal (n1 * n2);
            setOperacao ('multiplicação');
          } else if (operador === '/') {
            setTotal (n1 / n2);
            setOperacao  ('divisão');
          }

          setResposta (true)

          setFormData({
              valor1: '',
              valor2: '',
              operador: ''


          })
    }

    return (
        <section ClassName="container">
          <div ClassName="p-4">
            <form onSubmit={Calcular}>
              <div ClassName="form-group">
                <label htmlFor="valor1">Digite o primeiro valor:</label>
                <input
                  type="number"
                  ClassName="form-control"
                  name="valor1"
                  placeholder="Exemplo: 1"
                  onChange={onChangeInput}
                  value={formData.valor1}
                />
              </div>
              <div ClassName="form-group">
                <label htmlFor="operador">Digite um operador válido:</label>
                <input
                  type="text"
                  ClassName="form-control"
                  name="operador"
                  placeholder="Exemplo: +, -, * ou /."
                  onChange={onChangeInput}
                  value={formData.operador}

                />
              </div>
              <div ClassName="form-group">
                <label htmlFor="valor2">Digite o segundo valor:</label>
                <input
                  type="number"
                  ClassName="form-control"
                  name="valor2"
                  placeholder="Exemplo: 2"
                  onChange={onChangeInput}
                  value={formData.valor2}

                />
              </div>
              <button type="submit" ClassName="btn btn-primary" id="buttonSomar">
                Calcular
              </button>
            </form>
          </div>          
          <div ClassName="p-4">
              {resposta === true && ( // se a resposta for tru ele renderizara essa resposta
                  <div style={style.resposta}>
                      A {operacao} entre {valor[0]} e {valor[1]} é igual a {total}
                  </div>
              )}
          </div>
        </section>
    )
}

const style = {
    resposta: {
        padding: '10px',
        fontSize: '20px',
        background: 'blue',
        borderRadius: '10px',
        color: 'white',
        boxShadow: '2px 2px 8px black',
      }
      

}