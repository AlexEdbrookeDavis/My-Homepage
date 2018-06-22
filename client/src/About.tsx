import * as React from 'react';
// import Images from './Images'

class NavBar extends React.Component<any, any> {

  constructor(props:any) {
    super(props);
  }

  public render() {
    return (
        <div className="container">
          <div className="row">
            <div className="col-sm">
              TODO
            </div>
            <div className="col-sm">
I recently graduated with a MS in Computer Science and am looking for a software position where I can learn, collaborate, and grow.
<p/>
My strongest programming languages are C/C++ and Java.
<p/>
For fun, I play D&D every Saturday with friends, enjoy hiking, love the zoo, and have been a board game lover from a young age. The more complicated the game, the better.
            </div>
          </div>
        </div>
    );
  }
}

export default NavBar;
