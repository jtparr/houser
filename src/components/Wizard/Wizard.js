import React, {Component} from 'react';
import {Route} from 'react-router-dom'
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';

class Wizard extends Component {
    render () {
        return (
           <div>
               <Route path='/wizard/step1' component={StepOne}/>
               <Route path='/wizard/step2' component={StepTwo}/>
               <Route path='/wizard/step3' component={StepThree}/>
            </div>
        )
    }
}

export default Wizard;