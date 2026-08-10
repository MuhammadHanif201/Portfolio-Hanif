import React,{useContext} from 'react';
import Fade from 'react-reveal/Fade';

import { ThemeContext } from '../../../contexts/ThemeContext';

import './SingleService.css'


function SingleService({id, title, icon, description}) {

    const { theme } = useContext(ThemeContext);
    return (
        <Fade bottom>
            <div key={id} className="single-service" style={{backgroundColor:theme.primary400}}>
                <div className="service-content"  style={{color:theme.secondary}}>
                    <i className="service-icon" style={{backgroundColor:theme.secondary, color:theme.primary}}>{icon}</i>
                    <h4  style={{color:theme.secondary}}>{title}</h4>
                    <p className="service-desc" style={{color:theme.secondary70}}>{description}</p>
                </div>
            </div>
        </Fade>
    )
}

export default SingleService
