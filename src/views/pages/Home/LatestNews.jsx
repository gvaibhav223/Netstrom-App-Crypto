import { Box, Card, Container, Divider, Grid, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import { ImUser } from 'react-icons/im'
import { BsClock } from 'react-icons/bs'
import useStyles from './MakeStyle'
import { ArrowRightAlt } from '@material-ui/icons'
import newsData from './DataFile/LatestNews'
const LatestNews = () => {
const classes = useStyles()
const [allData,setAllData] = useState(newsData)
  return (
    <>
        <Box style={{padding:"50px 0px 80px 0px"}}>
            <Container>
                <Typography variant="body1" className={classes.line}><span>POPULAR POSTS</span></Typography>
                <Box className={classes.spaceBetween}>
                <Typography variant="h2" style={{padding:"15px 0px"}}>Latest News</Typography>
                <Typography variant="h4" className={classes.view}>View All <ArrowRightAlt/> </Typography>
                </Box>
                <Grid container spacing={2}>
                    {
                        allData.map((values)=>{
                            return(
                                <>
                                    <Grid item xs={12} sm={12} md={4} lg={4} className={classes.centerGrid}>
                                        <Box>
                                        <Card style={{
                                            background: "url(" + values.backImg + ")",
                                            // backgroundImage:"linear-gradiant(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(" + values.backImg + ")",
                                            backgroundPosition:"center",
                                            backgroundSize:"cover",
                                            width:"100%",
                                            maxWidth:"400px",
                                            height:"auto",
                                            minHeight:"350px",
                                        }}>
                                            <Box style={{
                                              background:"rgba(0,0,0,0.5)",
                                        }} >
                                                <Box align="center" style={{padding:"10px 20px"}}>
                                                    <Typography variant="h5" style={{padding:"15px 20px"}}>
                                                        {values.title}
                                                    </Typography>
                                                    <Typography variant="body2" style={{color:"#F5F5F5",minHeight:"180px"}}>
                                                        {values.desc}
                                                    </Typography>
                                                    <Divider variant="middle" style={{backgroundColor:"#b5b5b5",opacity:"30%",margin:"30px 25px"}} />
                                                </Box>
                                                
                                                <Box className={classes.blogCardText}>
                                                    <Typography variant="body2" style={{color:"#F9F9F9"}}><ImUser/> &nbsp; {values.user}</Typography>
                                                    <Typography variant="body2" style={{color:"#F9F9F9"}}> <BsClock/> &nbsp; {values.date}</Typography>
                                                </Box>
                                            </Box>
                                        </Card>
                                        </Box>
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

export default LatestNews