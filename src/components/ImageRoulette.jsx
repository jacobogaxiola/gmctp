import * as React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';


const paperStyle={padding:20, height: '20', width: 280, margin: "20px auto"}

const steps = [
  {
    label: 'Parachoques',
    imgPath: 
      'https://www.regiologistics.com/wp-content/uploads/2020/01/parachoques-1024x576.jpg',
  },
  {
    label: 'Motor',
    imgPath: 'https://www.regiologistics.com/wp-content/uploads/2020/01/Motor-1024x576.jpg',
  },
  {
    label: 'Llantas',
    imgPath: 'https://www.regiologistics.com/wp-content/uploads/2020/01/Llantas-1024x576.jpg',
  },
  {
    label: 'Piso del Camión',
    imgPath: 'https://www.regiologistics.com/wp-content/uploads/2020/01/Piso-dentro-del-camio%CC%81n-1024x576.jpg',
  },
  {
    label: 'Tanque de Gasolina',
    imgPath: 'https://www.regiologistics.com/wp-content/uploads/2020/01/tanque-de-gasolina-1024x576.jpg',
  },
];

export default function TextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    
    <Paper style={paperStyle}>
    <Box sx={{ maxWidth: 500, flexGrow: 1, maxHeight: 400 }}>
      
    <Paper 
      square
      elevation={0}
      sx={{
        display: 'flex',
        alignItems: 'center',
        height: 50,
        pl: 2,
        bgcolor: 'background.default',
      }}
      >
        <Typography>{steps[activeStep].label}</Typography>
      </Paper>
      <Box sx={{ height: 200, maxWidth: 350, width: '100%', p: 2 }}>
        <img
          src={steps[activeStep].imgPath} 
          alt={steps[activeStep].label} 
          style={{ maxWidth: '100%', maxHeight: '100%', display: 'block', margin: 'auto' }} 
        />
      </Box>
      <MobileStepper
        variant="img"
        steps={maxSteps}
        position="center"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box></Paper>
  );
}