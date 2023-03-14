import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import '../css/Faq.css';
export const Faq = () => {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className='faq-section'>
            <div className='faq-heading-container'>
                <div className='faq-heading'>
                    <h3>FAQs</h3>
                </div>
                <div className='faq-paragraph'>
                    <p>short description here blorem blipsum dolor sit bamat      minim mollit non deserunt ullamco lorem ipsum bolor sit amat est.
                    </p>
                </div>
            </div>
            <div className='accordian-container'>
                <div className='left-accordian'>
                    <div>
                        <Accordion sx={{ minHeight: '6vw', borderTop: '1px solid gainsboro', borderRadius: 'none' }} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                <div className='faq-no'>
                                    <Typography >
                                        1
                                    </Typography>

                                </div>
                                <Typography sx={{ color: 'text.secondary', marginLeft: '10%' }}>I am an accordion</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                                    Aliquam eget maximus est, id ignissim quam.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                    </div>
                    <div>
                        <Accordion sx={{ minHeight: '6vw', borderTop: '1px solid gainsboro', borderRadius: 'none' }} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2bh-content"
                                id="panel2bh-header"
                            >

                                <div className='faq-no'>
                                    <Typography >
                                        2
                                    </Typography>

                                </div>
                                <Typography sx={{ color: 'text.secondary', marginLeft: '10%' }}>
                                    You are currently not an owner
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
                                    varius pulvinar diam eros in elit. Pellentesque convallis laoreet
                                    laoreet.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                    </div>
                    <div>
                        <Accordion sx={{ minHeight: '6vw', borderTop: '1px solid gainsboro', borderRadius: 'none' }} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel3bh-content"
                                id="panel3bh-header"
                            >
                                <div className='faq-no'>
                                    <Typography >
                                        3
                                    </Typography>

                                </div>                                <Typography sx={{ color: 'text.secondary', marginLeft: '10%' }}>
                                    Filtering has been entirely disabled for whole web server
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                                    amet egestas eros, vitae egestas augue. Duis vel est augue.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                    </div>
                    <div>
                        <Accordion sx={{ minHeight: '6vw', borderTop: '1px solid gainsboro', borderRadius: 'none' }} expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel4bh-content"
                                id="panel4bh-header"
                            >
                                <div className='faq-no'>
                                    <Typography >
                                        4
                                    </Typography>
                                </div>
                                <Typography sx={{ color: 'text.secondary', marginLeft: '10%' }}>
                                    Filtering has been entirely disabled for whole web server
                                </Typography>

                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                                    amet egestas eros, vitae egestas augue. Duis vel est augue.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>

                </div>
                <div className='right-accordian'>
                    <div>
                        <Accordion sx={{ minHeight: '6vw', borderTop: '1px solid gainsboro', borderRadius: 'none' }} expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                <div className='faq-no'>
                                    <Typography >
                                        5
                                    </Typography>

                                </div>                                <Typography sx={{ color: 'text.secondary', marginLeft: '10%' }}>I am an accordion</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                                    Aliquam eget maximus est, id ignissim quam.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                    </div>
                    <div>
                        <Accordion sx={{ minHeight: '6vw', borderTop: '1px solid gainsboro', borderRadius: 'none' }} expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2bh-content"
                                id="panel2bh-header"
                            >
                                <div className='faq-no'>
                                    <Typography >
                                        6
                                    </Typography>

                                </div>
                                <Typography sx={{ color: 'text.secondary', marginLeft: '10%' }}>
                                    You are currently not an owner
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
                                    varius pulvinar diam eros in elit. Pellentesque convallis laoreet
                                    laoreet.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                    </div>
                    <div>
                        <Accordion sx={{ minHeight: '6vw', borderTop: '1px solid gainsboro', borderRadius: 'none' }} expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel3bh-content"
                                id="panel3bh-header"
                            >
                                <div className='faq-no'>
                                    <Typography >
                                        7
                                    </Typography>

                                </div>
                                <Typography sx={{ color: 'text.secondary', marginLeft: '10%' }}>
                                    Filtering has been entirely disabled for whole web server
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                                    amet egestas eros, vitae egestas augue. Duis vel est augue.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                    </div>
                    <div>
                        <Accordion sx={{ minHeight: '6vw', borderTop: '1px solid gainsboro', borderRadius: 'none' }} expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel4bh-content"
                                id="panel4bh-header"
                            >
                                <div className='faq-no'>
                                    <Typography >
                                        8
                                    </Typography>

                                </div>
                                <Typography sx={{ color: 'text.secondary', marginLeft: '10%' }}>
                                    Filtering has been entirely disabled for whole web server
                                </Typography>

                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                                    amet egestas eros, vitae egestas augue. Duis vel est augue.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>


                    </div>
                </div>
            </div>
        </div>
    )
}

