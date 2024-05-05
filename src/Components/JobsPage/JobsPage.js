import React from 'react';
import { ListItemText, Card, CardContent, Typography, List, ListItem, Chip, Button, Grid, Item } from '@mui/material';

import JobListing from '../JobCard/JobCard';
import JobCard from '../JobCard/JobCard';
import { useState } from "react";
const JobsPage = () => {
    const items = [1, 2, 3];
    const [jobs,setJobs] = useState([]);

    return (
        <div style={{padding:'20px 40px 20px 40px'}}>
             <Grid container spacing={4} style={{ padding: '20px auto' }}>
            {items.map((item, index) => (
                <Grid key={index} item xs={12} sm={6} md={4}>
                    <JobCard />
                </Grid>
            ))}
        </Grid>
        </div>
       
    );
};


export default JobsPage;