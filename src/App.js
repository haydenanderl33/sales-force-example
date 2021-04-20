import React, { Component } from "react";
import "./App.css";
import Information from "./Information";

class App extends Component {
  constructor() {
    super();

    this.state = {
      search: null,
      name:"",
      age:"",
      country:""
    };
  }

  searchSpace = (event) => {
    let keyword = event.target.value;
    this.setState({ search: keyword });
    console.log(this.state.search)
  };

  handleChange(event) {
    this.setState({value: event.target.name});
  }

  fillFields = (data_id) => {
    let item = Information.find(e => e.id === data_id)

    this.setState({name: item.name});
    this.setState({age: item.age});
    this.setState({country: item.country});
    console.log(item.name)
    console.log(item.age)
    console.log(item.country)


  
  }

  render() {
    const items = Information.filter((data) => {
      if (this.state.search == null) return data;
      else if (
        data.name.toLowerCase().includes(this.state.search.toLowerCase()) ||
        data.country.toLowerCase().includes(this.state.search.toLowerCase())
      ) {
        
        return data;
      }
      return "";
    }).map((data) => {
      return (
        <div key={data.id} >
            <ul>
              <li className="items">
                <span> {data.name}  </span>
                <span> {data.age}   </span>
                <span> {data.country}   </span>
                <button onClick={()=>this.fillFields(data.id)}>Fill Fields</button>
              </li>
            </ul>
        </div>
      );
    });

    return (
      <>
      <div className="inputCont">
        <input
          type="text"
          placeholder=" Enter item to be searched"
          onChange={(e) => this.searchSpace(e)}
        />
        </div>
        <div className="dataContainer">
           <div className="searchItemsContainer">{items}</div>
           <div className="inputContainer">
             <input value={this.state.name} onChange={this.handleChange} placeholder=" Name"/>
             <input value={this.state.age} onChange={this.handleChange}  placeholder=" Age"/>
             <input value={this.state.country} onChange={this.handleChange} placeholder=" Location"/>
           </div>
           </div>
      </>
    );
  }
}

export default App;
