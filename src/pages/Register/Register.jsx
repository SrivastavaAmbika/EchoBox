import React, { useState } from 'react';
import styles from './Register.module.css';
import StepAvator from '../Steps/StepAvator/StepAvator';
import StepName from '../Steps/StepName/StepName';
import StepOtp from '../Steps/StepOtp/StepOtp';
import StepPhoneEmail from '../Steps/StepPhoneEmail/StepPhoneEmail';
import StepUserName from '../Steps/StepUserName/StepUserName';
const steps = {
    1: StepPhoneEmail,
    2: StepOtp,
    3: StepName,
    4: StepAvator,
    5:StepUserName,
}

const Register = () => {
  const [step, setStep] = useState(1);
  const Step = steps[step];
  const onNext = () => {
    setStep(step + 1);
  }
  return (
    <div><Step onNext={ onNext}/></div>
  )
}

export default Register