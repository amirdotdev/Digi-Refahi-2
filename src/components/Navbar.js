import * as React from 'react'
import { createTheme, ThemeProvider } from '@mui/material'
import logo from '../images/Logo FA 3 (1).png'
import logoText from '../images/Logo FA 4.jpg'
import diamondImage from '../images/diamond 1.png'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import CardMedia from '@mui/material/CardMedia'
import Link from '@mui/material/Link'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Image from 'mui-image'

const links = ['ثبت نام', 'ورود', 'خدمات', 'اخبار']

const theme = createTheme({
  components: {
    Container: {
      defaultProps: {
        paddingX: '80px',
      },
    },
  },
})

const Navbar = () => {
  return (
    <React.Fragment>
      <AppBar elevation={0} sx={{ position: 'relative' }}>
        <Toolbar
          sx={{ backgroundColor: '#f5f5f5', height: '85px', paddingX: '50px' }}
        >
          <Container maxWidth="xl">
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                verticalAlign: 'middle',
                textAlign: 'center',
              }}
            >
              <Image
                src={logo}
                height="42px"
                width="42px"
                style={{ top: '-3px' }}
              />
              <Box>
                <Typography
                  sx={{
                    fontFamily: 'IRANSans,sans-serif',
                    color: '#16255B',
                    fontSize: '30px',
                    fontWeight: 900,
                    marginLeft: '7px',
                    verticalAlign: 'middle',
                  }}
                >
                  دیجی رفاهی
                </Typography>
              </Box>

              {/* <Image
                src={logoText}
                width="148px"
                height="42px"
                style={{ top: '-5px' }}
              /> */}
              {links.map((link) => {
                return (
                  <Link
                    key={link}
                    underline="none"
                    color="#0877BD"
                    ml={5}
                    sx={{
                      fontFamily: 'IRANSans,sans-serif',
                      fontSize: '18px',
                      fontWeight: 700,
                      cursor: 'pointer',
                      paddingTop: '7px',
                    }}
                  >
                    {link}
                  </Link>
                )
              })}
              <Box
                sx={{
                  color: 'red',
                  flexGrow: 1,
                  display: 'flex',
                  justifyContent: 'flex-end',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    border: '3px solid gold',
                    borderRadius: '20px 20px 20px 0px',
                    paddingX: '2rem',
                    paddingY: '0.5rem',
                    cursor: 'pointer',
                  }}
                >
                  <Image
                    src={diamondImage}
                    width="22px"
                    height="22px"
                    style={{ top: '2px' }}
                  />
                  <Typography
                    variant="h6"
                    ml="24px"
                    color=" #16255B;"
                    sx={{
                      fontFamily: 'IRANSans,sans-serif',
                      fontSize: '18px',
                      fontWeight: 700,
                      fontStyle: 'normal',
                    }}
                  >
                    دموی رایگان
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Container>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  )
}

export default Navbar
