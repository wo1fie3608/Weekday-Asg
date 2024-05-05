import React, { useEffect, useState } from 'react';
import { AppBar, Box, FormControl, FormGroup, Grid, InputLabel, MenuItem, Select, Toolbar } from '@mui/material';
import JobCard from '../JobCard/JobCard';
import { fetchJobsData } from '../../services/networkCalls';
import { titleCase } from '../../services/utils';

const filterTypesMap = {
    role: 'Role',
    location: 'Location',
    company: 'Company',
    minPay: 'Minimum Pay'
};

const JobsPage = () => {
    const [jobs, setJobs] = useState([]);
    const [filteredJobs, setFilteredJobs] = useState([])
    const [filterDropDownOptions, setFilterDropDownOptions] = useState({
        [filterTypesMap.role]: { options: [], value: '' },
        [filterTypesMap.location]: { options: [], value: '' },
        [filterTypesMap.company]: { options: [], value: '' },
        [filterTypesMap.minPay]: { options: Array.from({ length: 11 }, (_, i) => i * 10), value: '' }
    });
    
    const fetchDataAndUpdateState = (jobsList) => {
        const uniqueRoles = [...new Set(jobsList.map(item => item.role).filter(Boolean))];
        const uniqueLocations = [...new Set(jobsList.map(item => item.location).filter(Boolean))];
        const uniqueCompanies = [...new Set(jobsList.map(item => item.companyName).filter(Boolean))];
    
        setJobs(jobsList);
        setFilterDropDownOptions(prevOptions => ({
            ...prevOptions,
            [filterTypesMap.role]: { options: uniqueRoles, value: '' },
            [filterTypesMap.location]: { options: uniqueLocations, value: '' },
            [filterTypesMap.company]: { options: uniqueCompanies, value: '' }
        }));
    };

    const filterData = () => {
        const filteredJobs = jobs.filter((job) => {
            const roleFilter = !filterDropDownOptions[filterTypesMap.role].value || job.role === filterDropDownOptions[filterTypesMap.role].value;
            const locationFilter = !filterDropDownOptions[filterTypesMap.location].value || job.location === filterDropDownOptions[filterTypesMap.location].value;
            const companyFilter = !filterDropDownOptions[filterTypesMap.company].value || job.companyName === filterDropDownOptions[filterTypesMap.company].value;
            const minPayFilter = !filterDropDownOptions[filterTypesMap.minPay].value || job.minSalary >= filterDropDownOptions[filterTypesMap.minPay].value;
            return roleFilter && locationFilter && companyFilter && minPayFilter;
        });
        setFilteredJobs(filteredJobs);
    };
    
    
    useEffect(() => {
        fetchJobsData((res) => {
            fetchDataAndUpdateState(res.jobsList);
        });
    }, []);

    useEffect(() => {
        filterData();
    },[jobs,filterDropDownOptions])
    

    const setFilterValues = (type, value) => {
        setFilterDropDownOptions(prevOptions => ({
            ...prevOptions,
            [type]: {
                ...prevOptions[type],
                value
            }
        }));
    };
    
    return (
        <div style={{ padding: '20px 40px' }}>
            <Filters setFilterValues={setFilterValues} filterDropDownOptions={filterDropDownOptions}></Filters>
            <Grid container spacing={4} style={{ padding: '20px 0' }}>
                {filteredJobs.map((item) => (
                    <Grid key={item.id} item xs={12} sm={6} md={4}>
                        <JobCard jobDetails={item} />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

const Filters = (props) => {
    return (
        <Grid container spacing={2}>
            {Object.keys(filterTypesMap).map((filterKey) => (
                <Grid key={filterKey} item xs={3}>
                    <FormControl fullWidth>
                        <InputLabel id={`demo-simple-select-label-${filterKey}`}>{titleCase(filterTypesMap[filterKey])}</InputLabel>
                        <Select
                            labelId={`demo-simple-select-label-${filterKey}`}
                            id={`demo-simple-select-${filterKey}`}
                            value={props.filterDropDownOptions[filterTypesMap[filterKey]].value}
                            onChange={(event) => {
                                props.setFilterValues(filterTypesMap[filterKey], event.target.value);
                            }}
                            label={filterTypesMap[filterKey]}
                        >
                            <MenuItem value="">
                                No Filter
                            </MenuItem>
                            {props.filterDropDownOptions[filterTypesMap[filterKey]].options &&
                                props.filterDropDownOptions[filterTypesMap[filterKey]].options.map((item) => (
                                    <MenuItem key={item} value={item}>
                                        {titleCase(item)}
                                        {filterKey === 'minPay' ? ' LPA' : ''}
                                    </MenuItem>
                                ))}
                        </Select>
                    </FormControl>
                </Grid>
            ))}
        </Grid>
    );
};


export default JobsPage;
