import * as React from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Image from 'mui-image'
import heroImage from '../images/srgsff-01 1 (1).png'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

const Hero = () => {
  return (
    <React.Fragment>
      <Container maxWidth="xl">
        <Grid container sx={{ paddingX: '31px', paddingTop: '74px' }}>
          <Grid item xs={5}>
            <Typography
              component="h1"
              color="#16255B"
              mb={3.2}
              sx={{
                fontFamily: 'IRANSans',
                fontWeight: 700,
                fontStyle: 'normal',
                fontSize: '40px',
              }}
            >
              برنامه های رفاهی متنوع، یکپارچه با نیازهای سازمان شما
            </Typography>
            <Typography
              variant="subtitle2"
              color="#0877BD"
              sx={{
                fontFamily: 'IRANSans,sans-serif',
                fontSize: '18px',
                fontStyle: 'normal',
                fontWeigth: '400',
                textAlign: 'center',
                width: '419px',
              }}
            >
              ما تامین و ارائه خدمات رفاهی در سطح سازمان شما را با تعهد به
              افزایش رضایت کارکنان، از همیشه ساده تر می کنیم
            </Typography>
            <Box pt={16}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#d4d4d4',
                  borderRadius: '20px 20px 20px 0',
                  color: '#0877BD',
                  fontWeight: 900,
                  fontFamily: 'IRANSans,sans-sarif',
                  fontSize: '20px',
                  paddingX: 4,
                  paddingY: 1,
                }}
              >
                کارمند هستم
              </Button>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#F7C906',
                  borderRadius: '20px 20px 20px 0',
                  color: '#16255B',
                  fontWeight: 900,
                  fontFamily: 'IRANSans,sans-sarif',
                  fontSize: '20px',
                  paddingX: 4,
                  paddingY: 1,
                  marginLeft: 3.8,
                }}
              >
                کارفرما هستم
              </Button>
            </Box>
          </Grid>
          <Grid item xs={7}>
            <Image
              src={heroImage}
              height="650px"
              sx={{ top: '-90px', right: '12px' }}
            />
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  )
}

export default Hero
