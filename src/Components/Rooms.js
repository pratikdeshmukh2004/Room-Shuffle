import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import { MDBContainer, MDBCard, MDBCardBody, MDBCardFooter, MDBTable, MDBTableBody, MDBTableHead, MDBCardHeader, MDBBtn } from 'mdbreact'
export class Rooms extends Component {
    state = {
        data: [
            { "Room": 6, "Data": [{ "Name": "Pratik", "Bed": 1 }, { "Name": "Bhavnesh", "Bed": 2 }, { "Name": "Biju", "Bed": 3 }, { "Name": "Ramesh", "Bed": 4 }, { "Name": "Tariq", "Bed": 5 }, { "Name": "Deepak", "Bed": 6 }, { "Name": "Rohit", "Bed": 7 }] },
            { "Room": 7, "Data": [{ "Name": "Vivek", "Bed": 11 }, { "Name": "Tarun", "Bed": 12 }, { "Name": "Mohit", "Bed": 13 }, { "Name": "Santosh", "Bed": 14 }, { "Name": "Roshan", "Bed": 15 }, { "Name": "Dipesh", "Bed": 16 }, { "Name": "Rahul", "Bed": 17 }] },
            { "Room": 8, "Data": [{ "Name": "Prabhakar", "Bed": 18 }, { "Name": "Aman Kumar", "Bed": 19 }, { "Name": "Chandan", "Bed": 20 }, { "Name": "Chandrashekhar", "Bed": 21 }, { "Name": "Vivek New", "Bed": 22 }] },
            { "Room": 9, "Data": [{ "Name": "Aman Sharma", "Bed": 23 }] },
            { "Room": 10, "Data": [{ "Name": "Kirithiv", "Bed": 24 }, { "Name": "Rahit", "Bed": 25 }, { "Name": "Jai Prakash", "Bed": 26 }, { "Name": "Yogessh", "Bed": 27 }, { "Name": "Prince", "Bed": 28 }, { "Name": "Sabid", "Bed": 29 }] },
            { "Room": 11, "Data": [{ "Name": "Hemant", "Bed": 30 }, { "Name": "Ajit", "Bed": 31 }, { "Name": "Atul", "Bed": 32 }, { "Name": "Shahid", "Bed": 33 }, { "Name": "Riyaz", "Bed": 34 }, { "Name": "Tapas", "Bed": 35 }] },
            { "Room": 12, "Data": [{ "Name": "Anand", "Bed": 36 }, { "Name": "Kumar Nayak", "Bed": 37 }, { "Name": "Himanshu", "Bed": 38 }, { "Name": "Paranthaman", "Bed": 39 }, { "Name": "Sanjay", "Bed": 40 }, { "Name": "Vishal", "Bed": 41 }, { "Name": "Rohit Roy", "Bed": 42 }, { "Name": "Kapil", "Bed": 43 }, { "Name": "Pawan Puniya", "Bed": 44 }] }
        ]
    }
    roomsearch=()=>{
        this.props.RoomNumber()
    }
    render() {

        return (
            <div>
                {this.state.data.map((item) => {
                    return (
                        <MDBContainer>
                            <MDBCard style={{ width: "100%", marginTop: "3rem" }} className="text-center">
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
                                                            <td>{item2.Name}</td>
                                                            <td>{item2.Bed}</td>
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
                    )

                })
                }
            </div>
        )
    }
}

export default Rooms;