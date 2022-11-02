import * as React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'

const CustomerCard = (props) => {
  return (
    <React.Fragment>
      <Card
        sx={{
          fontFamily: 'IRANSans,sans-serif',
          width: '325px',
          borderRadius: '20px 20px 20px 0px',
          marginRight: '60px',
        }}
      >
        <Box
          sx={{
            backgroundColor: '#fff',
            padding: '0.2rem',
            borderRadius: '50%',
          }}
        >
          <CardMedia
            component="img"
            image={props.customerImage}
            sx={{
              objectFit: 'contain',
              width: '80px',
              height: '80px',
              borderRadius: '50%',
            }}
            alt="customer 1"
          ></CardMedia>
        </Box>
        <CardContent>
          <Typography
            component="h5"
            sx={{
              fontSize: '20px',
              fontWeight: 700,
              color: '#063775',
              fontFamily: 'inherit',
              marginBottom: '0.3rem',
            }}
          >
            {props.customerName}
          </Typography>
          <Typography
            component="subtitle1"
            sx={{
              fontFamily: 'inherit',
              fontWeight: 500,
              fontSize: '12px',
              color: ' #063775B2',
              marginBottom: '0.5rem',
              display: 'block',
            }}
          >
            {props.customerJob}
          </Typography>
          <Typography
            component="p"
            sx={{
              fontFamily: 'inherit',
              fontSize: '14px',
              fontWeight: 400,
              color: '#063775',
            }}
          >
            {props.customerComment}
          </Typography>
        </CardContent>
      </Card>
    </React.Fragment>
  )
}

export default CustomerCard
