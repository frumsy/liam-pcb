import React from 'react'; 
import {Grid, Row, Col, Image} from 'react-bootstrap';
import GithubImage from './github.png'
import StackOverflowImage from './stackoverflow.png';
import UpWorkImage from './upwork.png';

var useMobile = false;
if( window.innerWidth <= 480 ) {
    var useMobile = true;
}

var mobileStyle={
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


function getMobile(props){
    return (
        <div className="list" style={{visibility: props.visible}}>
            <Grid>
                <Row className="show-grid">
                    <a href="https://github.com/frumsy">
                        <div className="Github" style={mobileStyle}>
                              <Image src={GithubImage} style={imageStyle}rounded />
                        </div>
                    </a>
                    <a href="https://stackoverflow.com/users/6706654/liam?tab=profile">
                        <div className="StackOverflow" style={mobileStyle}>
                            <Image src={StackOverflowImage} style={imageStyle} rounded />
                        </div>
                    </a>
                    <a href="https://www.upwork.com/o/profiles/users/_~0193916a6f17380807/">
                        <div className="UpWork" style={mobileStyle}>
                            <Image src={UpWorkImage} style={imageStyle}rounded />
                        </div>
                    </a>
                </Row>
                    <a href="https://github.com/frumsy/liam-pcb/raw/master/src/Resume_liam.pdf">
                        resume.pdf
                    </a>
                <Row>
                </Row>
            </Grid>

        </div>);
}

function getDesktop(props){
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

        </div>);
}


const Top = (props) => {
    
    let t = props.visible
    //console.log('t:',t);
    if(useMobile){
        console.log('mobile');
        return getMobile(props);
    }
    else{
        console.log('desktop');
        return getDesktop(props);
    }
}

export default Top 
