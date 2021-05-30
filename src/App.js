// import logo from './logo.svg';
import './App.css';
import { Button } from 'antd';
import Index from './pages/Index/index'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import SwapPage from './pages/Index/swap';

function App() {
  return (
    <div>
    <Router>
      <Route exact path="/" component={Index} />
      <Route exact path="/swap" component={SwapPage} />
      {/* <Route exact path="/userManagement" component={Home} />
      <Route exact path="/details" component={Home} />
      <Route exact path="/admin" component={Home} /> */}
    </Router>
  </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    
  //   <div className="App">
  //   <Button type="primary">Button</Button>
  // </div>
  );
}

export default App;
