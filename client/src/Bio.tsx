import * as React from 'react';

class NavBar extends React.Component<any, any> {

  constructor(props:any) {
    super(props);
  }

  public render() {
    return (
<div>
PERSONAL HISTORY
<p/>
•	Sailed the Caribbean with my family from age 9 through 13.
<br/>
•	Did an early college/high school program at Portland Community College.
<br/>
•	Became an Eagle Scout. 
<br/>
•	Went to OSU for my Bachelor’s Degree.
<br/>
•	Went to PSU for my Master’s Degree.
<p/>
</div>
    );
  }
}

export default NavBar;
