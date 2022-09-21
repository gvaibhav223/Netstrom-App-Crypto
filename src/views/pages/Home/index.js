import React from "react";
import { Box } from "@material-ui/core";
import Page from "src/component/Page";
import Landing from './Home'
import CardLive from './Cards/CardLive'
import PopularCollect from "./Cards/PopularCollect";
import CardExclusive from "./Cards/CardExclusive";
import HowItWorks from "./HowItWorks";
import LatestNews from "./LatestNews";
function Home(props) {
  return (
    <Page title="NETSTORM | HOME">
      <Box >
        <Landing/>
        <CardLive/>
        <PopularCollect/>
        <CardExclusive/>
        <HowItWorks/>
        <LatestNews/>
      </Box>
    </Page>
  );
}


// https://preview.themeforest.net/item/netstorm-nft-marketplace-wordpress-theme/full_screen_preview/35106315?_ga=2.34968225.1652621721.1653182102-1963823536.1653182102

export default Home;
