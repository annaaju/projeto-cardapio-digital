/* eslint-disable react/prop-types */
import '../../App.css'



function ItemCardapio (props) {
  return (
    <div className='container-item-cardapio'>
        <div>
            <h2>{props.nome}</h2>
            <p>{props.descricao}</p>
            <p>{props.preco}</p>
        </div>
        
        <img src={props.imagem}/>

    </div>
  )
}

export default ItemCardapio