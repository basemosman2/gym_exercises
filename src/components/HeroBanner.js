import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import '../style/global.css';

import heroBannerImg from '../assets/images/banner.png';
import { fontSize } from "@mui/system";

const HeroBanner = () => {
    return (
        <Box
        sx={{
            mt: { lg: "212px", xs: "70px" },
            ml: { sm: "50px" },
        }}
        position="relative"
        p="20px"
        >
            <Typography color="#ff2625" fontSize="26px" fontWeight="600">
                Fitness club
            </Typography>
            <Typography
                fontWeight="700"
                sx={{
                fontSize: { lg: "44px", sm: "38px" },
                my:'12px'
                }}
            >
                Sweat, Smile <br /> and Repeat
            </Typography>
            <Typography fontSize="22px" lineHeight="35px" mb='5px'>
                Check out the most effective exercises
            </Typography>
            <Button href="#exercises" variant="contained" 
            sx={{
                backgroundColor:'#ff2625', 
                "&:hover":{backgroundColor:'#d84544'},
                my:'15px'
            }}
            className='heroBannerBtn'>Explore Exercises</Button>
            <Typography fontWeight='700' sx={{
                fontSize:'200px', 
                color:'#ff2625', 
                opacity:0.2,
                display:{lg:'block', xs:'none'},
                }}>
                Exercises
            </Typography>
            <img src={heroBannerImg} alt="bannerImage"  className="hero-banner-img"/>
        </Box>
    );
};

export default HeroBanner;
