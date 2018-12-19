import React from 'react'; 
import {Grid, Row, Col, Image} from 'react-bootstrap';
import GithubImage from './github.png'
import StackOverflowImage from './stackoverflow.png';
import UpWorkImage from './upwork.png';

var boxStyle={
    borderRadius: '10px',
    margin: '20px',
    background: '#1a40618c',
    height: '100px',
    width: '300px',
}

var imageStyle={
    maxWidth: '100%',
    maxHeight: '100%',
}

const Top = (props) => {
    
    let t = props.visible
    console.log('t:',t);
    return (
        <div className="list" style={{visibility: props.visible}}>
            <Grid>
                <Row className="show-grid">
                    <Col xs={6} md={4}>
                    <a href="https://github.com/frumsy">
                        <div className="Github" style={boxStyle}>
                              <Image src={GithubImage} style={imageStyle}rounded />
                        </div>
                    </a>
                    </Col>
                    <Col xs={6} md={4}>
                    <a href="https://stackoverflow.com/users/6706654/liam?tab=profile">
                        <div className="StackOverflow" style={boxStyle}>
                            <Image src={StackOverflowImage} style={imageStyle} rounded />
                        </div>
                    </a>
                    </Col>
                    <Col xsHidden md={4}>
                    <a href="https://www.upwork.com/o/profiles/users/_~0193916a6f17380807/">
                        <div className="UpWork" style={boxStyle}>
                            <Image src={UpWorkImage} style={imageStyle}rounded />
                        </div>
                    </a>
                    </Col>
                </Row>
            </Grid>

        </div>
    );
}

export default Top 
