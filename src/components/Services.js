import * as React from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import travelImage from '../images/travel.png'
import medicalImage from '../images/medical.png'
import sportImage from '../images/sport.png'
import shoppingImage from '../images/shopping.png'
import { styled } from '@mui/material/styles'

const Services = () => {
  return (
    <React.Fragment>
      <Box sx={{ backgroundColor: ' #56A8D6', paddingX: '30px' }}>
        <Container maxWidth="xl" sx={{ display: 'flex' }}>
          <Box
            sx={{
              paddingRight: '46px',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontSize: '50px',
                fontFamily: 'IRANSans',
                color: '#fff',
                fontWeight: 700,
                width: '252px',
                verticalAlign: 'middle',
              }}
            >
              خدمات دیجی رفاهی
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexGrow: 1,
              justifyContent: 'space-between',
              paddingY: '46px',
              flexWrap: 'wrap',
            }}
          >
            <Card
              sx={{
                borderRadius: '30px',
                backgroundColor: '#fff',
                paddingX: '33px',
                textAlign: 'center',
              }}
            >
              <CardMedia
                component="img"
                image={travelImage}
                alt="travel"
              ></CardMedia>
              <CardContent>
                <Typography
                  color=" #063775"
                  sx={{
                    fontFamily: 'IRANSans',
                    fontSize: '22px',
                    fontWeight: 700,
                  }}
                >
                  گردشگری و سفر
                </Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                borderRadius: '30px',
                backgroundColor: '#fff',
                paddingX: '33px',
                textAlign: 'center',
              }}
            >
              <CardMedia
                component="img"
                image={medicalImage}
                alt="travel"
              ></CardMedia>
              <CardContent>
                <Typography
                  color=" #063775"
                  sx={{
                    fontFamily: 'IRANSans',
                    fontSize: '22px',
                    fontWeight: 700,
                  }}
                >
                  درمانی و بیمه
                </Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                borderRadius: '30px',
                backgroundColor: '#fff',
                paddingX: '33px',
                textAlign: 'center',
              }}
            >
              <CardMedia
                component="img"
                image={sportImage}
                alt="travel"
              ></CardMedia>
              <CardContent>
                <Typography
                  color=" #063775"
                  sx={{
                    fontFamily: 'IRANSans',
                    fontSize: '22px',
                    fontWeight: 700,
                  }}
                >
                  خدمات ورزشی
                </Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                borderRadius: '30px',
                backgroundColor: '#fff',
                paddingX: '33px',
                textAlign: 'center',
              }}
            >
              <CardMedia
                component="img"
                image={travelImage}
                alt="travel"
              ></CardMedia>
              <CardContent>
                <Typography
                  color=" #063775"
                  sx={{
                    fontFamily: 'IRANSans',
                    fontSize: '22px',
                    fontWeight: 700,
                  }}
                >
                  سبد کالا و ارزاق
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Container>
      </Box>
    </React.Fragment>
  )
}

export default Services
