import { Button, Typography } from '@mui/material/';

function App() {
  return (
    <div className='App'>
      <h1>Material UI</h1>
      <Typography sx={{ color: 'red', fontSize: 40, fontWeight: 'bold' }}>
        Hello World
      </Typography>
      <Button sx={{ boxShadow: 5 }} variant='outlined' color='primary'>
        First Button
      </Button>
      <Button variant='text'>Text</Button>
      <Button variant='contained'>Contained</Button>
      <Button variant='outlined'>Outlined</Button>
    </div>
  );
}

export default App;
