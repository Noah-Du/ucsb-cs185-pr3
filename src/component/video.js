import React, {Component} from 'react';

import v1 from './sources/v1.mp4'
import v2 from './sources/v2.mp4'
import v3 from './sources/v3.mp4'
import v4 from './sources/v4.mp4'


import './style.css';


class Videopage extends Component {
    constructor(){
        super();
        this.state = {
            active: false,
            modalVid: '',
            modalDisplay: 'none'
        };
    }

    clickVid(vid){
        //console.log("clckImg");
        this.setState({modalVid: vid,
            modalDisplay: 'flex',
            active: true
        });
    }

    closeVid(){
        this.setState({modalDisplay: 'none'});
    }
    render(){

        //var modalImg = (<img  class="modal-content" id='currentImg'></img>);
        
        return (
            <div>
                <body>
                    <div className="grid-container">
                        <div className="grid-item"><video width="320" onClick={(e)=>this.clickVid(v1)} src={v1}></video></div>
                        <div className="grid-item"><video width="320" onClick={(e)=>this.clickVid(v2)} src={v2}></video></div>
                        <div className="grid-item"><video width="320" onClick={(e)=>this.clickVid(v3)} src={v3}></video></div>
                        <div className="grid-item"><video width="320" onClick={(e)=>this.clickVid(v4)} src={v4}></video></div>


                        
                    </div>

                    <div className="modal" id="myModal" style={{display:this.state.modalDisplay}} onClick={(e)=>this.closeVid()}>
                        <video class="modal-content-vid" id='currentImg' src={this.state.modalVid} controls={this.state.active} autoplay={this.state.active} paused={!this.state.active}></video>
                    </div>
                </body>
            </div>
            
            
        )
    }
}

export default Videopage;