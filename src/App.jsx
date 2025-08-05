import React from "react";
import ReactDom from "react-dom";

export default class App extends React.Component
{
    constructor(){

      super();
      this.state={
        qty:0,
        rate:0,
        total:0
      }
    }
  render(){

    return<>
      <div className="container mt-5 p-5 bg-dark">
        <div className="form-group">
          <input type="text" name="qty" value={this.state.qty} className="form-control control"
            placeholder="Enter qty" onChange={(e)=>this.setState({qty:e.target.value})}/>
        </div>
        <div className="form-group">
          <input type="text" name="rate" value={this.state.rate} className="form-control control"
          placeholder="Enter rate" onChange={(e)=>this.setState(prev=>{
                  return {...prev,rate:e.target.value}})}/>
        </div>

        

        <input type="text" name="total" value={parseInt(this.state.qty)*parseInt(this.state.rate)} className="btn control" />
      </div>
    </>
  }
}