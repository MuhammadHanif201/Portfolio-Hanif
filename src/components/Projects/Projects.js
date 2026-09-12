import React,{ useContext} from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import { ThemeContext } from '../../contexts/ThemeContext';
import { projectsData } from '../../data/projectsData'
import { HiArrowRight } from "react-icons/hi";

import './Projects.css'
import SingleProject from './SingleProject/SingleProject';

function Projects() {

    const { theme } = useContext(ThemeContext);


    const useStyles = makeStyles(() => ({
        viewAllBtn : {
            color: theme.secondary,
            backgroundColor: theme.primary,
            transition: 'all 0.2s ease',
            "&:hover": {
                color: theme.secondary,
                backgroundColor: theme.tertiary,
                transform: 'translateY(-2px)',
            }
        },
        viewArr : {
            color: theme.primary,
            backgroundColor: theme.secondary,
            width: '34px',
            height: '34px',
            padding: '0.45rem',
            fontSize: '1rem',
            borderRadius: '50%',
            cursor: 'pointer',
            transition: 'background-color 0.2s',
            "&:hover": {
                color: theme.primary,
                backgroundColor: theme.secondary,
            }
        },
    }));

    const classes = useStyles();

    return (
        <>
            {projectsData.length > 0 && (
                <div className="projects" id="projects" style={{backgroundColor: theme.secondary}}>
                    <div className="projects--header">
                        <span style={{color: theme.primary}}>Selected work</span>
                        <h2 style={{color: theme.primary}}>Projects</h2>
                        <p style={{color: theme.tertiary80}}>
                            Flutter apps with real users — from Figma designs to Google Play and App Store releases.
                        </p>
                    </div>
                    <div className="projects--body">
                        <div className="projects--bodyContainer">
                            {projectsData.slice(0, 4).map(project => (
                                <SingleProject
                                    theme={theme}
                                    key={project.id}
                                    id={project.id}
                                    name={project.projectName}
                                    desc={project.projectDesc}
                                    tags={project.tags}
                                    code={project.code}
                                    demo={project.demo}
                                    demoLabel={project.demoLabel}
                                    image={project.image}
                                />
                            ))}
                        </div>

                        {projectsData.length > 3 && (
                            <div className="projects--viewAll">
                                <Link to="/projects">
                                    <button className={classes.viewAllBtn}>
                                        View All
                                        <HiArrowRight className={classes.viewArr} />
                                    </button>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            )}

        </>
    )
}

export default Projects
