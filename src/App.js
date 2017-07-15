import React, { Component } from 'react';
import {Tabs, Tab} from 'react-bootstrap-tabs';
import TopNav from './Controls/TopNav';
import DesignerNavigation from './Controls/DesignerNavigation';
import DesignerTools from './Controls/DesignerTools';
import DesignerEditor from './Controls/DesignerEditor';
import DesignerConfiguration from './Controls/DesignerConfiguration';
import './scss/App.css';

class App extends Component {
  render() {
    return (
      <div> 

        <TopNav />

        <div id="designer">

          <div className="designer-col designer-left-col">
            <Tabs>
              <Tab label="Navigation"><DesignerNavigation/></Tab>
              <Tab label="Tools"><DesignerTools/></Tab>
            </Tabs>
          </div>

          <div className="designer-col designer-middle-col">
              <DesignerEditor />
          </div>

          <div className="designer-col designer-right-col">
              <DesignerConfiguration />
          </div>

      </div>
    </div>
    );
  }
}

export default App;
