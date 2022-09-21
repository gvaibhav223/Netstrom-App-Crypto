import React from "react";
import {
  Grid,
  Box,
  Container,
  Typography,
  makeStyles,
  Button,
} from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import { } from "react-feather";
import { Facebook, Instagram, Telegram, Twitter } from "@material-ui/icons";

  const useStyles = makeStyles({
    footerSection:{
      backgroundColor:"#121117",
      padding:"80px 0px"
    },
    icon:{
      backgroundColor:"#222222",
      color:"white",
      fontSize:"45px",
      padding:"10px",
      margin:"5px",
      borderRadius:"5px"
    }
  })

export default function Liquidity() {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.footerSection}
      style={{backgroundImage:"url('./images/footerIMG.png')"}}
      >

        <Box style={{ margin: "20px 10px 0", position: "relative", zIndex: "2", }}>
          <Container maxWidth="lg">
            <Grid
              container
              justify="space-around"
              spacing={2}
            >
              <Grid item xs={12} sm={7} md={5} lg={5}>
                <Box style={{
                  maxWidth:"65px",
                  margin:"0px 0px 20px 0px"
                }}>
                  <img src="images/logo.png" alt="Logo" width="100%" />
                </Box>
                <Typography variant="body2"> 
                The world’s largest digital marketplace for crypto <br/> collectibles and NFTs. Buy, sell, and discover exclusive digital items.
                </Typography>
                <Box style={{padding:"10px 0px"}}>
                  <Facebook className={classes.icon}/>
                  <Twitter className={classes.icon}/>
                  <Telegram className={classes.icon}/>
                  <Instagram className={classes.icon}/>
                </Box>
              </Grid>


              <Grid item xs={12} sm={5} md={2} lg={2} >
                <Typography variant="h5" style={{
                  margin:"20px 0px",
                }}
                >Useful Links</Typography>
                <Typography variant="body2">
                  All NFTs
                </Typography>
                <Typography variant="body2">
                  How it Works
                </Typography>
                <Typography variant="body2">
                    Create
                </Typography>
                <Typography variant="body2">
                  Explore
                </Typography>
              </Grid>
              
              <Grid item xs={12} sm={6} md={2} lg={2}>
                <Typography variant="h5" style={{ margin:"20px 0px",}}>Community</Typography>
                <Typography variant="body2">
                  Help Center
                </Typography>
                <Typography variant="body2">
                  Partners
                </Typography>
                <Typography variant="body2">
                    Suggestions
                </Typography>
                <Typography variant="body2">
                  Blogs
                </Typography>
              </Grid>

              <Grid item xs={12} sm={6} md={3} lg={3}>
                <Typography variant="h5" style={{ margin:"20px 0px",}}>Popular Tags</Typography>
                <Box style={{
                  display:"flex",
                  flexDirection:"row",
                  flexWrap:"wrap"
                }}>
                  <Typography variant="h3">Arts</Typography>
                  <Typography variant="h3">Bids</Typography>
                  <Typography variant="h3">Bitcoin</Typography>
                  <Typography variant="h3">Crypto</Typography>
                  <Typography variant="h3">Digital</Typography>
                  <Typography variant="h3">Marketplace</Typography>
                  <Typography variant="h3">Token</Typography>
                </Box>
              </Grid>

            </Grid>
          </Container>

        </Box>
      </Box>
    </>
  );
}
