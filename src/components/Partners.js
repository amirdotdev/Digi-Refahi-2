import * as React from 'react'
import Typography from '@mui/material/Typography'
import Image from 'mui-image'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import partnersImage from '../images/partners.png'

const Partners = () => {
  return (
    <React.Fragment>
      <Box
        width="100%"
        sx={{
          backgroundColor: '#E7F2F9',
          paddingRight: '24px',
          paddingLeft: '24px',
        }}
      >
        <Container maxWidth="xl">
          <Box
            sx={{
              paddingTop: '46px',
            }}
          >
            <Typography
              component="h2"
              variant="h3"
              textAlign="center"
              sx={{
                fontSize: '30px',
                fontFamily: 'IRANSans',
                fontWeight: 700,
                color: ' #16255B',
              }}
            >
              سازمان‌هایی که همکاری با دیجی رفاهی را انتخاب کرده‌اند
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Image
                src={partnersImage}
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                }}
              />
            </Box>
          </Box>
        </Container>
      </Box>
    </React.Fragment>
  )
}

export default Partners
