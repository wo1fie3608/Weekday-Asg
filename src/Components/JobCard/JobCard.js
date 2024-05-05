import React from 'react';
import { ListItemText, Card, CardContent, Typography, List, ListItem, Chip, Button } from '@mui/material';
import styles from './JobCard.module.css'; // Import the CSS file with CSS Modules
import { setJobForClient } from '../../services/utils';

const JobCard = (props) => {
    const cardStyle = {
        display: 'flex',
        alignItems: 'flex-start',
        borderRadius: '8px',
        border: '1px solid #ccc',
        boxShadow: 'none !important',
        height:'100%'
    };
    const jobDetails = props?.jobDetails || setJobForClient(null)
    return (
        <Card style={cardStyle}>
            <CardContent style={{ display: 'flex', justifyContent: 'left', flexDirection: 'column', gap: '0.1rem' }}>
                <Chip label={jobDetails.postSince} size="small" variant="outlined" style={{ width: 'fit-content', marginBottom: '1rem' }} />
                <div>
                    <div style={{ display: 'flex' }}>
                        <div className={styles.jobImageContainer} >
                            <img src={jobDetails.logo} alt="Job" className={styles.jobImage} />
                        </div>
                        <div>
                            <Typography textAlign="left" variant="body2" color="textSecondary" textTransform="capitalize" gutterBottom>
                                {jobDetails.companyName}
                            </Typography>
                            <Typography component="p" variant="h6" textAlign="left" textTransform="capitalize">
                                {jobDetails.role}
                            </Typography>
                        </div>
                    </div>
                    <Typography textAlign="left" component="p" style={{ marginLeft: '30px' }} textTransform="capitalize">
                        <b>{jobDetails.location}</b>
                    </Typography>
                    <Typography textAlign="left" component="p" style={{ color: 'rgb(77, 89, 106)', fontWeight: 600, display: 'flex', gap: '0.25rem', alignItems: 'center' }}>
                        Estimated Salary: {jobDetails.minSalary}-{jobDetails.maxSalary} LPA
                        <img src="https://cdn-icons-png.flaticon.com/128/1828/1828644.png" class="replaced-svg" height="15px" width="15px" />
                    </Typography>

                    {/* About Company */}
                    <Typography component="p" color="HighlightText" textAlign="left">
                        <b>About Company:</b>
                    </Typography>
                    <div className={styles['about-cmp-wrap']}>
                        <p style={{ overflow: 'hidden' }} className={styles['about-cmp-text']}>
                            {jobDetails.details}
                        </p>
                        <div className={styles['show-more-cta']}>
                            <a>View Job</a>
                        </div>
                    </div>

                    <Typography className={styles['left-align']} variant="body2" color="textSecondary">
                        Minimum Experience
                        <br />
                        <span style={{ color: 'black', fontSize: '1.2em' }}>6 years</span>
                    </Typography>
                    <div class={styles['btn-grp-cta']}>
                        <Button variant="contained" color="success">Easy Apply</Button>
                        <Button variant="contained" color='primary'>Unlock Referall Asks</Button>
                    </div>
                </div>

            </CardContent>
        </Card>
    );
};
export default JobCard;
