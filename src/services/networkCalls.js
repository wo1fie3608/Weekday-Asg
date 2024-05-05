export function fetchJobsData(successCallback, failureCallback) {
    const url = 'https://api.weekday.technology/adhoc/getSampleJdJSON';
    fetch(url)
      .then(response => {
        if (!response.ok) {
            alert('Failed to get data');
            return []
        }
        return response.json();
      })
      .then(data => {
        if (successCallback) {
          successCallback(data);
        }
      })
      .catch(error => {
        if (failureCallback) {
          failureCallback(error);
        } else {
          console.error('Error fetching jobs data:', error);
          // Handle errors without a callback (e.g., return default data)
        }
      });
}
  
