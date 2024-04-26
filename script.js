const jobListingContainer = document.getElementById('job-listing-container');
const searchInput = document.getElementById('search-input'); 

let x = jobListingContainer.scrollHeight;
let y = jobListingContainer.scrollWidth;

const jobs = [
    { id: 1, title: 'Software Developer', company: 'Decka', location: 'Tokoyo', salary: '$10,000/year' },
    { id: 2, title: 'Front-end Developer', company: 'Google', location: 'Chennai', salary: '$8,000/month' },
    { id: 3, title: 'Back-end Developer', company: 'Flipkart', location: 'Bengaluru', salary: '$1,000/month' },
    { id: 4, title: 'Java Developer', company: 'Mooncraft', location: 'Combatore', salary: '$20,000/year' },
    { id: 5, title: 'Web Developer', company: 'Amazon', location: 'Hydearbad', salary: '$30,000/year' },
    { id: 4, title: 'Java Developer', company: 'Mooncraft', location: 'Combatore', salary: '$20,000/year' },
    { id: 5, title: 'Web Developer', company: 'Amazon', location: 'Hydearbad', salary: '$30,000/year' },
    { id: 1, title: 'Software Developer', company: 'Decka', location: 'Tokoyo', salary: '$10,000/year' },
    { id: 2, title: 'Front-end Developer', company: 'Google', location: 'Chennai', salary: '$8,000/month' },
    { id: 3, title: 'Back-end Developer', company: 'Flipkart', location: 'Bengaluru', salary: '$1,000/month' },
    { id: 4, title: 'Java Developer', company: 'Mooncraft', location: 'Combatore', salary: '$20,000/year' },
    { id: 5, title: 'Web Developer', company: 'Amazon', location: 'Hydearbad', salary: '$30,000/year' },
    { id: 4, title: 'Java Developer', company: 'Mooncraft', location: 'Combatore', salary: '$20,000/year' },
    { id: 1, title: 'Software Developer', company: 'Decka', location: 'Tokoyo', salary: '$10,000/year' },
    { id: 2, title: 'Front-end Developer', company: 'Google', location: 'Chennai', salary: '$8,000/month' },
    { id: 3, title: 'Back-end Developer', company: 'Flipkart', location: 'Bengaluru', salary: '$1,000/month' },
    { id: 4, title: 'Java Developer', company: 'Mooncraft', location: 'Combatore', salary: '$20,000/year' },
    { id: 5, title: 'Web Developer', company: 'Amazon', location: 'Hydearbad', salary: '$30,000/year' },
    { id: 4, title: 'Java Developer', company: 'Mooncraft', location: 'Combatore', salary: '$20,000/year' }
];

function generateJobListing() {
    jobListingContainer.innerHTML = '';
    jobs.forEach(job => {
        const jobListings = document.createElement('div');
        jobListings.classList.add('job-listings-inner');
        jobListings.innerHTML = `
        <h3>${job.title}</h3>
        <p><strong>Company : </strong> ${job.company}</p>
        <p><strong>Salary : </strong> ${job.salary}</p>
        <p><strong>Location : </strong> ${job.location}</p>
        <button><a href ='#' class='apply-btn' data-job-id='${job.id}'></a>Apply Now</button>`;
        jobListingContainer.appendChild(jobListings);
    });
}
window.addEventListener('load', generateJobListing);

function generateJobListings(filteredJobs=null) {
    jobListingContainer.innerHTML = '';
    const jobsToDisplay = filteredJobs;
        jobsToDisplay.forEach(job => {
        const jobListings = document.createElement('div');
        jobListings.classList.add('job-listings-inner');
        jobListings.innerHTML = `
        <h3>${job.title}</h3>
        <p><strong>Company : </strong> ${job.company}</p>
        <p><strong>Salary : </strong> ${job.salary}</p>
        <p><strong>Location : </strong> ${job.location}</p>
        <button><a href ='#' class='apply-btn' data-job-id='${job.id}'></a>Apply Now</button>`;
        jobListingContainer.appendChild(jobListings);
    });
}

function generateSearchSuggestions(query) {
    const suggestions = [];
    jobs.forEach(job => {
        if (job.title.toLowerCase().includes(query.toLowerCase()) && !suggestions.includes(job.title)) {
            suggestions.push(job.title);
        }
        if (job.company.toLowerCase().includes(query.toLowerCase()) && !suggestions.includes(job.company)) {
            suggestions.push(job.company);
        }
        if (job.location.toLowerCase().includes(query.toLowerCase()) && !suggestions.includes(job.location)) {
            suggestions.push(job.location);
        }
    });
    return suggestions;
}

function displaySearchSuggestions(suggestions) {
    const suggestionsList = document.getElementById('search-suggestions');
    suggestionsList.innerHTML = '';
    suggestions.forEach(suggestion => {
        const li = document.createElement('li');
        li.textContent = suggestion;
        li.addEventListener('click', () => {
            searchInput.value = suggestion;
            suggestionsList.innerHTML = '';
            filterJobListings(suggestion);
            suggestionsList.innerHTML = '';
        });
        suggestionsList.appendChild(li);
    });
}


searchInput.addEventListener('input', (event) => {
    const query = event.target.value.trim();
    if (query.length > 0) {
        const suggestions = generateSearchSuggestions(query);
        displaySearchSuggestions(suggestions);
        filterJobListings(query); 
    } else {
        generateJobListing  ();
        const suggestionsList = document.getElementById('search-suggestions');
        suggestionsList.innerHTML = '';
    }
});

function filterJobListings(query) {
    const filteredJobs = jobs.filter(job => {
        return job.title.toLowerCase().includes(query.toLowerCase()) ||
               job.company.toLowerCase().includes(query.toLowerCase()) ||
               job.location.toLowerCase().includes(query.toLowerCase()) ||
               job.salary.toLowerCase().includes(query.toLowerCase());
    });
    generateJobListings(filteredJobs);
}