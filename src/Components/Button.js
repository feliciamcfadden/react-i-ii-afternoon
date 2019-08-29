import React, {Component} from 'react';
import './css/buttons.css'
class Buttons extends Component{

  


    render(){
        return(

     <div className='buttons-container'>
     <button className='button2' onClick={this.props.lastPage}>&lt; Previous</button>
     <div>
     <button className='button1'>Edit</button>
     <button className='button1'>Delete</button>
     <button className='button1'>New</button>
     </div>
     <button className='button2' onClick= {this.props.nextPage}>Next &gt;</button>
    </div>

        )

    }
}

export default Buttons