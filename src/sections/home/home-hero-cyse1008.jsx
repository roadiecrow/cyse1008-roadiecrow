import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export function HomeHeroCYSE1008() {
  const theme = useTheme();
  const [count, setCount] = useState(0);
  return (
  <>
    <div>Hello World</div>
    <Box>Hi im a button</Box>
    <Button>Hi im a button</Button>

  </>
  );
}