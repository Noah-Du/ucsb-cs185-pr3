import React, {Component} from 'react';
import i1 from './sources/i1.png';
import i2 from './sources/i2.JPG';
import i3 from './sources/i3.JPG';
import i4 from './sources/i4.JPG';
import i5 from './sources/i5.JPG';
import i6 from './sources/i6.JPG';
import i7 from './sources/i7.JPG';
import i8 from './sources/i8.JPG';
import i9 from './sources/i9.JPG';

import './style.css';


class Imagepage extends Component {
    constructor(){
        super();
        this.state = {
            active: false,
            modalImg: '',
            modalDisplay: 'none'
        };
    }

    clickImg(image){
        this.setState({modalImg: image,
            modalDisplay: 'flex'
        });
    }

    closeImg(){
        this.setState({modalDisplay: 'none'});
    }
    render(){

        
        return (
            <div>
                <body>
                    <div className="grid-container">
                        <div className="grid-item"><img className="grid-image" onClick={(e)=>this.clickImg(i1)} src={i1}></img></div>
                        <div className="grid-item"><img className="grid-image" onClick={(e)=>this.clickImg(i2)} src={i2}></img></div>
                        <div className="grid-item"><img className="grid-image" onClick={(e)=>this.clickImg(i3)} src={i3}></img></div>
                        <div className="grid-item"><img className="grid-image" onClick={(e)=>this.clickImg(i4)} src={i4}></img></div>
                        <div className="grid-item"><img className="grid-image" onClick={(e)=>this.clickImg(i5)} src={i5}></img></div>
                        <div className="grid-item"><img className="grid-image" onClick={(e)=>this.clickImg(i6)} src={i6}></img></div>
                        <div className="grid-item"><img className="grid-image" onClick={(e)=>this.clickImg(i7)} src={i7}></img></div>
                        <div className="grid-item"><img className="grid-image" onClick={(e)=>this.clickImg(i8)} src={i8}></img></div>
                        <div className="grid-item"><img className="grid-image" onClick={(e)=>this.clickImg(i9)} src={i9}></img></div>

                    </div>

                    <div className="modal" id="myModal" style={{display:this.state.modalDisplay}} onClick={(e)=>this.closeImg()}>
                        <img  class="modal-content" id='currentImg' src={this.state.modalImg}></img>
                    </div>
                </body>
            </div>
            
            
        )
    }
}

export default Imagepage;