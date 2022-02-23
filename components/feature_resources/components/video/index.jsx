import React from 'react';
import {
    Card,
    Detail,
    Heading,
    Title,
    LinkWrap,
    Link,
    Video,
    Icon,
    ImgBox
} from "./styles";


const VideoCard = () => {
    return (
        <Card>
            <Video>
                <ImgBox>
                    <video
                        controls loop
                        src={'../static/video/sample.mp4'}
                        className="videoPlayer" />
                </ImgBox>
                <Icon>
                    <img src={'/static/images/videoplay.svg'} alt="play" />
                </Icon>
            </Video>
            <Detail>
                <Heading>VIDEO tITLE</Heading>
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