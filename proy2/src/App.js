import React, { Component } from 'react';
import './App.css';
import CampoTexto from './CampoTexto/CampoTexto';
import ComponenteCaracter from './ComponenteCaracter/ComponenteCaracter';
import ComponenteValidacion from './ComponenteValidacion/ComponenteValidacion';

class App extends Component {
  state =  {
    tam: '',
    valor: ''
  }

 borraCaracter = index => {
    const vectorCaracteres = [...this.state.valor];
    vectorCaracteres.splice(index, 1);
    const valorActualizado = vectorCaracteres.join('');
    this.setState({
      valor: valorActualizado
    })
  }

  
  campoCambiado =  (event) => {
    let descripcionTexto = "El texto es demasiado corto";
    if (event.target.value.length > 5) {
      descripcionTexto = 'El texto tiene un tamaño adecuado';
    } 
    this.setState({
      tam: event.target.value.length,
      descr: descripcionTexto,
      valor: event.target.value
    })
  }
  
  render() {
    return (
      <div className="App">
        <label htmlFor="campo1">Introduce tu texto: </label>
        <CampoTexto id="campo1" actualizado = {this.campoCambiado}/>
        <ComponenteValidacion tam={this.state.tam} descr={this.state.descr}/>
        <div>
          {
            this.state.valor.split('').map((char, index)=> {
              return <ComponenteCaracter caracter={char}  key={index} borra={()=>this.borraCaracter(index)}/>
            })
          }
        </div>
        <p>{this.state.tam}</p>
      </div>
    );
  }
}

export default App;
