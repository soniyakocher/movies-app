import React, { Component } from 'react'
import Header from '../../common/header/Header'
import Home from '../home/Home'
import ReactDOM from 'react-dom'
import Typography from '@material-ui/core/Typography'
import './BookShow.css'
 class BookShow extends Component {

    backtohomeHandler =( ) => {
        ReactDOM.render (<Home/>, document.getElementById('root'))
    }
    render() {
        return (
            <div>
                <Header/>
                <div className="bookShow" > 
                    <Typography className="back" onClick={this.backtohomeHandler}>
                    &#60; Back to Home
                    </Typography>
                </div>
            </div>
        )
    }
}

export default BookShow
