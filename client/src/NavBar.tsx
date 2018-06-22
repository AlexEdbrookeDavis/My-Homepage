import * as React from 'react';
import logo from './not-spirograph-7.png';

class NavBar extends React.Component<any, any> {

  constructor(props:any) {
    super(props);
  }


  public handleHomeClick = () => {
    const navPage = "home";
    this.props.navCallback(navPage);
  }

  public handleExperiencesClick = () => {
    const navPage = "Experiences";
    this.props.navCallback(navPage);
  }

  public handleAbilitiesClick = () => {
    const navPage = "abilities";
    this.props.navCallback(navPage);
  }

  public handleBioClick = () => {
    const navPage = "bio";
    this.props.navCallback(navPage);
  }

  public handleGameClick = () => {
    const navPage = "game";
    this.props.navCallback(navPage);
  }

  public render() {
    return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"/>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" onClick={this.handleHomeClick}>Home</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" onClick={this.handleExperiencesClick}>Experiences</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" onClick={this.handleAbilitiesClick}>Abilities</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" onClick={this.handleBioClick}>Bio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={this.handleGameClick}>Game</a>
            </li>
          </ul>
        </div>
      </nav>
        <header className="App-header">
          <div className="page-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <h1 className="App-title">ALEX DAVIS</h1>
          </div>
        </header>
    </div>
    );
  }
}

export default NavBar;
