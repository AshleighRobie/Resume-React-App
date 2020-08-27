import React, { Component } from 'react';

/*
    Work experience component
*/

class Work extends Component {
    render(){
        return(
            <div>
                <h1>Work Experience</h1>
                <div>
                    <h2>Laboratory Technician | Neogenomics - Carlsbad, CA </h2>
                    <h3>July 2020 - Present</h3>
                    <div>
                        Process COVID tests using the Thermo Fisher and Fluidigm assay. 
                    </div>
                </div>

                <div>
                    <h2>Help Desk Specialist | Humboldt State University - Arcata, CA </h2>
                    <h3>March 2018 - May 2020</h3>
                    <div>
                        Manned the Humboldt State Help Desk and assisted customers via phone,
                        email, and walk-ups. I solved technology related challenges with both 
                        Windows and Mac devices. 
                    </div>
                </div>

                <div>
                    <h2> Intern | Buckwalter Vet Clinic - Bluffton, SC</h2>
                    <h3>Summer 2017</h3>
                    <div>
                    Participated in surgeries to include Anterior Cruciate Ligament repair; 
                    installation of a feeding tube; spay and neuters. Also responsible for 
                    obtaining and processing fecal samples for testing, vaccine preparation.
                    </div>
                </div>
              
            
            </div>
        )
    }
}

export default Work;