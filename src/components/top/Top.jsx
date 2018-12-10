import React from 'react'; 
import {Grid, Row, Col, Image} from 'react-bootstrap';
import GithubImage from './github.png';
import StackOverflowImage from './stackoverflow.png';
import UpWorkImage from './upwork.png';

var defaultStyle = 
{       
}
 
var boxStyle={
    margin: '20px',
    background: '#7c7c7c',
    height: '100px',
    width: '300px',
}

var imageStyle={
    maxWidth: '100%',
    maxHeight: '100%',
}

export default class Top extends React.Component {
  state = {
    loaded: false,
  };
  onLoad = () => this.setState({ loaded: true });

  render() {
    const { height, children } = this.props,
      { loaded } = this.state;
 
    return (
        <div className="list" style={defaultStyle}>
            <Grid>
                <Row className="show-grid">
                    <Col xs={6} md={4}>
                        <div className="Github" style={boxStyle}>
                              <Image src={GithubImage} style={imageStyle}rounded />
                        </div>
                    </Col>
                    <Col xs={6} md={4}>
                        <div className="StackOverflow" style={boxStyle}>
                            <Image src={StackOverflowImage} style={imageStyle} rounded />
                        </div>
                    </Col>
                    <Col xsHidden md={4}>
                        <div className="UpWork" style={boxStyle}>
                            <Image href='https://www.upwork.com/o/profiles/users/_~0193916a6f17380807/'src={UpWorkImage} style={imageStyle}rounded />
                        </div>
                    </Col>
                </Row>
            </Grid>

        </div>
    );
  }
}
