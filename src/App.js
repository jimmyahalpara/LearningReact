import logo from './logo.svg';
import './App.css';
import Greet from  "./components/Greet"
import Welcome from "./components/Welcome"
import Hello from "./components/Hello"
import Message from "./components/Message"
import Counter from './components/Counter';
import FunctionClick from "./components/FunctionClick"
import ClassClick from "./components/ClassClick"
import EventBind from "./components/EventBind"
import ParentComponent from './components/ParentComponent';
import UserGreetings from './components/UserGreetings';

function App() {
  return (
    <div className="App">
      <UserGreetings/>
      {/* <ParentComponent/> */}
      {/* <EventBind/> */}
      {/* <FunctionClick/> */}
      {/* <ClassClick></ClassClick> */}
      {/* <Counter /> */}
      {/* <Message/> */}
      {/* <Greet name="Jimmy" heroName="Superman">
        <p>Children Props</p>
      </Greet>
      <Greet name="Clark" heroName="Wonder Woman" >
        <button>This is buttong</button>
      </Greet>
      <Greet name="Diana" heroName="Wonder Women" /> */}


      {/* <Welcome  name="Jimmy" heroName="Superman"/>
      <Welcome name="Clark" heroName="Wonder Woman"/>
      <Welcome name="Diana" heroName="Wonder Women"/> */}
    </div>
  );
}

export default App;
