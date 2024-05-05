export function titleCase(text) {
    return text.toString().toLowerCase().split(' ').map(function(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
}

export const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
export const defaultMax = Number.MAX_SAFE_INTEGER
export const defaultMin = Number.MIN_SAFE_INTEGER

export const setJobForClient = (job) => {
    job = job || {}
    const daysSincePosted = job.postedOn ? (Math.ceil((new Date() - new Date(job.postedOn)) / (1000 * 60 * 60 * 24))) : getRandomInt(0,7)
    return {
        id: job.jdUid || '',
        companyName: job.companyName || '',
        link: job.jdLink || '',
        details: job.jobDetailsFromCompany || '',
        role: job.jobRole || '',
        location: job.location || '',
        logo: job.logoUrl || '',
        maxExperience: job.maxExp || defaultMax, //safe
        minExperience: job.minExp || 0,
        minSalary: job.minJdSalary || defaultMin,
        maxSalary: job.maxJdSalary || defaultMax,
        currency: job.salaryCurrencyCode || 'INR',
        postSince: daysSincePosted === 0 ? "Today":`${daysSincePosted} ${daysSincePosted===1 ? 'day ago': 'days ago'}`
    }
}

export const setJobsForClient = (response) => {
    response.jdList.push(null) //checking null values
    return {
        totalJobs: response?.totalCount || 0,
        jobsList: response?.jdList?.filter(item => item).map(item => setJobForClient(item)) || []
    }
}