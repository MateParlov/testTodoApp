import React,{Component} from 'react';

class PersonalInfoForm extends Component{

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
                <h1>Personal</h1>
                <button onClick={this.handleNext}>Continue</button>
                <button onClick={this.handlePrev}>Go Back</button>
            </div>
        )
    }
}

export default PersonalInfoForm;