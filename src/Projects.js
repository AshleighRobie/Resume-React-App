import React, { Component } from 'react';

/*
    Project component
*/

class Projects extends Component{
    render() {
        return(
            <div>
                <h1>Projects</h1>
                <div>
                    <h2>First Place in Annual Hackathon</h2>
                    Created a website and Android application to connect local 
                    businesses with computer science students at HSU using React.js. 
                    Allowed businesses to post job opportunities for students.
                </div>

                <div>
                    <h2>Software Engineering Project</h2>
                    Created a website application to suggest outdoor activities and 
                    location based on user’s answers to questionnaire using Prolog.
                </div>

                <div>
                    <h2>Machine Learning Directed Study</h2>
                    Machine learning to identify pneumonia using chest x-rays using 
                    Neural Nets with TensorFlow and Google Colab
                </div>

                <div>
                    <h2>Research in Cell Tissue Culture Lab</h2>
                    Before quarantine, I was training to work in HSU’s Cell Tissue 
                    Culture lab. My planned research was creating CRISPRs for NPC1 
                    and 2 to its effects on various metabolic pathways.
                </div>



            </div>
        );
    }
}

export default Projects;