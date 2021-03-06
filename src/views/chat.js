import React from 'react'
import { FlowHeader } from 'containers'
import '@/assets/sass/views/chat.scss'
import { Icon } from 'icon'

class Chat extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      message: '',
      inputValue: '',
      messageArray: []
    }
    let self = this
    window.socket.on('chat message', function (msg) {
      self.state.messageArray.push(msg)
      self.setState({
        messageArray: self.state.messageArray
      })
      console.log(msg)
    });
  }
  sendMessage() {
    window.socket.emit('chat message', this.state.message);
    this.setState({
      inputValue: ''
    })
  }
  handleChange(e) {
    this.setState({
      message: e.target.value,
      inputValue: e.target.value
    })
  }
  render() {
    return (
      <div>
        <FlowHeader title={this.props.location.state.value.title}></FlowHeader>
        <div className="containerBox chatContainer">
          {this.state.messageArray.map((message, k) => {
            return (
              <div className = "chatItemBox">
                <Icon href='icon-dingyuehao' size='40'></Icon>
                <span className="chatP" key={k}>{message}</span>
              </div>
            )
          })}
        </div>

        <div className="chatBox">
          <input onChange={this.handleChange.bind(this)} type="text" value={this.state.inputValue} />
          <button onClick={this.sendMessage.bind(this)}>发送</button>
        </div>
      </div>
    )
  }
}

export default Chat