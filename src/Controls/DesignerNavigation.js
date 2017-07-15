import React, { Component } from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap-tabs';
import '../scss/DesignerNavigation.css';

var data = [
  {
    text: "Home Screen1",
    children: [
      {text: "Home chillin"},
      {
        text: "home grillin",
        children: [
          {text: "burgers"},
          {text: "bacon"}
        ]
      }
    ]
  },
  {text: "About Us"}
];

class NavItemChildren extends Component {
  render(){
    const {children} = this.props;

      if(!children)
        return(<span/>); // no children to render

      var items = children.map(function(item){
        return <NavItem node={item}/>
      });

      return (
        <ul>
          {items}
        </ul>
      );
    }
}

class NavItem extends Component {
  render(){

    const {node} = this.props;

    return (
      <li>
        <a>{node.text}</a>
        <NavItemChildren children={node.children}/>
      </li>
    );
  }
}

class DesignerNavigation extends Component {
  render() {

    var items = data.map(function(item){
      return <NavItem node={item}/>
    })

    return (
      <ul className="navigation">
        {items}
      </ul>
    );
  }
}

export default DesignerNavigation;
