import { Box, Container, Grid, Typography } from '@material-ui/core'
import React from 'react';
import {IoWalletOutline} from 'react-icons/io5';
import {BsFillGridFill} from 'react-icons/bs'
import { ImDrawer2 } from 'react-icons/im'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import useStyles from './MakeStyle'

const HowItWorks = () => {
    const classes = useStyles()
  return (
    <>
        <Box style={{margin:"50px 0px"}}>
            <Container>
                <Typography variant="body1" className={classes.line}><span>HOW IT WORKS</span></Typography>
                <Typography variant="h2" style={{padding:"25px 0px"}}>Create and sell your NFTs</Typography>

                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={6} lg={3}>
                        <Box className={classes.iconBox}>
                            <IoWalletOutline/>
                        </Box>
                        <Typography variant="h5" style={{padding:"20px 0px 25px 0px"}}>
                            Set up your wallet
                        </Typography>
                        <Typography variant="body2">
                            Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the NFT Marketplace in the top right corner. Learn about the wallets we support.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={3}>
                        <Box className={classes.iconBox}>
                            <BsFillGridFill/>
                        </Box>
                        <Typography variant="h5" style={{padding:"20px 0px 25px 0px"}}>
                            Create your collections
                        </Typography>
                        <Typography variant="body2">
                        Click Create and set up your collection. Add social links, a description, profile & banner images, and set a secondary sales fee.
                        </Typography>
                    </Grid> 
                    <Grid item xs={12} sm={6} md={6} lg={3}>
                        <Box className={classes.iconBox}>
                            <ImDrawer2/>
                        </Box>
                        <Typography variant="h5" style={{padding:"20px 0px 25px 0px"}}>
                            Add your NFTs
                        </Typography>
                        <Typography variant="body2">
                            Upload your work (image, video, audio, or 3D art), add a title and description, and customize your NFTs with properties, stats, and unlockable content
                        </Typography>
                    </Grid> 
                    <Grid item xs={12} sm={6} md={6} lg={3}>
                        <Box className={classes.iconBox}>
                            <HiOutlineShoppingBag/>
                        </Box>
                        <Typography variant="h5" style={{padding:"20px 0px 25px 0px"}}>
                            List them for sale
                        </Typography>
                        <Typography variant="body2">
                            Choose between auctions, fixed-price listings, and declining-price listings. You choose how you want to sell your NFTs!
                        </Typography>
                    </Grid> 
                </Grid>
            </Container>
        </Box>
    </>
  )
}

export default HowItWorks