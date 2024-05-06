import React, { useEffect, useState, useMemo, useRef } from 'react';
import { AppBar, Box, FormControl, FormGroup, Grid, InputLabel, MenuItem, Select, Toolbar } from '@mui/material';
import JobCard from '../JobCard/JobCard';
import { fetchJobsData } from '../../services/networkCalls';
import { titleCase } from '../../services/utils';
import InfiniteScroll from 'react-infinite-scroll-component';

const filterTypesMap = {
    role: 'Role',
    location: 'Location',
    company: 'Company',
    minPay: 'Minimum Pay'
};

const limit = 20;

const JobsPage = () => {
    const [jobs, setJobs] = useState([]);
    const [filteredJobs, setFilteredJobs] = useState([]);
    const [filterOptions, setFilterOptions] = useState({
        [filterTypesMap.role]: [],
        [filterTypesMap.location]: [],
        [filterTypesMap.company]: [],
        [filterTypesMap.minPay]: Array.from({ length: 11 }, (_, i) => i * 10)
    });

    const [filterValuesObj, setFilterValuesObj] = useState({
        [filterTypesMap.role]: '',
        [filterTypesMap.location]: '',
        [filterTypesMap.company]: '',
        [filterTypesMap.minPay]: ''
    });
    const [hasMore, setHasMore] = useState(false);

    const updateJobsAndStates = (jobsList, total) => {
        const uniqueRoles = [...new Set(jobsList.map(item => item.role).filter(Boolean))];
        const uniqueLocations = [...new Set(jobsList.map(item => item.location).filter(Boolean))];
        const uniqueCompanies = [...new Set(jobsList.map(item => item.companyName).filter(Boolean))];
        setHasMore(jobsList.length < total)
        setJobs(jobsList);
        setFilterOptions({
            [filterTypesMap.role]: uniqueRoles,
            [filterTypesMap.location]: uniqueLocations,
            [filterTypesMap.company]: uniqueCompanies,
            [filterTypesMap.minPay]: filterOptions[filterTypesMap.minPay]
        });
    };

    const getFilteredData = useMemo((recursiveFetch) => {
        return () => {
            const oldLength = filteredJobs.length;
            const newFilteredJobs = jobs.filter((job) => {
                const roleFilter = !filterValuesObj[filterTypesMap.role] || job.role === filterValuesObj[filterTypesMap.role];
                const locationFilter = !filterValuesObj[filterTypesMap.location] || job.location === filterValuesObj[filterTypesMap.location];
                const companyFilter = !filterValuesObj[filterTypesMap.company] || job.companyName === filterValuesObj[filterTypesMap.company];
                const minPayFilter = !filterValuesObj[filterTypesMap.minPay] || job.minSalary >= filterValuesObj[filterTypesMap.minPay];
                return roleFilter && locationFilter && companyFilter && minPayFilter;
            });

            if (((oldLength === newFilteredJobs.length && recursiveFetch || newFilteredJobs.length - oldLength < limit)) && hasMore) {
                fetchMoreData()
            }
            setFilteredJobs(newFilteredJobs);
        };
    }, [filteredJobs, jobs, filterValuesObj, hasMore]);

    const fetchMoreData = () => {
        if (hasMore) {
            const fetchParams = {
                limit: limit,
                offset: jobs.length
            };
            fetchJobsData(fetchParams, (res) => {
                updateJobsAndStates([...jobs, ...res.jobsList], res.totalJobs);
            });
        }
    };

    useEffect(() => {
        getFilteredData();
    }, [filterValuesObj]);

    useEffect(() => {
        getFilteredData(true);
    }, [jobs]);

    useEffect(() => {
        const fetchParams = {
            limit: limit,
            offset: 0
        };
        fetchJobsData(fetchParams, (res) => {
            updateJobsAndStates(res.jobsList, res.totalJobs);
        });
    }, []);

    return (
        <div style={{ padding: '20px 40px' }}>
            <Filters filterOptions={filterOptions}
                filterValues={filterValuesObj}
                setFilterValues={setFilterValuesObj} ></Filters>
            <InfiniteScroll
                dataLength={filteredJobs.length}
                next={fetchMoreData}
                hasMore={hasMore}
                loader={<h4>Loading...</h4>}
                endMessage={<p>No more jobs to show</p>}
            >
                <Grid container spacing={4} style={{ padding: '20px 0' }}>
                    {filteredJobs.map((item) => (
                        <Grid key={item.id} item xs={12} sm={6} md={4}>
                            <JobCard jobDetails={item} />
                        </Grid>
                    ))}
                </Grid>
            </InfiniteScroll>
        </div>
    );
};

const Filters = ({ filterOptions, filterValues, setFilterValues }) => {
    const handleFilterChange = (filterKey, value) => {
        setFilterValues(prevValues => ({
            ...prevValues,
            [filterKey]: value
        }));
    };

    return (
        <Grid container spacing={2}>
            {Object.keys(filterTypesMap).map((filterKey) => (
                <Grid key={filterKey} item xs={3}>
                    <FormControl fullWidth>
                        <InputLabel id={`demo-simple-select-label-${filterKey}`}>
                            {titleCase(filterTypesMap[filterKey])}
                        </InputLabel>
                        <Select
                            labelId={`demo-simple-select-label-${filterKey}`}
                            id={`demo-simple-select-${filterKey}`}
                            value={filterValues[filterTypesMap[filterKey]]}
                            onChange={(event) => {
                                handleFilterChange(filterTypesMap[filterKey], event.target.value);
                            }}
                            label={filterTypesMap[filterKey]}
                        >
                            <MenuItem value="">No Filter</MenuItem>
                            {filterOptions[filterTypesMap[filterKey]].map((item) => (
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
