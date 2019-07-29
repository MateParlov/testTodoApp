import React,{Component} from 'react';

class Success extends Component{

    handlePrev=e=>{
        e.preventDefault();
        this.props.prevStep();
    }
    render(){
        return(
            <div>
                <h1>Form successfuly submited!!</h1>
                <button onClick={this.handlePrev}>Go Back</button>
            </div>
        )
    }
    
}

export default Success;