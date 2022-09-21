import { Box, Typography, Container, Grid, Card } from '@material-ui/core'
import React, { useState } from 'react'
import useStyles from '../MakeStyle'
import { ArrowRightAlt } from '@material-ui/icons'
import collectData from '../DataFile/PopularCollection'
const PopularCollect = () => {
const classes = useStyles()
const [allData,setAllData] = useState(collectData)
  return (
    <>
        <Box style={{margin:"50px 0px"}}>
            <Container>
                <Typography variant="body1" className={classes.line}><span>Most Popular</span></Typography>
                <Box className={classes.spaceBetween}>
                <Typography variant="h2" style={{padding:"15px 0px"}}>Popular Collections</Typography>
                <Typography variant="h4" className={classes.view}>Explore More <ArrowRightAlt/> </Typography>
                </Box>
                <Grid container spacing={2}>
                    {
                        allData.map((values)=>{
                            return(
                                <>
                                    <Grid item xs={12} sm={6} md={6} lg={4} >
                                        <Card className={classes.cardCollect}>
                                            <Box className={classes.imgContainer}>
                                            <img src={values.image} style={{borderRadius:"10px"}} width="100%" alt="Collection Card" />
                                            </Box>
                                            <Box className={classes.collectText}>
                                                <Typography variant="h6">{values.title}</Typography>
                                                <Typography variant="body2">{values.items}</Typography>
                                            </Box>
                                        </Card>
                                    </Grid>
                                </>
                            )
                        })
                    }
                </Grid>
            </Container>
        </Box>
    </>
  )
}

export default PopularCollect