import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Odometer />
      <Footer />
      
    </div>
  );
}


class Odometer extends React.Component{
    render(){
        return <h1>render</h1>
    }
}


class Header extends React.Component{
  render(){
      return <h1>Header</h1>
  }
}

class Footer extends React.Component{
  render(){
      return <h1>Footer</h1>
  }
}


export default App;
