import * as React from 'react'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Box from '@mui/material/Box'

const NewsCard = (props) => {
  return (
    <React.Fragment>
      <Box
        sx={{
          width: '325px',
          cursor: 'pointer',
          backgroundColor: '#0877BD',
          '&:hover': { backgroundColor: '#3398CE' },
          borderRadius: '32px 32px 0 0',
        }}
      >
        <CardMedia component="img" image={props.image} alt="news image " />
        <CardContent
        // sx={{
        //   backgroundColor: '#0877BD',
        //   '&:hover': { backgroundColor: '#3398CE' },
        // }}
        >
          <Typography
            component="h3"
            color="#fff"
            sx={{
              fontSize: '18px',
              fontWeight: 700,
              fontFamily: 'IRANSans,sans-serif',
              marginTop: '23px',
              paddingBottom: '1rem',
            }}
          >
            {props.title}
          </Typography>
          <Typography
            color="#fff"
            sx={{
              fontFamily: 'IRANSans',
              fontSize: '14px',
              fontWeight: 400,
            }}
            paragraph
          >
            {props.content}
          </Typography>
        </CardContent>
      </Box>
    </React.Fragment>
  )
}

export default NewsCard
