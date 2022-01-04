import './Style.css'; //só no caso do css q nao precisa colocar o from 
import Calc from'../components/Calc' 

export default function Home(){
    return (
        <main style={style.main}>
            
        <header title='Calculadora' />
        
        <Calc /> 

        </main>
    );
}
const style = {
    main: {
        height: '100vh',
        position: 'relative',
      }
}