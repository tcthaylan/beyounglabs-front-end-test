import React from 'react';
import { TStepper } from './types';
import { Circle } from '../Circle/Circle';
import classes from './Stepper.module.scss';

export function Stepper({ steps, currentStep }: TStepper) {
  const getCurrentStepIndex = () => {
    const currentStepIndex = steps.findIndex(step => step === currentStep);
    return currentStepIndex;
  };

  const renderSteps = () => {
    return steps.map((step, index) => {
      const isActive = getCurrentStepIndex() >= index;
      return (
        <div key={index} className={classes.stepItem}>
          <Circle isActive={isActive} />
          <p className={classes.name}>{step}</p>
        </div>
      );
    });
  };

  return <div>{renderSteps()}</div>;
}
