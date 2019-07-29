import React,{Component} from 'react';

class Confirm extends Component{

    handleNext=e=>{
        e.preventDefault();
        this.props.nextStep();
    }
    handlePrev=e=>{
        e.preventDefault();
        this.props.prevStep();
    }
    render(){
        return(
            <div>
                <ul>
                    <li>Name: bla bla</li>
                    <li>Name: bla bla</li>
                    <li>Name: bla bla</li>
                </ul>
                <button onClick={this.handleNext}>Confirm</button>
                <button onClick={this.handlePrev}>Go Back</button>
            </div>
        )
    }
}

export default Confirm;