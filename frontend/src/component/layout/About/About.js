import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com/";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fdepositphotos.com%2Fstock-photos%2Fmanager.html&psig=AOvVaw0pEYFmlLTStOqLW0HWqG1z&ust=1686488194240000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCIinhaDguP8CFQAAAAAdAAAAABAE"
              alt="Founder"
            />
            <Typography>YASH AGGARWAL</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
              This is a sample wesbite made by @YashAggarwal. Only with the
              purpose to provide customer with Best services in the Ecommerce Business
            </span>
          </div>  
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <a
              href="https://www.youtube.com/"
              target="blank"
            >
              <YouTubeIcon className="youtubeSvgIcon" />
            </a>

            <a href="https://instagram.com/" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
