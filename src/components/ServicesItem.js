import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'

const ServicesItem = (props) => {
  return (
    <React.Fragment>
      <Box style={props.style}>
        <Typography
          color="#16255B"
          sx={{
            fontFamily: 'IRANSans,sans-serif',
            fontSize: '28px',
            fontWeight: 700,
          }}
        >
          {props.title}
        </Typography>
        <List>
          {props.items.map((item) => {
            return (
              <ListItem
                sx={{
                  fontFamily: 'IRANSans,sans-serif',
                  fontSize: '18px',
                  fontWeight: 500,
                  color: '#0877BD',
                }}
                key={item}
              >
                {item}
              </ListItem>
            )
          })}
        </List>
      </Box>
    </React.Fragment>
  )
}

export default ServicesItem
