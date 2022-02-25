import React from 'react';
import {
    Card,
    Detail,
    Heading,
    Title,
    LinkWrap,
    Link,
    ImgBox
} from "./styles";
import { Player, BigPlayButton } from 'video-react';
import "node_modules/video-react/dist/video-react.css";

const VideoCard = () => {
    return (
        <Card>
            <ImgBox className="videoPlayer">
                <Player
                    fluid={true}
                    playsInline={true}
                    poster="/static/images/windfan.svg" >
                    <source src="../static/video/sample.mp4" />
                    <BigPlayButton position="center" />
                </Player>
            </ImgBox>
            <Detail>
                <Heading>VIDEO TITLE</Heading>
                <Title>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus bibendum lacus mauris. Curabitur lectus tortor,
                    sollicitudin in lorem sit amet, porttitor finibu.
                </Title>
                <LinkWrap>
                    <span>IRENA</span>{''}
                    <Link> https://www.irena.org/</Link>
                </LinkWrap>
            </Detail>
        </Card>
    );
};

export default VideoCard;