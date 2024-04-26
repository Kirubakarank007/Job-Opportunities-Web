const jobListingContainer = document.getElementById('job-listing-container');
const searchInput = document.getElementById('search-input'); 

let x = jobListingContainer.scrollHeight;
let y = jobListingContainer.scrollWidth;

const jobs = [
    { id: 1, title: 'Software Developer', company: 'Decka', location: 'Tokoyo', salary: '$10,000/year' },
    { id: 2, title: 'Front-end Developer', company: 'Google', location: 'Chennai', salary: '$8,000/month' },
    { id: 3, title: 'Back-end Developer', company: 'Flipkart', location: 'Bengaluru', salary: '$1,000/month' },
    { id: 4, title: 'Java Developer', company: 'Mooncraft', location: 'Coimbatore', salary: '$20,000/year' },
    { id: 5, title: 'Web Developer', company: 'Amazon', location: 'Hydearbad', salary: '$30,000/year' },
    { id: 4, title: 'Java Developer', company: 'Mooncraft', location: 'Coimbatore', salary: '$20,000/year' },
    { id: 5, title: 'Web Developer', company: 'Amazon', location: 'Hydearbad', salary: '$30,000/year' },
    { id: 1, title: 'Software Developer', company: 'Decka', location: 'Tokoyo', salary: '$10,000/year' },
    { id: 2, title: 'Front-end Developer', company: 'Google', location: 'Chennai', salary: '$8,000/month' },
    { id: 3, title: 'Back-end Developer', company: 'Flipkart', location: 'Bengaluru', salary: '$1,000/month' },
    { id: 4, title: 'Java Developer', company: 'Mooncraft', location: 'Coimbatore', salary: '$20,000/year' },
    { id: 5, title: 'Web Developer', company: 'Amazon', location: 'Hydearbad', salary: '$30,000/year' },
    { id: 4, title: 'Java Developer', company: 'Mooncraft', location: 'Coimbatore', salary: '$20,000/year' },
    { id: 1, title: 'Software Developer', company: 'Decka', location: 'Tokoyo', salary: '$10,000/year' },
    { id: 2, title: 'Front-end Developer', company: 'Google', location: 'Chennai', salary: '$8,000/month' },
    { id: 3, title: 'Back-end Developer', company: 'Flipkart', location: 'Bengaluru', salary: '$1,000/month' },
    { id: 4, title: 'Java Developer', company: 'Mooncraft', location: 'Coimbatore', salary: '$20,000/year' },
    { id: 5, title: 'Web Developer', company: 'Amazon', location: 'Hydearbad', salary: '$30,000/year' },
    { id: 4, title: 'Java Developer', company: 'Mooncraft', location: 'Combatore', salary: '$20,000/year' }
];

function generateJobListing() {
    jobListingContainer.innerHTML = '';
    jobs.forEach(job => {
        const jobListings = document.createElement('div');
        jobListings.classList.add('job-listings-inner');
        jobListings.dataset.enTitle = job.title; // English title
        jobListings.dataset.jaTitle = translateToJapanese(job.title); // Japanese title
        jobListings.dataset.enCompany = job.company; // English company
        jobListings.dataset.jaCompany = translateToJapanese(job.company); // Japanese company
        jobListings.dataset.enSalary = job.salary; // English salary
        jobListings.dataset.jaSalary = translateToJapanese(job.salary); // Japanese salary
        jobListings.dataset.enLocation = job.location; // English location
        jobListings.dataset.jaLocation = translateToJapanese(job.location); // Japanese location

        jobListings.innerHTML = `
        <h3>${job.title}</h3>
        <p><strong>Company : </strong> ${job.company}</p>
        <p><strong>Salary : </strong> ${job.salary}</p>
        <p><strong>Location : </strong> ${job.location}</p>
        <button><a href ='#' class='apply-btn' data-job-id='${job.id}'></a>Apply Now</button>`;
        jobListingContainer.appendChild(jobListings);
    });
}

function translateToJapanese(text) {
    // Example translation mapping
    const translationMap = {
      'Software Developer': 'ソフトウェア開発者',
      'Front-end Developer': 'フロントエンド開発者',
      'Back-end Developer': 'バックエンド開発者',
      'Java Developer': 'Java 開発者',
      'Web Developer': 'Web 開発者',
      'Company': '会社',
      'Salary': '給与',
      'Location': '場所',
      'Apply Now': '今すぐ応募',
      '日本語 (Japanese)': 'English'
      // Add more translations as needed
    };
  
    // Return the translated text if available, otherwise return the original text
    return translationMap[text] || text;
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

function toggleLanguage() {
    const language = document.getElementById('language-select').value;
    const elements = document.querySelectorAll('[data-en], [data-ja]');
  
    elements.forEach(element => {
      if (language === 'en') {
        element.textContent = element.dataset.en;
      } else if (language === 'ja') {
        element.textContent = element.dataset.ja;
      }
    });
  }
  document.getElementById('language-select').addEventListener('change', toggleLanguage);
  toggleLanguage();
  