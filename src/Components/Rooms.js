import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import _ from 'underscore'
import { MDBFooter,MDBContainer, MDBCard, MDBCardBody, MDBCardFooter, MDBTable, MDBTableBody, MDBTableHead, MDBCardHeader, MDBBtn } from 'mdbreact'
export class Rooms extends Component {


    state = {
        data:[]
    }

    componentDidMount () {
        axios.get('http://rooms.navgurukul.cf/roomshuffle')
            .then(data => {
                // console.log(data.data)
                var listofRoom = [6,7,8,9,10,11,12]
                var allData = []
                for (var room of listofRoom){
                    var sameRoom = _.filter(data.data, (i) => {
                        return i.room == room;
                    })
                    var student = {
                        "Room": room,
                        "Data": sameRoom
                    }
                    allData.push(student)
                    this.setState({
                        data: allData
                    })
                }
                console.log(allData)
            })
            .catch(err => console.log(err))
    }

    roomsearch=()=>{
        this.props.RoomNumber()
    }
    render() {

        return (
            <div>
                {this.state.data.map((item) => {
                    return (
                        <div id={"room"+item.Room}>
                        <MDBContainer>
                            <MDBCard style={{ width: "100%", marginTop: "5rem" }} className="text-center">
                                <MDBCardHeader color="success-color"><b>Room No.{item.Room}</b></MDBCardHeader>
                                <MDBCardBody>
                                    <Table striped bordered hover variant="dark">
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Bed</th>
                                            </tr>
                                        </thead>
                                            {item.Data.map((item2) => {
                                                return (
                                                    <tbody>
                                                        <tr>
                                                            <td>{item2.name}</td>
                                                            <td>{item2.bed}</td>
                                                        </tr>
                                                    </tbody>
                                                )
                                            })
                                            }
                                    </Table>
                                </MDBCardBody>
                                <MDBCardFooter color="success-color">{item.Data.length} Peoples.</MDBCardFooter>
                            </MDBCard>
                        </MDBContainer>
                        </div>
                    )

                })
                }
                 <MDBFooter className="danger-color font-small pt-2 mt-4">
              <div className="footer-copyright text-center py-3">
                  <MDBContainer fluid>
                  &copy; {new Date().getFullYear()} Created By: <a href="#pratik"> Pratik Deshmukh and Satyam Chauhan <b className="green-text">rooms.navgurukul.cf</b></a>
                  </MDBContainer>
              </div>
              </MDBFooter>
            </div>
        )
    }
}

export default Rooms;