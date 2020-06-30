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
        odometer_value : 9998,
      }
    }

    updateOnes(operation, unit){
      let current_odometer_value = this.state.odometer_value
      let new_odometer_value


      if (operation === "substract"){
        new_odometer_value = current_odometer_value - unit;
      }
      else {
        new_odometer_value = current_odometer_value + unit;
      }

      // VALIDATIONS
      if (new_odometer_value < 0) {
        new_odometer_value = 0
      }
      // CASES WHEN new_odometer_value > 9999
      if (new_odometer_value >9999 ) {
        new_odometer_value = new_odometer_value - 10000
      }

      this.setState({
        odometer_value : new_odometer_value,
      })

    }


    
    render(){
        return <>
            <h3>Please update the Odometer</h3>

            <p>Current value of the Odometer {this.state.odometer_value}</p>
            <hr></hr>

            <button onClick={() => this.updateOnes("substract", 1)}> - </button> 
            <label>Ones </label> 
            <button onClick={() => this.updateOnes("add", 1)}> + </button> 
            <br></br>
            <button onClick={() => this.updateOnes("substract", 10)}> - </button> 
            <label>Tens </label> 
            <button onClick={() => this.updateOnes("add", 10)}> + </button> 
            <br></br>
            <button onClick={() => this.updateOnes("substract", 100)}> - </button> 
            <label>Tundreds </label> 
            <button onClick={() => this.updateOnes("add", 100)}> + </button> 
            <br></br>
            <button onClick={() => this.updateOnes("substract", 1000)}> - </button> 
            <label>Thousands </label> 
            <button onClick={() => this.updateOnes("add", 1000)}> + </button>             
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
