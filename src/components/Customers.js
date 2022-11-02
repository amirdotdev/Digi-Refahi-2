import * as React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CustomerCard from './CustomerCard'
import customerImage1 from '../images/customer1.png'
import customerImage2 from '../images/customer2.png'
import customerImage3 from '../images/customer3.png'

const Customers = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#E7F2F9',
        paddingTop: '66px',
        paddingBottom: '80px',
      }}
    >
      <Typography
        sx={{
          fontFamily: 'IRANSans,sans-serif',
          fontWeight: 700,
          fontSize: '30px',
          textAlign: 'center',
          color: '#0877BD',
          marginBottom: '60px',
        }}
      >
        مشتریان درباره ما چه می گویند؟
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <CustomerCard
          customerName="ملیکا قاسمی"
          customerJob="مدیر منابع انسانی بیمارستان نیکان"
          customerComment="با دیجی رفاهی، کارمندان سازمان من رضایت بیشتری از سازمان پیدا کرده اند و نرخ قطع همکاری 12% کاهش یافته است."
          customerImage={customerImage1}
        />
        <CustomerCard
          customerName="امیر تقوی"
          customerJob="مدیر عامل ساعی"
          customerComment="طیف متنوع خدمات دیجی رفاهی، کمک میکند که بودجه رفاهی سازمان به نحو احسن مورد استفاده قرار گیرد."
          customerImage={customerImage2}
        />
        <CustomerCard
          customerName="حمید خاکسار"
          customerJob="مدیر عامل تیوان"
          customerComment="در طی مدت همکاری با دیجی رفاهی، با صرف هزینه کمتر به رضایت بخشی بیشتری در ارائه خدمات رفاهی رسیدیم."
          customerImage={customerImage3}
        />
      </Box>
    </Box>
  )
}

export default Customers
