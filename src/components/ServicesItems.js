import * as React from 'react'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Image from 'mui-image'
import Typography from '@mui/material/Typography'
import serviceItemImage from '../images/eywr-01 1.png'
import sittingManImage from '../images/vdav-02 1.png'
import ServicesItem from './ServicesItem'

const items_1 = [
  'با چند کلیک فرایند طراحی خدمات را به زبان سازمان شما پیاده سازی می‌کنیم',
  'اثربخش‌ترین برنامه‌‌های رفاهی را برای کارمندان شما پیشنهاد می‌کنیم',
  ' با نظرسنجی از پرسنل، نزدیک‌ترین گزینه‌ها به نیازهایشان را معرفی می‌کنیم',
  ' رضایت کارمندان شما را با داشبوردهای گزارشی به اطلاعتان می‌رسانیم',
]

const items_2 = [
  'یک داشبورد شخصی ارائه می‌دهیم که در آن خدمات رفاهی برای انتخاب وجود دارند',
  ' خدمات رفاهی گروهی و فردی معرفی می‌کنیم تا با توجه به سلیقه و نیاز انتخاب کنند',
  ' برنامه‌های تفریحی و رفاهی مختلفی برای خانواده های همکاران ارائه می‌کنیم',
]

const ServicesItems = () => {
  return (
    <React.Fragment>
      <Box sx={{ backgroundColor: '#f5f5f5', paddingX: '31px' }} pb={9}>
        <Container maxWidth="xl">
          <Box sx={{ display: 'flex', paddingTop: '126.35px' }}>
            <Box>
              <ServicesItem
                title="ما به سازمان ها چه کمکی می کنیم؟"
                items={items_1}
              />
              <ServicesItem
                title="ما به کارمندان چه کمکی می کنیم؟"
                items={items_2}
                style={{ marginTop: '35px' }}
              />
            </Box>
            <Box sx={{ position: 'relative' }}>
              <img
                src={serviceItemImage}
                alt="service item"
                width="400px"
                height="600px"
                style={{
                  objectFit: 'cover',
                  position: 'absolute',
                  right: '100px',
                  top: '-100px',
                }}
              />
              <img
                src={sittingManImage}
                alt="sitting man"
                width="600px"
                style={{
                  width: '600px',
                  height: '400px',
                  objectFit: 'contain',
                  top: '100px',
                  right: '300px',
                  position: 'absolute',
                  overflow: 'hidden',
                }}
              />
            </Box>
          </Box>
        </Container>
      </Box>
    </React.Fragment>
  )
}

export default ServicesItems
