/* eslint-disable react/prop-types */
import '../../App.css'

function Navigation(props){
  return (
    <div className='navegacao'>
        <input type='radio' 
        name='opcao-page' 
        id='pagina-0' 
        defaultChecked
        onClick={()=> props.setPaginaSelecionada(0)}></input>

        <label htmlFor='pagina-0'>Salgados</label>
        
        <input type='radio' 
        name='opcao-page' 
        id='pagina-1' 
        onClick={()=> props.setPaginaSelecionada(1)}></input>

        <label htmlFor='pagina-1'>Doces</label>
               
        <input type='radio' 
        name='opcao-page' 
        id='pagina-2' 
        onClick={()=> props.setPaginaSelecionada(2)}></input>

        <label htmlFor='pagina-2'>Cafés</label>

        <input type='radio' 
        name='opcao-page' 
        id='pagina-3' 
        onClick={()=> props.setPaginaSelecionada(3)}></input>

        <label htmlFor='pagina-3'>Combos</label>

        <input type='radio' 
        name='opcao-page' 
        id='pagina-4' 
        onClick={()=> props.setPaginaSelecionada(4)}></input>

        <label htmlFor='pagina-4'>Bebidas Geladas</label>

    </div>
  )
}

export default Navigation