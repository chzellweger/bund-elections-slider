require('ta-semantic-ui/semantic/dist/components/icon.css');
require('ta-semantic-ui/semantic/dist/components/divider.css');
require('ta-semantic-ui/semantic/dist/components/button.css');

import React, { Component } from 'react'
import Modal from '../modal/Modal'


const propTypes = {
  candidatesName: React.PropTypes.string.isRequired
  };

class Item extends Component {
  constructor(props) {
    super(props)
    this.showDownvoteModal = this.showDownvoteModal.bind(this)
    this.showUpvoteModal = this.showUpvoteModal.bind(this)
    this.attach = this.attach.bind(this)
  }
  componentDidMount() {
   
  }
  attach(mode, el) {
    if (mode === 0) {
      this.d = el
    } else {
      this.u = el
    }
  }
  showDownvoteModal() {
    $(this.d)
      .modal('show')
    ;
  }
  showUpvoteModal() {
    $(this.u)
      .modal('show')
  }
  render() {
   let buttons;
   if(this.props.data.name !== 'leer') {
    buttons = (
      <div>
          <div className="ui basic green button" onClick={this.showUpvoteModal}>Wählen!</div>
          <div className="ui basic red button" onClick={this.showDownvoteModal}>Verhindern!</div>
      </div>
      )
   } else {
    buttons = (
      <div>
          <div className="ui basic green disabled button" onClick={this.showUpvoteModal}>Wählen!</div>
          <div className="ui basic red disabled button" onClick={this.showDownvoteModal}>Verhindern!</div>
      </div>
      )
   }
    return (
      <div>
        <img className="left floated mini ui image" src={this.props.candidatesImage} />
        <div className="header">
          {this.props.candidatesName}
        </div>
        <div className="meta">
          {this.props.party}
        </div>
        <div className="extra content">
          <div className="ui two buttons">
            {buttons}
          </div>
        </div>
        
        <Modal  data={this.props.data}
                mode={0}
                name={this.props.candidatesName}
                id={this.props.id}
                attach={this.attach} />
        
        <Modal  data={this.props.data}
                mode={1}
                name={this.props.candidatesName}
                id={this.props.id}
                attach={this.attach} />
                
        <div className="ui divider"></div>
      
      </div>
      )
  }
}

Item.propTypes = propTypes

export default Item
