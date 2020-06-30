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
    constructor(){
      super();
      this.state = {
        odometer_value : 0,
      }
    }

    updateOnes(operation){
      let new_odometer_value = 100

      this.setState({
        odometer_value : new_odometer_value,
      })
    }

    render(){
        return <>
            <h3>Please update the Odometer</h3>
            
            <p>Current value of the Odometer {this.state.odometer_value}</p>
            <hr></hr>
            <button onClick={() => this.updateOnes("substract")}> - </button> 
            <label>Ones </label> 
            <button onClick={() => this.updateOnes("substract")}> + </button> 
            <hr></hr>
         </>
    }
}


class Header extends React.Component{
  render(){
      return <> 
          <h1>Header</h1>
          </>
  }
}

class Footer extends React.Component{
  render(){
      return <h1>Footer</h1>
  }
}


export default App;
