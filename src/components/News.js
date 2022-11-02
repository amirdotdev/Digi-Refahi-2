import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import NewsCard from './NewsCard'
import newsImage1 from '../images/news-image-1.png'
import newsImage2 from '../images/news-image-2.png'
import newsImage3 from '../images/news-image-3.png'

const news = [
  {
    title: 'آخرین خبر شماره یک',
    image: newsImage1,
    content:
      'خلاصه خبر به این شرح است. خلاصه خبر به این شرح است. خلاصه خبر به این شرح است.',
  },
  {
    title: 'آخرین خبر شماره دو',
    image: newsImage2,
    content:
      'خلاصه خبر به این شرح است. خلاصه خبر به این شرح است. خلاصه خبر به این شرح است.',
  },
  {
    title: 'آخرین خبر شماره سه',
    image: newsImage3,
    content:
      'خلاصه خبر به این شرح است. خلاصه خبر به این شرح است. خلاصه خبر به این شرح است.',
  },
]
const News = () => {
  return (
    <React.Fragment>
      <Box
        sx={{
          backgroundColor: '#F5F5F5',
          paddingX: '80px',
          paddingTop: '58px',
          paddingBottom: '10rem',
        }}
      >
        <Typography
          component="h3"
          sx={{
            color: '#16255C',
            fontWeight: 700,
            fontFamily: 'IRANSans',
            fontSize: '30px',
            marginBottom: '5rem',
          }}
        >
          آخرین اخبار
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: '8rem' }}>
          {news.map((item) => {
            return (
              <NewsCard
                title={item.title}
                image={item.image}
                content={item.content}
                key={item.title}
              />
            )
          })}
        </Box>
      </Box>
    </React.Fragment>
  )
}

export default News
