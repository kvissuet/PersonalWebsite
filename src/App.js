import React, { Component } from 'react';
import {Tabs, Tab} from "react-bootstrap";
import logo from './logo.svg';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import Homepage from "./js/components/Homepage";
import Resume from "./js/components/Resume";
import Contact from "./js/components/Contact";

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

    handleSelect(key) {
        this.setState({ key });
    }

    render() {
        return (
          <div className="App">

              <header className="App-header">
                  <h1 className="App-title">Kevin Vissuet's Personal Website</h1>
              </header>

              <Tabs
                activeKey={this.state.key}
                onSelect={this.handleSelect}
                id="controlled-tab-example"
              >
                <Tab eventKey={1} title="Home">
                  <div>
                      <Homepage/>
                  </div>
                </Tab>
                <Tab eventKey={2} title="Resume">
                  <Resume/>
                </Tab>
                <Tab eventKey={3} title="Contact Info" >
                  <Contact/>
                </Tab>

                  <Tab eventKey={4} title="Portfolio">

                  </Tab>
              </Tabs>

          </div>
        );
      }
}

export default App;
