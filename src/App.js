import React, {Component} from 'react';
import './App.css'
import data from './components/data'
import Card from './components/card';
import Buttons from './components/buttons'
import Header from './components/header'

class App extends Component {

  constructor(){
    super()
    this.state={
    
      dataArr: data,
      i: 0
    }
}

nextPage =() => {

  this.setState({
    i: this.state.i +1
    
    
    
  })
}

lastPage =() => {

  this.setState({
    i: this.state.i -1
    
    
    
  })
}

  render(){
   
    
  return (
    <div>
     <Header />
     <main>
     <div className='counter'>{this.state.dataArr[this.state.i]['id']}/{this.state.dataArr.length}</div>
       <div className='card-container' >
       
         <div className='card'><Card i={this.state.i} data={this.state.dataArr}/></div>
      </div>
       <div>
      <Buttons i={this.state.i} data={this.state.dataArr} nextPage={this.nextPage} lastPage={this.lastPage} />
     </div>
     </main>
    </div>
  )
  }
}

export default App