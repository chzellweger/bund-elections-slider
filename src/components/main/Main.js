require('ta-semantic-ui/semantic/dist/components/reset.css');
require('ta-semantic-ui/semantic/dist/components/site.css');
require('ta-semantic-ui/semantic/dist/components/icon.css');

require('styles/App.css');
require('./main.scss');

import React, {Component} from 'react';
import MastheadComponent from '../masthead/MastheadComponent';
//import Title from '../custom/title/Title';
//import Header from '../custom/header/Header'

import ElectionsCarousel from '../custom/slider/SimpleSlider'
import OnePager from '../custom/slider/OnePager'

import FeedbackMessage from '../feedbackMessage/feedbackMessage.component.js'
import CopyrightNotice from '../copyrightNotice/CopyrightNotice.component.js'
//import TrackingPixel from '../trackingPixel/TrackingPixel'

/*
 *
 *
const propTypes = {
  data: React.PropTypes.array.isRequired,
  content: React.PropTypes.object.isRequired
}
 *
 *
 */

class AppComponent extends Component {
  constructor (props) {
    super(props);
    this.handleResize = this.handleResize.bind(this)

    this.state = {
      width: window.innerWidth,
      height: window.innerHeight
    }
  }
 handleResize() {
  this.setState({
    windowHeight: window.innerHeight,
    windowWidth: window.innerWidth
  });
  console.log(this.state.width, this.state.height)
}
componentWillMount() {
  this.state.windowWidth = window.innerWidth
}
componentDidMount() {
        window.addEventListener('resize', ::this.handleResize)
    }
  componentWillUnmount() {
          window.removeEventListener('resize', ::this.handleResize)
      }
  render() {
    let ComponentToRender;
    let width = this.state.windowWidth;
    console.log(width)
    if (width >= 800) {
                  ComponentToRender = <ElectionsCarousel />
                } else {
                  ComponentToRender = <OnePager />
                }
              
    return (
      <div className="index">
          
          <div>
              
              <MastheadComponent inverted={true}/>
       
              <div>
                
                  {ComponentToRender}
                  
              </div>
      
          </div>
      
          <FeedbackMessage />
          <CopyrightNotice inverted={true}/>
      
      </div>
      );
  }
}

//AppComponent.propTypes = propTypes

AppComponent.defaultProps = {};


export default AppComponent;
