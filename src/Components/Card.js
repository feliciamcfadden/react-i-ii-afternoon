import React, {Component} from 'react'
import './css/card.css'

class Card extends Component{
render(props){
    return(

        <div>
            
            <div className='name-container'>
            
            <h1 className='name'>{this.props.data[this.props.i]['name']['first']} {this.props.data[this.props.i]['name']['last']}</h1>
            </div>
            <div className='about-container'>
            <div className='from-container'>
            <h3>From: </h3><p className='from'>{this.props.data[this.props.i]['city']}, {this.props.data[this.props.i]['country']}</p>
            </div>
            <div className='title-container'>
            <h3>Job Title: </h3> <p className='title'>{this.props.data[this.props.i]['title']}</p>
            </div>
           <div className='employer-container'>
            <h3>Employer: </h3> <p className='employer'>{this.props.data[this.props.i]['employer']}</p>
            </div>
            </div>
            <div className='movies-container'>
            <h3>Favorite Movies:</h3>
            </div>
            <div className='movies'>
                <ol>
                    <li>{this.props.data[this.props.i]['favoriteMovies'][0]}</li>
                    <li>{this.props.data[this.props.i]['favoriteMovies'][1]}</li>
                    <li>{this.props.data[this.props.i]['favoriteMovies'][2]}</li>
                </ol>
            </div>
           
        </div>
    )

}

}

export default Card