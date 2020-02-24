import React from 'react';
import FunC from "./FunctionalComponent";
import ClassC from "./ClassComponent";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component{
  render(){
      return (
        <div className="row" style={{height: '97vh', width: '100vw'}}>
          <ClassC />
          <FunC />
        </div>
      );
    }
}
export default App;