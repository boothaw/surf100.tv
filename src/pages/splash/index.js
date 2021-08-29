import React, { useState, useEffect } from "react";
// import ReactPlayer from "react-player";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import {
  NavBar,
  Banner,
  ContentContainer,
  Button,
  TitleSection,
  VidContainer,
  Featuring,
  HeadShot,
  HeadShotContainer,
  ProfileContainer,
  HostedSection,
  Description,
  ShowTime,
  TimeUs,
  TimeOz,
  ShowContent,
  FaqContainer,
  FaqSection,
  ColumnOne,
  ColumnTwo,
  Footer,
  PageContainer,
  VidSection,
  NavSection,
  BackgroundImg,
  TimeWOz,
  HostShot,
  CountCountainer,
  EventBanner,
  BuyContainer,
  BannerImg,
  PageLink,
} from "./styles";

import kael from "../../lib/assets/kael.jpg";
import jack from "../../lib/assets/jack.jpg";
import jay from "../../lib/assets/jay.jpg";
import jacob from "../../lib/assets/jacob.jpg";

import yadin from "../../lib/assets/yadin.jpg";
import dane from "../../lib/assets/Dane.png";
import selema from "../../lib/assets/selema.jpg";
import taylor from "../../lib/assets/Taylor.png";
import s100white from "../../lib/assets/s100logowhite.png";
import s100dark from "../../lib/assets/s100logodark.png";
import insta from "../../lib/assets/insta.png";
import mexipoint from "../../lib/assets/mexipoint.jpg";
import mexibanner from "../../lib/assets/mexbanner.png";

const SplashPage = () => {

  return (
    <PageContainer>
      <BackgroundImg>
        <ContentContainer>
          <a href="/wa">
            <BannerImg src={mexibanner}></BannerImg>
          </a>
            <VidSection>
              <VidContainer>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/zSSxtAPEkXQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </VidContainer>
            </VidSection>
           <PageLink>
             <a href="https://stabmag.com/surf100/">Learn More</a>
             <a href="https://stabmag.com/surf100/">9/2/21 6 pm PST</a>
             <a href="/wa">Previous Events</a>
           </PageLink>
        </ContentContainer>
      </BackgroundImg>
    </PageContainer>
  );
};

export default SplashPage;
