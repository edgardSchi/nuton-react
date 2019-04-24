import React from 'react';
import {Jumbotron, Container, Row, Col} from 'react-bootstrap';
import './index.css';
import GithubFork from 'react-github-fork-ribbon';


const jumboStyleRed = {
    background: '#cc2424',
    marginBottom: '0px'
}

const jumboStyleWhite = {
    background: '#e2e2e2',
    marginBottom: '0px',
}

const divStyleRed = {
    color: '#e2e2e2',
    marginLeft: '50px'
}

const divStyleWhite = {
    marginLeft: '50px',
    marginTop: '5%',
    color: '#030303',
    paddingRight: '10px',
    //marginLeft: '50px'
}

const titleStyle = {
    fontFamily: 'Nunito'
}


class MainPage extends React.Component {

    render() {
        return (
            <div style={ { height: '100%'} }>
                <Jumbotron style={jumboStyleRed} fluid>
                    <div style={divStyleRed}>
                        <GithubFork position='right-bottom' href='https://github.com/edgardSchi/nuton' target='_blank'>
                            Fork me on GitHub
                        </GithubFork>
                        <h1 className="heading">Nuton</h1>
                        <p>
                            Nuton ist ein Videoanalyseprogramm, welches speziell für den Physikunterricht entwickelt wurde. Mit Nuton lassen sich Bewegungen in Videos analysieren 
                            und auswerten, um somit zum Beispiel die Geschwindigkeit eines Objekts zu ermitteln.
                        </p>
                    </div>    
                </Jumbotron>
                        <div style={divStyleWhite}>
                        <h1>Open Source</h1>
                        <p>
                            Nuton ist komplett Open Source, das heißt kostenlos und frei verwendbar. Außerdem ist der gesamte Quellcode einsehbar, damit eine weitere Entwicklung
                            gewährleistet ist.
                        </p> 
                        </div>
                            <div style={divStyleWhite}>
                                <h1>Plattformunabhänging</h1>
                                <p>
                                   Nuton wurde mit Java entwickelt und läuft damit auf jedem Betriebssystem, das von Java unterstützt wird. Zudem werden exportierte Daten nur in
                                    Rohdatenformate geschrieben, wodurch zur weiteren Verabeitung alle möglichen Programme verwendet werden können.
                                </p>
                             </div>
                            <div style={divStyleWhite}>
                                <h1>Für die Schule entwickelt</h1>
                                <p>
                                    Nuton wurde vorallem für den Schulunterricht entwickelt und ist auf diesen optimiert. Zum Beispiel besitzt jeder Benutzer seine eigenen
                                    Einstellungen und kann das Programm nach belieben anpassen. 
                                </p>
                            </div>
            </div>
        );

        
    }
}

export default MainPage;