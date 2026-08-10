// import React, { useContext, useState } from 'react';
// import { Snackbar, IconButton, SnackbarContent } from '@material-ui/core';
// import CloseIcon from '@material-ui/icons/Close';
// import isEmail from 'validator/lib/isEmail';
// import emailjs from 'emailjs-com';
// import { makeStyles } from '@material-ui/core/styles';
// import { IoLogoWhatsapp } from "react-icons/io";
// import {
//     FaTwitter,
//     FaLinkedinIn,
//     FaGithub,
//     FaStackOverflow,
//     FaInstagram,  
//     FaFacebook  
// } from 'react-icons/fa';
// import {MdOutlineMailOutline, } from "react-icons/md";
// import { AiOutlineSend, AiOutlineCheckCircle } from 'react-icons/ai';
// import { FiPhone, FiAtSign } from 'react-icons/fi';
// import { HiOutlineLocationMarker } from 'react-icons/hi';

// import { ThemeContext } from '../../contexts/ThemeContext';

// import { socialsData } from '../../data/socialsData';
// import { contactsData } from '../../data/contactsData';
// import './Contacts.css';

// function Contacts() {
//     const [open, setOpen] = useState(false);

//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [message, setMessage] = useState('');

//     const [success, setSuccess] = useState(false);
//     const [errMsg, setErrMsg] = useState('');

//     const { theme } = useContext(ThemeContext);

//     const handleClose = (event, reason) => {
//         if (reason === 'clickaway') {
//             return;
//         }

//         setOpen(false);
//     };

//     const useStyles = makeStyles((t) => ({
//         input: {
//             border: `4px solid ${theme.primary80}`,
//             backgroundColor: `${theme.secondary}`,
//             color: `${theme.tertiary}`,
//             fontFamily: 'var(--primaryFont)',
//             fontWeight: 500,
//             transition: 'border 0.2s ease-in-out',
//             '&:focus': {
//                 border: `4px solid ${theme.primary600}`,
//             },
//         },
//         message: {
//             border: `4px solid ${theme.primary80}`,
//             backgroundColor: `${theme.secondary}`,
//             color: `${theme.tertiary}`,
//             fontFamily: 'var(--primaryFont)',
//             fontWeight: 500,
//             transition: 'border 0.2s ease-in-out',
//             '&:focus': {
//                 border: `4px solid ${theme.primary600}`,
//             },
//         },
//         label: {
//             backgroundColor: `${theme.secondary}`,
//             color: `${theme.primary}`,
//             fontFamily: 'var(--primaryFont)',
//             fontWeight: 600,
//             fontSize: '0.9rem',
//             padding: '0 5px',
//             transform: 'translate(25px,50%)',
//             display: 'inline-flex',
//         },
//         socialIcon: {
//             width: '45px',
//             height: '45px',
//             borderRadius: '50%',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             fontSize: '21px',
//             backgroundColor: theme.primary,
//             color: theme.secondary,
//             transition: '250ms ease-in-out',
//             '&:hover': {
//                 transform: 'scale(1.1)',
//                 color: theme.secondary,
//                 backgroundColor: theme.tertiary,
//             },
//         },
//         detailsIcon: {
//             backgroundColor: theme.primary,
//             color: theme.secondary,
//             borderRadius: '50%',
//             width: '45px',
//             height: '45px',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             fontSize: '23px',
//             transition: '250ms ease-in-out',
//             flexShrink: 0,
//             '&:hover': {
//                 transform: 'scale(1.1)',
//                 color: theme.secondary,
//                 backgroundColor: theme.tertiary,
//             },
//         },
//         submitBtn: {
//             backgroundColor: theme.primary,
//             color: theme.secondary,
//             transition: '250ms ease-in-out',
//             '&:hover': {
//                 transform: 'scale(1.08)',
//                 color: theme.secondary,
//                 backgroundColor: theme.tertiary,
//             },
//         },
//     }));

//     const classes = useStyles();
//     const handleContactForm = (e) => {
//         e.preventDefault();
      
//         if (name && email && message) {
//           if (isEmail(email)) {
//             const responseData = {
//               from_name: name,
//               reply_to: email,
//               message: message,
//             };
      
             
//             emailjs.send('service_8uiyaat', 'template_rmuratn', responseData, 'zQYEdLNrhRoeyeYmm')
//               .then((response) => {
//                 console.log('SUCCESS!', response.status, response.text);
//                 setSuccess(true);
//                 setErrMsg('');
//                 setName('');
//                 setEmail('');
//                 setMessage('');
//                 setOpen(false);
//               })
//               .catch((err) => {
//                 console.log('FAILED', err);
//                 setErrMsg('Error sending email. Please try again later.');
//                 setOpen(true);
//               });
//           } else {
//             setErrMsg('Invalid email');
//             setOpen(true);
//           }
//         } else {
//           setErrMsg('Enter all the fields');
//           setOpen(true);
//         }
//       };
      
//     return (
//         <div
//             className='contacts'
//             id='contacts'
//             style={{ backgroundColor: theme.secondary }}
//         >
//             <div className='contacts--container'>
//                 <h1 style={{ color: theme.primary }}>Contacts</h1>
//                 <div className='contacts-body'>
//                     <div className='contacts-form'>
//                     <div
//                         className="calendly-inline-widget input-container"
//                         data-url="https://calendly.com/husnain4work/30min"
//                         ></div>
//                         <script
//                         type="text/javascript"
//                         src="https://assets.calendly.com/assets/external/widget.js"
//                         async
//                             ></script>



//                         {/* <form onSubmit={handleContactForm}>
//                             <div className='input-container'>
//                                 <label htmlFor='Name' className={classes.label}>
//                                     Name
//                                 </label>
//                                 <input
//                                     placeholder='Husnain Hashmi'
//                                     value={name}
//                                     onChange={(e) => setName(e.target.value)}
//                                     type='text'
//                                     name='Name'
//                                     className={`form-input ${classes.input}`}
//                                 />
//                             </div>
//                             <div className='input-container'>
//                                 <label
//                                     htmlFor='Email'
//                                     className={classes.label}
//                                 >
//                                     Email
//                                 </label>
//                                 <input
//                                     placeholder='husnain4work@gmail.com'
//                                     value={email}
//                                     onChange={(e) => setEmail(e.target.value)}
//                                     type='email'
//                                     name='Email'
//                                     className={`form-input ${classes.input}`}
//                                 />
//                             </div>
//                             <div className='input-container'>
//                                 <label
//                                     htmlFor='Message'
//                                     className={classes.label}
//                                 >
//                                     Message
//                                 </label>
//                                 <textarea
//                                     placeholder='Type your message....'
//                                     value={message}
//                                     onChange={(e) => setMessage(e.target.value)}
//                                     type='text'
//                                     name='Message'
//                                     className={`form-message ${classes.message}`}
//                                 />
//                             </div>

//                             <div className='submit-btn'>
//                                 <button
//                                     type='submit'
//                                     className={classes.submitBtn}
//                                 >
//                                     <p>{!success ? 'Send' : 'Sent'}</p>
//                                     <div className='submit-icon'>
//                                         <AiOutlineSend
//                                             className='send-icon'
//                                             style={{
//                                                 animation: !success
//                                                     ? 'initial'
//                                                     : 'fly 0.8s linear both',
//                                                 position: success
//                                                     ? 'absolute'
//                                                     : 'initial',
//                                             }}
//                                         />
//                                         <AiOutlineCheckCircle
//                                             className='success-icon'
//                                             style={{
//                                                 display: !success
//                                                     ? 'none'
//                                                     : 'inline-flex',
//                                                 opacity: !success ? '0' : '1',
//                                             }}
//                                         />
//                                     </div>
//                                 </button>
//                             </div>
//                         </form> */}
//                         <Snackbar
//                             anchorOrigin={{
//                                 vertical: 'top',
//                                 horizontal: 'center',
//                             }}
//                             open={open}
//                             autoHideDuration={4000}
//                             onClose={handleClose}
//                         >
//                             <SnackbarContent
//                                 action={
//                                     <React.Fragment>
//                                         <IconButton
//                                             size='small'
//                                             aria-label='close'
//                                             color='inherit'
//                                             onClick={handleClose}
//                                         >
//                                             <CloseIcon fontSize='small' />
//                                         </IconButton>
//                                     </React.Fragment>
//                                 }
//                                 style={{
//                                     backgroundColor: theme.primary,
//                                     color: theme.secondary,
//                                     fontFamily: 'var(--primaryFont)',
//                                 }}
//                                 message={errMsg}
//                             />
//                         </Snackbar>
//                     </div>

//                     <div className='contacts-details'>
//                         <a
//                             href={`mailto:${contactsData.email}`}
//                             className='personal-details'
//                         >
//                             <div className={classes.detailsIcon}>
//                                 <FiAtSign />
//                             </div>
//                             <p style={{ color: theme.tertiary }}>
//                                 {contactsData.email}
//                             </p>
//                         </a>
//                         <a
//                             href={`tel:${contactsData.phone}`}
//                             className='personal-details'
//                         >
//                             <div className={classes.detailsIcon}>
//                                 <FiPhone />
//                             </div>
//                             <p style={{ color: theme.tertiary }}>
//                                 {contactsData.phone}
//                             </p>
//                         </a>
//                         <div className='personal-details'>
//                             <div className={classes.detailsIcon}>
//                                 <HiOutlineLocationMarker />
//                             </div>
//                             <p style={{ color: theme.tertiary }}>
//                                 {contactsData.address}
//                             </p>
//                         </div>

//                         <div className='socialmedia-icons'>
//                             {socialsData.whatsapp && (
//                                 <a
//                                     href={socialsData.whatsapp}
//                                     target='_blank'
//                                     rel='noreferrer'
//                                     className={classes.socialIcon}
//                                 >
//                                     <IoLogoWhatsapp aria-label='Whatsapp' />
//                                 </a>
//                             )}
//                             {/* {socialsData.twitter && (
//                                 <a
//                                     href={socialsData.twitter}
//                                     target='_blank'
//                                     rel='noreferrer'
//                                     className={classes.socialIcon}
//                                 >
//                                     <FaTwitter aria-label='Twitter' />
//                                 </a>
//                             )} */}
//                             {socialsData.github && (
//                                 <a
//                                     href={socialsData.github}
//                                     target='_blank'
//                                     rel='noreferrer'
//                                     className={classes.socialIcon}
//                                 >
//                                     <FaGithub aria-label='GitHub' />
//                                 </a>
//                             )}
//                             {/* {socialsData.facebook && (
//                                 <a
//                                     href={socialsData.facebook}
//                                     target='_blank'
//                                     rel='noreferrer'
//                                     className={classes.socialIcon}
//                                 >
//                                     <FaFacebook aria-label='FaceBook' />
//                                 </a>
//                             )} */}
//                             {socialsData.linkedIn && (
//                                 <a
//                                     href={socialsData.linkedIn}
//                                     target='_blank'
//                                     rel='noreferrer'
//                                     className={classes.socialIcon}
//                                 >
//                                     <FaLinkedinIn aria-label='LinkedIn' />
//                                 </a>
//                             )}
//                             {/* {socialsData.instagram && (
//                                 <a
//                                     href={socialsData.instagram}
//                                     target='_blank'
//                                     rel='noreferrer'
//                                     className={classes.socialIcon}
//                                 >
//                                     <FaInstagram aria-label='Instagram' />
//                                 </a>
//                             )} */}
//                             {socialsData.gmail && (
//                                 <a
//                                     href={socialsData.gmail}
//                                     target='_blank'
//                                     rel='noreferrer'
//                                     className={classes.socialIcon}
//                                 >
//                                     <MdOutlineMailOutline aria-label='Gmail' />
//                                 </a>
//                             )}
//                             {/* {socialsData.stackOverflow && (
//                                 <a
//                                     href={socialsData.stackOverflow}
//                                     target='_blank'
//                                     rel='noreferrer'
//                                     className={classes.socialIcon}
//                                 >
//                                     <FaStackOverflow aria-label='Stack Overflow' />
//                                 </a>
//                             )} */}
                         
                           
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <img
//                 src={theme.contactsimg}
//                 alt='contacts'
//                 className='contacts--img'
//             />
//         </div>
//     );
// }

// export default Contacts;



import React, { useContext, useEffect, useRef, useState } from 'react';
import { Snackbar, IconButton, SnackbarContent } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
// import isEmail from 'validator/lib/isEmail';
// import emailjs from 'emailjs-com';
import { makeStyles } from '@material-ui/core/styles';
import { IoLogoWhatsapp } from "react-icons/io";
import {
    // FaTwitter,
    FaLinkedinIn,
    FaGithub,
    // FaStackOverflow,
    // FaInstagram,
    // FaFacebook
} from 'react-icons/fa';
import { MdOutlineMailOutline } from "react-icons/md";
import { FiPhone, FiAtSign } from 'react-icons/fi';
import { HiOutlineLocationMarker } from 'react-icons/hi';

import { ThemeContext } from '../../contexts/ThemeContext';
import { socialsData } from '../../data/socialsData';
import { contactsData } from '../../data/contactsData';
import './Contacts.css';

function Contacts() {
    const [open, setOpen] = useState(false);
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [message, setMessage] = useState('');
    // const [success, setSuccess] = useState(false);
    const [errMsg] = useState('');
    const { theme } = useContext(ThemeContext);

    const calendlyRef = useRef();

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        calendlyRef.current.appendChild(script);
    }, []);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') return;
        setOpen(false);
    };

    const useStyles = makeStyles(() => ({
        input: {
            border: `4px solid ${theme.primary80}`,
            backgroundColor: `${theme.secondary}`,
            color: `${theme.tertiary}`,
            fontFamily: 'var(--primaryFont)',
            fontWeight: 500,
            transition: 'border 0.2s ease-in-out',
            '&:focus': {
                border: `4px solid ${theme.primary600}`,
            },
        },
        message: {
            border: `4px solid ${theme.primary80}`,
            backgroundColor: `${theme.secondary}`,
            color: `${theme.tertiary}`,
            fontFamily: 'var(--primaryFont)',
            fontWeight: 500,
            transition: 'border 0.2s ease-in-out',
            '&:focus': {
                border: `4px solid ${theme.primary600}`,
            },
        },
        label: {
            backgroundColor: `${theme.secondary}`,
            color: `${theme.primary}`,
            fontFamily: 'var(--primaryFont)',
            fontWeight: 600,
            fontSize: '0.9rem',
            padding: '0 5px',
            transform: 'translate(25px,50%)',
            display: 'inline-flex',
        },
        socialIcon: {
            width: '45px',
            height: '45px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '21px',
            backgroundColor: theme.primary,
            color: theme.secondary,
            transition: '250ms ease-in-out',
            '&:hover': {
                transform: 'scale(1.1)',
                color: theme.secondary,
                backgroundColor: theme.tertiary,
            },
        },
        detailsIcon: {
            backgroundColor: theme.primary,
            color: theme.secondary,
            borderRadius: '50%',
            width: '45px',
            height: '45px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '23px',
            transition: '250ms ease-in-out',
            flexShrink: 0,
            '&:hover': {
                transform: 'scale(1.1)',
                color: theme.secondary,
                backgroundColor: theme.tertiary,
            },
        },
        submitBtn: {
            backgroundColor: theme.primary,
            color: theme.secondary,
            transition: '250ms ease-in-out',
            '&:hover': {
                transform: 'scale(1.08)',
                color: theme.secondary,
                backgroundColor: theme.tertiary,
            },
        },
    }));

    const classes = useStyles();
    const calendlyUrl = contactsData.calendly
        ? `${contactsData.calendly}?hide_event_type_details=1&hide_gdpr_banner=1`
        : '';

    // const handleContactForm = (e) => {
    //     e.preventDefault();

    //     if (name && email && message) {
    //         if (isEmail(email)) {
    //             const responseData = {
    //                 from_name: name,
    //                 reply_to: email,
    //                 message: message,
    //             };

    //             emailjs
    //                 .send('service_8uiyaat', 'template_rmuratn', responseData, 'zQYEdLNrhRoeyeYmm')
    //                 .then((response) => {
    //                     console.log('SUCCESS!', response.status, response.text);
    //                     setSuccess(true);
    //                     setErrMsg('');
    //                     setName('');
    //                     setEmail('');
    //                     setMessage('');
    //                     setOpen(false);
    //                 })
    //                 .catch((err) => {
    //                     console.log('FAILED', err);
    //                     setErrMsg('Error sending email. Please try again later.');
    //                     setOpen(true);
    //                 });
    //         } else {
    //             setErrMsg('Invalid email');
    //             setOpen(true);
    //         }
    //     } else {
    //         setErrMsg('Enter all the fields');
    //         setOpen(true);
    //     }
    // };

    return (
        <div className='contacts' id='contacts' style={{ backgroundColor: theme.secondary }}>
            <div className='contacts--container'>
                <h1 style={{ color: theme.primary }}>Contacts</h1>
                <div className='contacts-body'>
                    <div className='contacts-form'>
                        <div
                            ref={calendlyRef}
                            className="calendly-inline-widget input-container"
                            data-url={calendlyUrl}
                            style={{ minWidth: '320px', height: '700px' }}
                        ></div>

                        <Snackbar
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'center',
                            }}
                            open={open}
                            autoHideDuration={4000}
                            onClose={handleClose}
                        >
                            <SnackbarContent
                                action={
                                    <React.Fragment>
                                        <IconButton
                                            size='small'
                                            aria-label='close'
                                            color='inherit'
                                            onClick={handleClose}
                                        >
                                            <CloseIcon fontSize='small' />
                                        </IconButton>
                                    </React.Fragment>
                                }
                                style={{
                                    backgroundColor: theme.primary,
                                    color: theme.secondary,
                                    fontFamily: 'var(--primaryFont)',
                                }}
                                message={errMsg}
                            />
                        </Snackbar>
                    </div>

                    <div className='contacts-details'>
                        <a href={`mailto:${contactsData.email}`} className='personal-details'>
                            <div className={classes.detailsIcon}>
                                <FiAtSign />
                            </div>
                            <p style={{ color: theme.tertiary }}>{contactsData.email}</p>
                        </a>
                        <a href={`tel:${contactsData.phone}`} className='personal-details'>
                            <div className={classes.detailsIcon}>
                                <FiPhone />
                            </div>
                            <p style={{ color: theme.tertiary }}>{contactsData.phone}</p>
                        </a>
                        <div className='personal-details'>
                            <div className={classes.detailsIcon}>
                                <HiOutlineLocationMarker />
                            </div>
                            <p style={{ color: theme.tertiary }}>{contactsData.address}</p>
                        </div>

                        <div className='socialmedia-icons'>
                            {socialsData.whatsapp && (
                                <a href={socialsData.whatsapp} target='_blank' rel='noreferrer' className={classes.socialIcon}>
                                    <IoLogoWhatsapp aria-label='Whatsapp' />
                                </a>
                            )}
                            {socialsData.github && (
                                <a href={socialsData.github} target='_blank' rel='noreferrer' className={classes.socialIcon}>
                                    <FaGithub aria-label='GitHub' />
                                </a>
                            )}
                            {socialsData.linkedIn && (
                                <a href={socialsData.linkedIn} target='_blank' rel='noreferrer' className={classes.socialIcon}>
                                    <FaLinkedinIn aria-label='LinkedIn' />
                                </a>
                            )}
                            {socialsData.gmail && (
                                <a href={socialsData.gmail} target='_blank' rel='noreferrer' className={classes.socialIcon}>
                                    <MdOutlineMailOutline aria-label='Gmail' />
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <img src={theme.contactsimg} alt='contacts' className='contacts--img' />
        </div>
    );
}

export default Contacts;
