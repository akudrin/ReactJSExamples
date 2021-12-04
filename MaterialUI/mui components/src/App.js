import { Paper, Typography } from '@mui/material';
import ButtonSizes from './components/ButtonSizes';
import IconButtonColors from './components/IconButtonColors';
import IconButtons from './components/IconButtons';
import SimplePaper from './components/SimplePaper';

function App() {
  return (
    <div>
      <IconButtonColors /> <IconButtons /> <ButtonSizes />
      <Typography variant='h1' color='primary'>
        Hello World
      </Typography>
      <SimplePaper />
    </div>
  );
}

export default App;
