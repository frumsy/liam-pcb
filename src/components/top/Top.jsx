import React from 'react'; 
import {Grid, Row, Col, Image} from 'react-bootstrap';
import GithubImage from './github.png'
import StackOverflowImage from './stackoverflow.png';
import UpWorkImage from './upwork.png';



var boxStyle={
    background: 'linear-gradient(to bottom right, #1b1b1b,rgba(26, 64, 97, 0.55))',
    borderRadius: '10px',
    margin: '20px',
    backgroundColor: '#0a0a0a',
    border: '2px solid',
    borderColor: '#141C2C', 
    padding: '1%',
    borderRadius: '12px',
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
                    <a href="https://github.com/frumsy/liam-pcb/raw/master/src/Resume.pdf">
                        resume.pdf
                    </a>
                <Row>
                </Row>
            </Grid>

        </div>
    );
}

export default Top 
