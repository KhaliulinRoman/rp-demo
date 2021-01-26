import React from 'react';
import { Box, Hidden, IconButton, Typography } from '@material-ui/core';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import styled from 'styled-components';

const steps: string[] = [
  'Заявка на сайте или звонок оператору',
  'Предварительная оценка стоимости недвижимости через 1 час',
  'Выезд менеджера на объект',
  'Оценка стоимости от банка через 2 дня',
  'Юридическая проверка',
];

const Stepper = styled.ul<{ step: number }>`
  display: flex;
  margin: 0;
  padding: 0;
  transform: translate(-${props => props.step * 50}%);
  transition: transform 0.3s cubic-bezier(0.4, 0, 1, 1);
  ${props => props.theme.breakpoints.up('md')} {
    transform: none;
    transition: none;
  }
`;

const Step = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
  flex: 0 0 50%;
  ${props => props.theme.breakpoints.up('md')} {
    flex: 1;
  }
  &:not(:last-of-type)::before {
    position: absolute;
    right: 0;
    bottom: 48px;
    left: 96px;
    height: 2px;
    background-color: ${props => props.theme.palette.primary.main};
    content: '';
  }
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: ${props => props.theme.palette.common.white};
  box-shadow: ${props => props.theme.shadows[2]};
`;

export const FeatureStepper: React.FC = () => {
  const [step, setStep] = React.useState(0);

  const handlePrevClick: () => void = () => {
    let newStep = step - 1;
    if (newStep < 0) {
      newStep = 0;
    }
    setStep(newStep);
  };

  const handleNextClick: () => void = () => {
    let newStep = step + 1;
    if (newStep > steps.length - 2) {
      newStep = steps.length - 2;
    }
    setStep(newStep);
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="stretch">
      <Typography variant="h4" component="h2">Продажа с RealPrice — это просто!</Typography>
      <Box mt={4} overflow="hidden">
        <Stepper step={step}>
          {steps.map((step, index) => (
            <Step key={index}>
              <Box width="90%">
                <Typography variant="body1">{step}</Typography>
              </Box>
              <Box m={1}>
                <Icon>
                  <Typography variant="h5" component="span" color="primary">{index + 1}</Typography>
                </Icon>
              </Box>
            </Step>
          ))}
        </Stepper>
      </Box>
      <Hidden mdUp>
        <Box alignSelf="flex-end">
          <IconButton onClick={handlePrevClick} disabled={step === 0}>
            <KeyboardArrowLeft fontSize="large" />
          </IconButton>
          <IconButton onClick={handleNextClick} disabled={step === steps.length - 2}>
            <KeyboardArrowRight fontSize="large" />
          </IconButton>
        </Box>
      </Hidden>
    </Box>
  );
};
