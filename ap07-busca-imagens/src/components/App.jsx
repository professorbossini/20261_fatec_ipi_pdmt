// rafce
import React from 'react'
import Busca from './Busca'
import { createClient } from 'pexels'
export default class App extends React.Component{

  pexelsClient = null

  componentDidMount(){
    this.pexelsClient = createClient('a91Qyfh2Ud1rdeOGKV8aTR5Aj9UmRvdma6EdyhC9EfKStoAyt7rmDuhV')
  }

  onBuscaRealizada = (termoDeBusca) => {
    console.log(termoDeBusca)
  }
  render(){
    return (
      // .grid.justify-content-center.m-auto.w-9.border-round.border-1.border-400
      <div className="grid justify-content-center m-auto w-9 border-round border-1 border-400">
        <div className="col-12">
          <h1>Exibir imagens de...</h1>
        </div>
        <div className="col-12">
          <Busca 
            onBuscaRealizada={this.onBuscaRealizada}/>
        </div>
      </div>
    )
  }
}

