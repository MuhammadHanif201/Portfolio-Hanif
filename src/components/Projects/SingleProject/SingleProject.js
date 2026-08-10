import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FiExternalLink } from 'react-icons/fi';
import Fade from 'react-reveal/Fade';

import placeholder from '../../../assets/png/placeholder.png';
import './SingleProject.css';

function SingleProject({ id, name, desc, tags, code, demo, demoLabel, image, theme }) {
    const projectId = name.replace(/\s+/g, '-').toLowerCase();
    const displayDemoLabel = demoLabel || 'live demo';

    const useStyles = makeStyles((t) => ({
        iconBtn: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.55rem',
            minHeight: 44,
            borderRadius: 8,
            border: `2px solid ${theme.primary}`,
            backgroundColor: theme.primary,
            color: theme.secondary,
            padding: '0.7rem 0.95rem',
            fontFamily: 'var(--primaryFont)',
            fontSize: '0.92rem',
            fontWeight: 600,
            lineHeight: 1,
            textDecoration: 'none',
            transition: 'all 0.2s',
            '&:hover': {
                backgroundColor: theme.tertiary,
                border: `2px solid ${theme.tertiary}`,
                color: theme.secondary,
                transform: 'translateY(-2px)',
            },
        },
        icon: {
            fontSize: '1rem',
            transition: 'all 0.2s',
            '&:hover': {},
        },
    }));

    const classes = useStyles();

    return (
        <Fade bottom>
            <div
                key={id}
                className='singleProject'
                style={{
                    '--project-accent': theme.primary,
                    '--project-accent-soft': theme.primary50,
                    '--project-card-bg': theme.type === 'dark' ? theme.secondary70 : '#ffffff',
                    '--project-text': theme.tertiary,
                    '--project-muted': theme.tertiary80,
                    '--project-surface': theme.secondary,
                    backgroundColor: theme.type === 'dark' ? theme.secondary70 : '#ffffff',
                    borderColor: theme.primary30,
                }}
            >
                <div className='projectContent'>
                    <div className='project--imageWrap'>
                        <img src={image ? image : placeholder} alt={name} />
                    </div>
                    <div className='project--copy'>
                        <p className='project--eyebrow' style={{ color: theme.primary }}>
                            Featured build
                        </p>
                        <h2
                            id={projectId}
                            style={{ color: theme.tertiary }}
                        >
                            {name}
                        </h2>
                        <p
                            className='project--desc'
                            style={{
                                color: theme.tertiary80,
                            }}
                        >
                            {desc}
                        </p>
                    </div>
                    <ul
                        className='project--lang'
                        aria-label={`${name} technologies`}
                    >
                        {tags.map((tag) => (
                            <li key={tag} style={{ color: theme.tertiary }}>
                                {tag}
                            </li>
                        ))}
                    </ul>
                    <div className='project--showcaseBtn'>
                        <a
                            href={demo}
                            target='_blank'
                            rel='noreferrer'
                            className={classes.iconBtn}
                            aria-label={`View ${displayDemoLabel}`}
                        >
                            <span>View {displayDemoLabel}</span>
                            <FiExternalLink
                                id={`${projectId}-demo`}
                                className={classes.icon}
                                aria-hidden='true'
                            />
                        </a>
                        {/* <a
                            href={code}
                            target='_blank'
                            rel='noreferrer'
                            className={classes.iconBtn}
                            aria-labelledby={`${name
                                .replace(' ', '-')
                                .toLowerCase()} ${name
                                .replace(' ', '-')
                                .toLowerCase()}-code`}
                        >
                            <FaCode
                                id={`${name
                                    .replace(' ', '-')
                                    .toLowerCase()}-code`}
                                className={classes.icon}
                                aria-label='Code'
                            />
                        </a> */}
                    </div>
                </div>
            </div>
        </Fade>
    );
}

export default SingleProject;
