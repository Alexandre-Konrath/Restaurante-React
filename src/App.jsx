import { useState } from 'react'

import './App.css'

import hashtaurante from './assets/hashtaurante.webp'

import { Navegacao } from './Navegacao'
import { ItemCardapio } from './ItemCardapio'
import { pratosPrincipais, bebidas, sobremesas } from './cardapio'

export function App() {

  const paginasMenu = [pratosPrincipais, bebidas, sobremesas]
  // cria variável de estado e as informações das props podem ser carregadas sempre que forem modificadas
  const [paginaSelecionada, SetAtualizarPaginaselecionada] = useState(0)

  return (
    <>
      <img className='capa2' src={hashtaurante} alt="restaurante" />
      <Navegacao SetAtualizarPaginaselecionada={SetAtualizarPaginaselecionada} />
      <div className='menu'>
        {paginasMenu[paginaSelecionada].map(item => <ItemCardapio key={item.nome} nome={item.nome} descricao={item.descricao} preco={item.preco} imagem={item.imagem} />)}
      </div>
    </>
  )
}
