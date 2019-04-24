import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

const divStyle = {
    background: '#2c3e50',
    color: '#030303',
    margin: '0',
    padding: '0',
    left: '0',
    right: '0',
    bottom: '0',
    position: 'relative'
}

const rowStyle= {
    color: '#a9a9a9',
    //margin: '0px',
    padding: '0px',
    fontSize: '1.2rem'
}

const colStyle = {
    display: 'flex',
    justifyContent: 'center'
}

const containerStyle = {
    margin: '0px',
    padding: '0px'
}

const title = {
    color: '#898989',
    fontSize: '1.5rem'
}

class Footer extends React.Component{


    render() {
        return(
            <div style={divStyle}>
                <hr />
                <Container fluid>
                    <Row>
                        <Col style={colStyle}>
                            <div style={rowStyle}>
                                <h3 style={title}>Nuton</h3>
                                <p style={rowStyle}>Download</p>
                                <p style={rowStyle}>Erste Schritte</p>
                                <p style={rowStyle}>Wiki</p>
                            </div>
                            
                        </Col>
                        <Col style={colStyle}>                            
                            <div style={rowStyle}>
                                <h3 style={title}>Entwickler</h3>
                                <p style={rowStyle}>JavaDoc</p>
                                <p style={rowStyle}>Repository</p>
                                <p style={rowStyle}>Quellcode</p>
                            </div>
                        </Col>
                        <Col style={colStyle}>                          
                            <div style={rowStyle}>
                                <h3 style={title}>Legales</h3>
                                <p style={rowStyle}>Impressum</p>
                                <p style={rowStyle}>Datenschutz</p>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Footer