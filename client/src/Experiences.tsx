import * as React from 'react';

class NavBar extends React.Component<any, any> {

  constructor(props:any) {
    super(props);
  }

  public render() {
    return (
<div>EDUCATION
<p/>
Portland State University, Portland, Oregon – GPA 3.89 
•	Master of Science: Computer Science (Sept 2016 – March 2018)
<br/>
Oregon State University, Corvallis, Oregon – GPA 3.6 
•	Bachelor of Science: Computer Science, Systems (Sept 2013 – June 2016) 
•	Minor: Mathematics 

<p/>
My most recent grad courses have been in Java, full stack development, machine learning, artificial intelligence, visual computing, and algorithm design and analysis.
<p/>

JOBS
<p/> 
•	September 2017 – September 2017 (Contract: One month): Wavelength References, Inc., Corvallis, OR. Wrote communications and control software for an infrared tunable laser. This included communicating with onboard ADCs and DACs and controlling laser frequency sweeps using polynomial equations. 
<br/>
•	December 2016 – March 2017 (One school term): Hired to help start PSU’s accelerated computing program using Intel’s Xeon Phi parallel high-performance computing technology. Installed and configured Xeon Phi Knights Landing processor and Knights Corner co-processor hardware, drivers, libraries, and compilers. Provided student support.
<br/>
•	June 2016 – Sept 2016 (Summer Intern): Hewlett Packard, Corvallis, OR. Supportability Tools Software Engineering. Developed a web tool using Ruby on Rails for visualizing status in a database. This included the use of graphs, tables, and estimations. Worked on project using Agile practices.
<p/>
PROJECTS
<p/>
•	Small projects on GitHub: https://github.com/AlexEdbrookeDavis
<br/>
•	October 2015 – June 2016: Year-long Senior Software Engineering Project – 3-D Vector Visualization: rendering defined scientific models and researching, brainstorming, and developing algorithms for their visualization.
<br/>
•	Summer 2015: Developed software to control a force versus distance test platform to be used for testing resistance in mechanical movements. The device controls linear motion, integrates data from a load cell, and outputs correlated results for analysis. Development was done in C, utilizing the parapin library to facilitate the use of individual pins of a parallel port as a means to communicate to the stepper motor used on the testing platform. The multithreaded code uses mutexes for interthread coordination.
<p/>
</div>
    );
  }
}

export default NavBar;
