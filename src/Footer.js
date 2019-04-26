import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './index.css'

const divStyle = {
    background: '#2c3e50',
    color: '#030303',
    margin: '0',
    padding: '0',
    paddingTop: '20px',
    left: '0',
    right: '0',
    bottom: '0',
    position: 'relative',
    boxShadow: '0 50vh 0 50vh #2c3e50',
    borderTop: "solid #292929"
}

const rowStyle= {
    //color: '#a9a9a9',
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
                <Container fluid>
                    <Row>
                        <Col style={colStyle}>
                            <div style={rowStyle}>
                                <h3 style={title}>Nuton</h3>
                               <Link to="/download" className="footer-link"><p style={rowStyle}>Download</p></Link> 
                               <Link to="/erste-schritte" className="footer-link"><p style={rowStyle}>Erste Schritte</p></Link> 
                               <a target="_blank" href="https://github.com/edgardSchi/nuton/wiki" className="footer-link"><p style={rowStyle}>Wiki</p></a>
                            </div>
                            
                        </Col>
                        <Col style={colStyle}>                            
                            <div style={rowStyle}>
                                <h3 style={title}>Entwickler</h3>
                                <Link to="/docs" className="footer-link"><p style={rowStyle}>Docs</p></Link> 
                                <a target="_blank" href="https://github.com/edgardSchi/nuton" className="footer-link"><p style={rowStyle}>GitHub</p></a>
                            </div>
                        </Col>
                        <Col style={colStyle}>                          
                            <div style={rowStyle}>
                                <h3 style={title}>Legales</h3>
                                <Link to="/lizenz" className="footer-link"><p style={rowStyle}>Lizenz</p></Link> 
                                <Link to="/impressum" className="footer-link"><p style={rowStyle}>Impressum</p></Link> 
                                <Link to="/datenschutz" className="footer-link"><p style={rowStyle}>Datenschutz</p></Link> 
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div style={{textAlign: 'center', padding: '0', margin: '0'}}>
                <h6 style={{fontSize: '15px', color: '#a9a9a9', padding: '0', margin: '0'}}>© 2019 Edgard Schiebelbein</h6>
                </div>           
            </div>
        );
    }
}

export default Footer