import * as React from 'react'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Image from 'mui-image'
import logo from '../images/Logo FA 3 (1).png'
import textLogo from '../images/Text-logo.png'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import classes from './footer.module.css'
console.log(classes.icon)

const Footer = () => {
  return (
    <React.Fragment>
      <Box sx={{ paddingX: '80px' }}>
        <Stack direction="row" sx={{ marginBottom: '3.1rem' }}>
          <Image src={logo} width="77px" height="86px" />
          <Image src={textLogo} width="207px" height="77px" />
        </Stack>
        <Stack direction="row">
          <Box sx={{ maxWidth: '465px' }}>
            <Typography
              component="h5"
              sx={{
                fontFamily: 'IRANSans',
                fontSize: '2.5rem',
                fontWeight: 900,
                color: '#16255B',
                marginBottom: '2rem',
              }}
            >
              درباره ما
            </Typography>
            <Typography
              sx={{
                fontFamily: 'IRANSans,sans-serif',
                fontSize: '18px',
                fontWeight: 500,
                color: '#0877BD',
                lineHeight: '2rem',
              }}
            >
              شرکت توسعه تجارت پایدار نوآفرین (ثبت 546468) ، از سال 1398 با
              تمرکز بر تامین کالا و خدمات، بعنوان بازوی ارائه دهده خدمات رفاهی و
              فروشگاه سازمانی در حال خدمت رسانی به شرکتها و سازمان های مختلف می
              باشد. تامین سریع و با کیفیت کالا و خدمات، درکنار تفکر طراحی
              نوآورانه خدمات، را باید خط مشی کلیدی شرکت توسعه تجارت پایدار
              نوآفرین دانست.
            </Typography>
          </Box>
          <Box sx={{ marginLeft: '187px' }}>
            <Typography
              component="h5"
              sx={{
                fontFamily: 'IRANSans',
                fontSize: '2.5rem',
                fontWeight: 900,
                color: '#16255B',
                marginBottom: '2rem',
              }}
            >
              لینک ها مفید
            </Typography>
            <Stack justifyContent="space-between" spacing={3.4}>
              <Typography
                sx={{
                  fontFamily: 'IRANSans,sans-serif',
                  fontSize: '18px',
                  fontWeight: 500,
                  color: '#0877BD',
                }}
              >
                <Link href="#" sx={{ textDecoration: 'none' }}>
                  دریافت دمو
                </Link>
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'IRANSans,sans-serif',
                  fontSize: '18px',
                  fontWeight: 500,
                  color: '#0877BD',
                }}
              >
                <Link href="#" sx={{ textDecoration: 'none' }}>
                  خدمات اخبار
                </Link>
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'IRANSans,sans-serif',
                  fontSize: '18px',
                  fontWeight: 500,
                  color: '#0877BD',
                }}
              >
                <Link href="#" sx={{ textDecoration: 'none' }}>
                  شرایط همکاری
                </Link>
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'IRANSans,sans-serif',
                  fontSize: '18px',
                  fontWeight: 500,
                  color: '#0877BD',
                }}
              >
                <Link href="#" sx={{ textDecoration: 'none' }}>
                  همکاری با تامین کنندگان{' '}
                </Link>
              </Typography>
            </Stack>
          </Box>
          <Box sx={{ marginLeft: '187px' }}>
            <Typography
              component="h5"
              sx={{
                fontFamily: 'IRANSans',
                fontSize: '2.5rem',
                fontWeight: 900,
                color: '#16255B',
                marginBottom: '2rem',
              }}
            >
              تماس با ما{' '}
            </Typography>
            <Stack justifyContent="space-between" spacing={3.4}>
              <Typography
                sx={{
                  fontFamily: 'IRANSans,sans-serif',
                  fontSize: '18px',
                  fontWeight: 500,
                  color: '#0877BD',
                }}
              >
                نشانی ما : تهران - خیابان فاطمی غربی -{' '}
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'IRANSans,sans-serif',
                  fontSize: '18px',
                  fontWeight: 500,
                  color: '#0877BD',
                }}
              >
                تقاطع سیندخت شماره 232{' '}
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'IRANSans,sans-serif',
                  fontSize: '18px',
                  fontWeight: 500,
                  color: '#0877BD',
                }}
              >
                شماره تماس :‌ 66917905-021{' '}
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'IRANSans,sans-serif',
                  fontSize: '18px',
                  fontWeight: 500,
                  color: '#0877BD',
                }}
              >
                آدرس ایمیل : info@digirefahi.com{' '}
              </Typography>
            </Stack>
          </Box>
        </Stack>
        <Box mt={5.5} mb={4.1}>
          <Stack direction="row" justifyContent="center" spacing={3.5}>
            <Link href="#">
              <FacebookIcon className={classes.icon} />
            </Link>
            <Link href="#">
              <TwitterIcon className={classes.icon} />
            </Link>
            <Link href="#">
              <LinkedInIcon className={classes.icon} />
            </Link>
            <Link href="#">
              <InstagramIcon className={classes.icon} />
            </Link>
          </Stack>
        </Box>
      </Box>
    </React.Fragment>
  )
}

export default Footer
