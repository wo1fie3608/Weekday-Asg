import React from 'react';
import { ListItemText, Card, CardContent, Typography, List, ListItem, Chip, Button } from '@mui/material';
import styles from './JobCard.module.css'; // Import the CSS file with CSS Modules

const JobListing = () => {
    const cardStyle = {
        display: 'flex', // Make the card content flex container
        alignItems: 'flex-start', // Align 
    };

    return (
        <Card style={cardStyle}>
            <CardContent style={{ display: 'flex', justifyContent: 'left', flexDirection: 'column', gap: '0.1rem' }}>
                <Chip label="Posted 3 days ago" size="small" variant="outlined" style={{ width: 'fit-content', marginBottom:'1rem' }} />
                <div style={{ display: 'flex' }}>
                    <div className={styles.jobImageContainer} >
                        <img src="your-image-url.jpg" alt="Job" className={styles.jobImage} />
                    </div>
                    <div>
                        <Typography textAlign="left" variant="body2" color="textSecondary" gutterBottom>
                            EMA
                        </Typography>
                        <Typography component="p" variant="h6" textAlign="left">
                            Software Productivity Engineer
                        </Typography>
                    </div>
                </div>
                <Typography textAlign="left" component="p" style={{ marginLeft: '30px' }}>
                    <b>Bongalore</b>
                </Typography>
                <Typography textAlign="left" component="p" style={{ color: 'rgb(77, 89, 106)', fontWeight: 600, display:'flex', gap:'0.25rem', alignItems:'center' }}>
                    Estimated Salary: 230-50 LPA
                    <img src="https://cdn-icons-png.flaticon.com/128/1828/1828644.png" class="replaced-svg" height="15px" width="15px"/>
                </Typography>

                {/* About Company */}
                <Typography component="p" color="HighlightText" textAlign="left">
                    <b>About Company:</b>
                </Typography>
                <div className={styles['about-cmp-wrap']}>
                    <p style={{overflow:'hidden'}} className={styles['about-cmp-text']}>
                        Job Description
                        About Company:

                        There is no field or industry today that is moving as fast as technology.  It’s changed how we live, work, and connect with others – it’s also changed the pressure on software teams. SmartBear provides a portfolio of trusted tools that give software development teams around the world visibility into end-to-end quality through test management and automation, API development lifecycle, and application stability, ensuring each software release is better than the last.

                        Award-winning and industry favorite tools including SwaggerHub, TestComplete, Bugsnag, ReadyAPI, Zephyr, and Pactflow, among others. Trusted by over 16 million developers, testers, and software engineers at 32,000+ organizations – including world-renowned innovators like Adobe, JetBlue, FedEx, and Microsoft.

                        With an active peer-to-peer community, we meet customers where they are to help make our technology-driven world a better place. SmartBear is committed to ethical corporate practices and social responsibility, promoting good in all the communities we serve.

                        Interested in attending SmartBear Connect? Register today! https://smartbear.com/connect/


                        About Role:

                        Job Description

                        The Zephyr for Jira product is undergoing a transformation to better align our products to the end users’ requirements while maintaining our market leading position and strong brand reputation across the Test Management Vertical. As a Senior Software Engineer, you will be integral part of this transformation and will be solving challenging business problems and build highly scalable and available applications that provide an excellent user experience. Here are key responsibilities of the role –

                        You will write code per product requirements and create new products.You will design, document and implement new systems, as well as enhancements and modifications to existing software with code that complies with design specifications and meets security and Java best practices.You will interact with both business and technical stakeholders to deliver high quality products and services that meet business requirements and expectations while applying the latest available tools and technologyDevelop scalable real-time low-latency data egress/ingress solutions in an agile delivery methodYou will create automated tests, contribute to system testing, follow agile mode of development.Being aware of current technology trends factoring this into current design and implementation, fix bugs quickly whenever required.Review code changes from other developers on parts of a product source code.Develop solutions using available tools and technologies and assist the Engineering team in problem resolution by hands-on participation.Effectively communicate status, issues, and risks in a precise and timely mannerYou will report to the Lead Engineer managing the team.


                        Qualification

                        Bachelor’s Degree in Computer Science, Computer Engineering or related technical field required.Total 1-3 years of experience with hands on experience in front end development.Development experience in building Microservices, specifically with HTTP, HTML, CSS/SASS, and React JS. API - driven development - Experience working with remote data via REST and JSON. Hands on experience in delivering high value projects in Agile (SCRUM) methodology using preferably JIRA tool. Unit Testing (JUnit preferred)/ TDD - Scripting & Automated Testing, Continuous Integration and deployment (Jenkins)Experience in GIT, Maven, Jenkins or such build automation toolsGood understanding of SDLC, Agile methodologies. Agile development experience in a SCRUM environment is a strong plus. Excellent articulation, communication, interpersonal and collaboration skills are required. Excellent time management, organization and planning skills are essential.


                        Good to Have

                        Experience with Atlassian suite of Products and the related ecosystem of Plugins.Problem solver with excellent skills in troubleshooting. Knowledge of Webpack.Ability to set priorities in a multi-tasking environment. Passion to learn and pick-up new technologies as needs evolves.


                        Why you should join the SmartBear crew:

                        You can grow your career at every level.We invest in your success as well as the spaces where our teams come together to work, collaborate, and have fun.We love celebrating our SmartBears; we even encourage our crew to take their birthdays off.We are guided by a People and Culture organization - an important distinction for us. We think about our team holistically – the whole person.We celebrate our differences in experiences, viewpoints, and identities because we know it leads to better outcomes.


                        Did you know:

                        Our main goal at SmartBear is to make our technology-driven world a better place.SmartBear is committed to ethical corporate practices and social responsibility, promoting good in all the communities we serve.SmartBear is headquartered in Somerville, MA with offices across the world including Galway Ireland, Bath, UK, Wroclaw, Poland and Bangalore, India.We’ve won major industry(product and company) awards including best places to work


                        SmartBear is an equal employment opportunity employer and encourages success based on our individual merits and abilities without regard to race, color, religion, gender, national origin, ancestry, mental or physical disability, marital status, military or veteran status, citizenship status, age, sexual orientation, gender identity or expression, genetic information, medical condition, sex, sex stereotyping, pregnancy (which includes pregnancy, childbirth, and medical conditions related to pregnancy, childbirth, or breastfeeding), or any other legally protected status.
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
            </CardContent>
        </Card>
    );
};

const EasyApply = () => {
    return (
        <Typography variant="body2" component="p">
            Easy Apply
        </Typography>
    );
};

const UnlockReferalAsks = () => {
    return (
        <Typography variant="body2" component="p">
            Unlock referral asks
        </Typography>
    );
};

export default JobListing;
