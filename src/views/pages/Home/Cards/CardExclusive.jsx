import React, {useState} from 'react'
import {
    Box, Button, Card, Container, Grid, Typography,
} from '@material-ui/core'
import {FaEthereum} from 'react-icons/fa';
import {HiOutlineShoppingBag} from 'react-icons/hi';
import useStyles from '../MakeStyle';
import { ArrowRightAlt } from '@material-ui/icons'
import exclusiveData from '../DataFile/ExclusveAssets';
const CardExclusive = () => {
  const classes = useStyles()
  const [allData,setAllData] = useState(exclusiveData)
    return (
    <>
        <Box style={{margin:"50px 0px"}}>
            <Container>
                <Typography variant="body1"className={classes.line}><span>Explore</span></Typography>
                <Box className={classes.spaceBetween}>
                <Typography variant="h2" style={{padding:"15px 0px"}}>Exclusive Assets</Typography>
                <Typography variant="h4" className={classes.view}>View All <ArrowRightAlt/> </Typography>
                </Box>
                <Grid container spacing={2}>
                    
                    {
                        allData.map((values)=>{
                            return(
                                <>
                                    <Grid item xs={12} sm={6} md={6} lg={3} className={classes.centerGrid}>
                                        <Card className={classes.card}>
                                                <Box className={classes.imgBox}>
                                                    <img src={values.image} width="100%" alt="Live Auction Card" style={{borderRadius:"10px"}} />
                                                </Box>
                                                <Box align="center"> 
                                                    <Typography className={classes.title} variant="h6">{values.title}</Typography>
                                                    <Typography variant="body1">{values.price}</Typography>
                                                    <Typography variant="body1" className={classes.eth} > <FaEthereum/> &nbsp; {values.eth}</Typography>
                                                
                                                    <Button variant="outlined" fullWidth> <HiOutlineShoppingBag/> &nbsp; Place a Bid </Button>
                                                </Box>
                                        </Card>
                                    </Grid>
                                </>
                            )
                        })
                    }
                </Grid>
                <Box align="center" className={classes.btnBox} >
                    <Button variant="contained">Load More</Button>
                </Box>
            </Container>
        </Box>
    </>
  )
}

export default CardExclusive