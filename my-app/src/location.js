import React from 'react'
import * as Axios from 'axios'
import './location.css';
import './index.css';
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class Location extends React.Component {

    constructor(props) {
        super(props);
        this.locate = this.locate.bind(this);
        this.updateStateWithArray = this.updateStateWithArray.bind(this);
        this.renderTheArray = this.renderTheArray.bind(this);
        this.state = ({ latitude: 59.38273599999999, longitude: 17.992799999999992, setShow: '' });
    }


    locate() {

        if (navigator.geolocation) {
            console.log(this);
            navigator.geolocation.getCurrentPosition(this.getGeoLocation);

        }

    }

    getGeoLocation = (position) => {

        let setArray = this.updateStateWithArray;

        const array = [];
        
        Axios.get(`http://localhost:5000/location?lat=${position.coords.latitude}&lng=${position.coords.longitude}`)
            .then(function (response) {
                for (const property of response.data) {
                    array.push(property);
                }
                setArray(array);
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    updateStateWithArray(array) {
        this.setState({ AllPlaceObjects: array });
    }


    render() {

        console.log(this.state.AllPlaceObjects);

        return (
            <div className="calc-row">
                <img src="ParkHere header solid thinner.png" alt="ParkHere header" width="100%" className="headerImg"></img>
                <Container>
                    <Row>
                        <Col xs="1"></Col>
                        <Col xs="10">
                            <div className="border" width="100%">
                                <div>
                                    <br></br>
                                    <Button variant="primary" onClick={this.locate} className="buttonz">Hitta din plats!</Button>
                                    <br></br>
                                    <br></br>
                                </div>
                                <div>
                                    {this.renderTheArray()}
                                </div>
                            </div>
                        </Col>
                        <Col xs="1"></Col>
                    </Row>
                </Container>
            </div>
        )

    }

    renderTheArray() {

        if (this.state.AllPlaceObjects) {
            if (this.state.AllPlaceObjects.length) {
                let tempPlaces = this.state.AllPlaceObjects;
                let dateTime;
                let arrayWithHTML = [];

                console.log(this.state.AllPlaceObjects);
                console.log(tempPlaces);

                console.log(this.state.AllPlaceObjects.length);

                for (const onePlace of this.state.AllPlaceObjects) {

                    if(onePlace.parkingStatus){
                        arrayWithHTML.push(<div className="greenText"><strong>Aktuella föreskrifter tyder på att parkering är tillåten på denna plats just nu.</strong><br></br><br></br></div>);
                    } else {
                        arrayWithHTML.push(<div className="redText"><strong>Aktuella föreskrifter tyder på att parkering inte är tillåten på denna plats just nu.</strong><br></br><br></br></div>);
                    }
                    arrayWithHTML.push(<span>Här gäller följande parkeringsregler: <br></br><br></br></span>);
                    arrayWithHTML.push(<div>Område: {onePlace.district}<br></br></div>);
                    arrayWithHTML.push(<div>Adress: {onePlace.returnAddress}<br></br></div>);
                    arrayWithHTML.push(<div>{onePlace.serviceMessage}<br></br></div>);
                    arrayWithHTML.push(<div>{onePlace.maxHours}<br></br></div>);

                    dateTime = <span><div className="dateTime">{onePlace.dateToday} {onePlace.timeToday}</div><br></br></span>;
                    console.log(onePlace);
                }

                console.log(arrayWithHTML[0]);
                return (
                    <React.Fragment>
                        {dateTime}
                        {arrayWithHTML}
                    </React.Fragment>
                )
            } else {
                return (
                    <React.Fragment>
                        <span className="textc"><strong>Vi hittade inga parkeringar i närheten av din position. Tryck på knappen för att hämta din position på nytt.<br></br><br></br></strong></span>
                    </React.Fragment>)
            }
        } else {
            return (
                <React.Fragment>
                    <span>Tryck på knappen för att se om du kan parkera här.</span>
                </React.Fragment>)
        }
    }

}

export default Location
