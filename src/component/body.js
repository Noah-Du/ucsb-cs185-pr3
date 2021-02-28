import React, {Component} from 'react';
import Textpage from './text';
import Imagepage from './image';
import Videopage from './video';
import Tablepage from './table';
import Emailpage from './email';


class Body extends Component {
    render(){
        var displaycontent = () => {
            var activetab = this.props.activetab;
            if(activetab===1){
                return <Textpage/>
            
            } else if (activetab===2) {
                return <Imagepage/>
            
            } else if (activetab===3) {
                return <Videopage/>
            
            } else if (activetab===4) {
                return <Tablepage/>
            
            } else if (activetab===5) {
                return <Emailpage/>
            } else {
                return <div>Welcome</div>
            }
        }
        return (displaycontent())

    }
}

export default Body;