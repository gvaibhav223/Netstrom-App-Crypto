import { Box, Button, Container, Typography, } from '@material-ui/core'
import React from 'react'
import { 
IoIosRocket
 } from 'react-icons/io';
 import { 
    IoIosCreate
 } from 'react-icons/io';
import useStyles from './MakeStyle'


const Landing = () => {
    const classes = useStyles()
  return (
    <>
        <Box className={classes.banner}>
            <Container>
                <Typography variant="body1" className={classes.line}><span>NETSTORM</span></Typography>
                <Typography variant="h1">
                    Discover, collect, <br/>
                    and sell <br/>
                    extraodinary NFTs
                </Typography>
                <Typography variant="body2" style={{margin:"20px 0px"}}>
                    Explore on the world's best & largest NFT marketplace
                </Typography>
                <Button variant="contained" style={{marginRight:"20px",marginBottom:"20px"}}><IoIosRocket/> &nbsp;Explore</Button>
                <Button variant="contained" style={{marginBottom:"20px"}}><IoIosCreate/>&nbsp;Create</Button>
            </Container>
        </Box>
    </>
  )
}

export default Landing