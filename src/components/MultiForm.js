import React,{Component} from 'react';
import BasicInfoForm from './BasicInfoForm';
import PersonalInfoForm from './PersonalInfoForm';
import Success from './Success';
import Confirm from './Confirm';
import './MultiForm.css';
class MultiForm extends Component{
    constructor(props){
        super(props);
        this.state={
            stage:1,
            firstName:'',
            lastName:'',
            email:'',
            bio:'',
            city:'',
            occupation:''

        }
        this.nextStep=this.nextStep.bind(this);
        this.prevStep=this.prevStep.bind(this);
        this.changeInput=this.changeInput.bind(this);
    }
    nextStep(){
        this.setState((st)=>{
            return{stage:st.stage+1}
        })
    }
    prevStep(){
        this.setState((st)=>{
            return{stage:st.stage -1 }
        })
    }
    changeInput(e){
        this.setState({[e.target.name]:e.target.value});
    }
    render(){
        const stage=this.state.stage;
        const {firstName,lastName,email,bio,city,occupation}=this.state;
        const values={firstName,lastName,email,bio,city,occupation};
        switch(stage){
            case 1:
                return(
                    <div className='MultiForm'>
                    <BasicInfoForm 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    changeInput={this.changeInput}
                    values={values}
                    /></div>
                );
            case 2:
                return(
                    <PersonalInfoForm 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}/>
                );
            case 3:
                return(
                    <Confirm 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}/>
                );
            case 4:
                return(
                    <Success
                    nextStep={this.nextStep}
                    prevStep={this.prevStep} />
                )
        }
    }
}

export default MultiForm;