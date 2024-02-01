/* eslint-disable react/jsx-key */
import './App.css'
import { useState } from 'react'

//imagem
import fotoResaturante from './assets/fotoRest.jpg'

//components
import Navigation from './components/Navigation/Navigation'
import ItemCardapio from './components/Cardapio/ItemCardapio'
import { doces, cafes, combos, bebidas, salgados } from './cardapio'

function App() {
  
  const paginasMenu =[salgados, doces , cafes, combos ,bebidas]
  const [paginaSelecionada, setPaginaSelecionada] = useState(0)

  return (
    <>
      <img src={fotoResaturante} className='capa'></img>
      
      <Navigation setPaginaSelecionada={setPaginaSelecionada}></Navigation>
      
      <div className='menu'>
        
        {paginasMenu[paginaSelecionada].map(item => 
          <ItemCardapio nome ={item.nome}
          descricao={item.descricao}
          preco={item.preco}
          imagem ={item.imagem}>          
          </ItemCardapio>
        )}

      </div>
    </>
  )
}

export default App
