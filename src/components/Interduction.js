import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Image from 'mui-image'
import Stack from '@mui/material/Stack'
import videoImage from '../images/videoImage.png'
import playButttonImage from '../images/play-button.png'
import manLookingUpImage from '../images/man-looking-up.png'

const Interduction = () => {
  return (
    <React.Fragment>
      <Box sx={{ paddingX: '10rem', paddingTop: '8.2rem' }}>
        <Stack direction="row" spacing="76px">
          <Typography
            sx={{
              fontFamily: 'IRANSans,sans-serif',
              fontWeight: 700,
              fontSize: '40px',
              color: '#16255B',
              minWidth: '490px',
              paddingTop: '20px',
            }}
          >
            دیجی رفاهی را بیشتر بشناسید
          </Typography>
          <Box
            sx={{
              border: '5px solid #F7C906',
              borderRadius: '50px 50px 50px 0',
              paddingX: '74px',
              paddingTop: '43px',
              paddingBottom: '59px',
              minWidth: '740px',
              zIndex: -2,
            }}
          >
            <Typography
              sx={{
                fontSize: '20px',
                fontFamily: 'IRANSans,sans-serif',
                fontWeight: 500,
                color: '#16255B',
              }}
            >
              دیجی رفاهی یک جعبه‌ ابزار مدرن برای مدیران منابع انسانی است که با
              ثبت‌نام در این سرویس، می‎توانید بسته‌های مختلف خدمات رفاهی را به
              صورتی کارآمد و منظم برای هر یک از نیروهای خود طراحی و تامین کنید.
              این بسته‌ها با توجه به نوع سازمان، بودجه و البته نیازهای ویژه
              کارمندان شما طراحی می‎شوند تا رضایت آن‌ها را از محیط کارشان بالا
              ببرند.
            </Typography>
          </Box>
        </Stack>
        <Box>
          <Box>
            <Image
              src={videoImage}
              width="819px"
              height="100%"
              sx={{ top: '-50px' }}
              alt="videoImage"
            />
            <Image
              src={playButttonImage}
              width="55.05px"
              height="56px"
              sx={{ top: '-290px', left: '370px', cursor: 'pointer' }}
              alt="playButtonImage"
            />
          </Box>
          <Box sx={{ position: 'relative' }}>
            <img
              src={manLookingUpImage}
              alt="man looking up"
              style={{
                position: 'absolute',
                top: '-740px',
                left: '-150px',
                zIndex: -1,
              }}
            />
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  )
}

export default Interduction
