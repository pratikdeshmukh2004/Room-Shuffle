import React from 'react';
import './App.css';
import NavbarPage from './Components/Header'
import Rooms from './Components/Rooms'

export class App extends React.Component {
  state = {
    data: [
        { "Room": 6, "Data": ["Pratik","Bhavnesh","Biju","Ramesh","Tariq","Deepak","Rohit"] },
        { "Room": 7, "Data": ["Vivek","Tarun","Mohit","Santosh","Roshan","Dipesh","Rahul"] },
        { "Room": 8, "Data": ["Prabhakar","Aman Kumar","Chandan","Chandrashekhar","Vivek New"] },
        { "Room": 9, "Data": ["Aman Sharma"] },
        { "Room": 10, "Data": ["Kirithiv","Rahit","Jai Prakash","Yogessh","Prince","Sabid"] },
        { "Room": 11, "Data": ["Hemant","Ajit","Atul","Shahid","Riyaz","Tapas"] },
        { "Room": 12, "Data": ["Anand","Kumar Nayak","Himanshu","Paranthaman","Sanjay","Vishal","Rohit Roy","Kapil","Pawan Puniya"] }
    ]
}

  onSearch=(e)=>{
    var name = e.target.value;
    if (name.length>2){
      name=name.slice(0,1).toUpperCase()+name.slice(1)
      console.log(name);
      
      for (var i of this.state.data){
        if (i.Data.includes(name)){
          this.setState({
            roomnumber:i.Room
          })
        }
      }
    }
  }
  onRoomSearch=()=>{
    console.log(this.state.roomnumber)
  }
  render() {
    return (
      <div>
        <NavbarPage onsearch={this.onSearch} />
        <Rooms RoomNumber={this.onRoomSearch} PageData={this.state} />
      </div>
    )
  }
}

export default App
