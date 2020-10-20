import React, {useState} from 'react';
import './App.css';
// npm - репозиторий
// node package manager
// nodejs backend
// express npm
// react
// npm
// npm install create-react-app -g
// create-react-app chat-app
// styles
// state management
// SASS
  const sendMessage = (text) => {
    console.log(`message sent ${text}`)
  }

  function App() {
    const [ messages, setMessage ] = useState([])
    const [ roomId, setRoomId ] = useState('')
    return (
        <div className="app">
          <Title />
          <MessageList
              roomId={roomId}
              messages={messages} />
          <SendMessageForm
              sendMessage={sendMessage} />
        </div>
    );
  }

function MessageList (props) {
    const { messages =[] } = props
    return (
        <ul className="message-list">
          {messages.map((message, index) => {
            return (
                <li  key={message.id} className="message">
                  <div>{message.senderId}</div>
                  <div>{message.text}</div>
                </li>
            )
          })}
        </ul>
    )
}

function SendMessageForm (props) {
  const [message, setMessage] = useState('')


  const handleChange = (e) => {
      console.log(e.target.value)
    setMessage(e.target.value)
  }

  const handleSubmit = (evt) => {
  // evt.target
  // MouseEvent react
  // this
    alert('form submitted')
    evt.preventDefault()
    props.sendMessage(message)
      setMessage('')
  }



  // render() {
    return (
        <form
            onSubmit={handleSubmit}
            className="send-message-form">
          <input
              onChange={handleChange}
              value={message}
              placeholder="Type your message and hit ENTER"
              type="text" />
        </form>
    )
  // }
}

function Title() {
  return <p className="title">My awesome chat app</p>
}

export default App;

// ES6 (ES2015)
// extends React.Component
class ClassTitle {
    constructor(text) {
        this._text = text
    }

    run (text) {
        // console.log(`I am ${this._text}`)
        console.log(`I am ${text}`)
    }
}

const classTitle = new ClassTitle('Andrey Smirnov')
classTitle.run()

// ES<6
// function FuncTitle () {
//     // text = undefined
//     // hoisting - поднятие
//     console.log(text)
//     var text = '';
// }
//FuncTitle.prototype.run = run
