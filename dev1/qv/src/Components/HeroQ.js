import pleasewerk from '../images/Pleasewerk.gif';
import styled from 'styled-components';
import React, {Component} from 'react';
//
// function Qhero(props) {
//   return(
//     <div className={''+{...}}>
//     {props.children}
//     </div>
//   );
//     //
//     //
//   }
// }
class QheroX extends React.Component {
  constructor(props) {
        super(props);

      this.state = {isShowing: true};
      this.hideOverlay=this.handleClick.bind(this);
      this.scrunch=this.scrunch.bind(this);
    }

    scrunch() {
      this.setState({
        isShowing: false,
      });
    }

    hideOverlay() {
      this.setState(prevState => ({
        isShowing: !prevState.isShowing
      }));
    }
 render() {
        return (
            <div className="ff">
                <div className="middle_div" onClick={this.props.scrunch}>

                </div>

                //{this.state.isShowing ? <HeroQ/> : null}
 {this.state.isShowing && <HeroQ hideOverlay={this.hide_overlay} />}
            </div>
        );
    }
}
class HeroQ extends Component {
  constructor() {
  super();
  }
render(){
  return (
    <div>

      <div > <img src={pleasewerk} onClick ={this.hideOverlay} /></div>
      <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
       width="1200.000000pt" height="1200.000000pt" viewBox="0 0 1200.000000 1200.000000"
       preserveAspectRatio="xMidYMid meet">

      <g transform="translate(0.000000,1200.000000) scale(0.100000,-0.100000)"
      fill="#000000" stroke="none">
      </g>
      </svg>
    </div>
  );
}
}

function egoQ () {
  return (
    <div className="App">

      <div className = "heroSmack" onClick ={this.state.hideOverlay}> <img src={pleasewerk} /></div>

    </div>
  );
}


export default HeroQ;
