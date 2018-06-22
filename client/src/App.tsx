import * as React from 'react';
import Abilities from './Abilities';
import About from './About';
import './App.css';
import Bio from './Bio';
import Experiences from './Experiences';
import NavBar from './NavBar';


class App extends React.Component<any, any> {

  public constructor(props: any) {
    super(props);
    this.state = {
      page: "home"
    }
  }

  public handleCallback = (navPage: string) => {
    this.setState({page: navPage});
  }

  public render() {
    if(this.state.page === 'home') {
    	return (
  <div className="container">
	<NavBar navCallback={this.handleCallback}/>
	<About/>
  </div>
	);
    } else if(this.state.page === "Experiences") {
      return(
  <div className="container">
	<NavBar navCallback={this.handleCallback}/>
	<Experiences/>
  </div>
      );
    } else if(this.state.page === "abilities") {
      return(
  <div className="container">
	<NavBar navCallback={this.handleCallback}/>
	<Abilities/>
  </div>
      );
    } else if(this.state.page === "bio") {
      return(
  <div className="container">
	<NavBar navCallback={this.handleCallback}/>
	<Bio/>
  </div>
      );
    } else if(this.state.page === "game") {
      return(
  <div className="container">
	<NavBar navCallback={this.handleCallback}/>
        {this.state.page}
  </div>
      );
    } else {
      return(
  <div className="container">
    Page not found?
  </div>
      );
    }
  }
}

export default App;
