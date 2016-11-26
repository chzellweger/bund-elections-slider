import React, {Component} from 'react'

require('ta-semantic-ui/semantic/dist/components/icon.css')
require('ta-semantic-ui/semantic/dist/components/container.css')
require('./CommentComponent.scss')

class CommentComponent extends Component {
  constructor(props) {
    super(props)
    this.closeModal = this.closeModal.bind(this)
  }
  closeModal(){
    this.props.closeModal()
  }
  render(){
    return (
      <div id="container" className="ui center aligned container">
      
      <div className="ui right aligned container">
      <i className="close icon" onClick={this.closeModal}></i>
      </div>
      
      <iframe id="iframe" src="http://interaktiv.derbund.ch/ext/2016/elections-slider/commentsHTML/comments.html"></iframe>
      
      </div>
      )
  }
}

export default CommentComponent