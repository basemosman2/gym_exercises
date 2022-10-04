import React , {useState} from 'react';
import Exercises from '../components/Exercises';
import HeroBanner from '../components/HeroBanner';
import SearchExercise from '../components/SearchExercise';
import { Box } from '@mui/material';


const Home = () => {
  return (
    <Box>
      <HeroBanner/>
      <SearchExercise/>
      <Exercises/>
    </Box>
  )
}

export default Home;