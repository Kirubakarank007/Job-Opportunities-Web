const jobListingContainer = document.getElementById('job-listing-container');
const searchInput = document.getElementById('search-input'); 

const jobs = [
    { id: 1, title: 'Software Developer', company: 'Decka', location: 'Tokyo', salary: '$10,000/year' },
    { id: 2, title: 'Front-end Developer', company: 'Google', location: 'Chennai', salary: '$8,000/month' },
    { id: 3, title: 'Back-end Developer', company: 'Flipkart', location: 'Bengaluru', salary: '$1,000/month' },
    { id: 4, title: 'Java Developer', company: 'Mooncraft', location: 'Coimbatore', salary: '$20,000/year' },
    { id: 5, title: 'Web Developer', company: 'Amazon', location: 'Hyderabad', salary: '$30,000/year' },
    { id: 4, title: 'Java Developer', company: 'Mooncraft', location: 'Coimbatore', salary: '$20,000/year' },
    { id: 5, title: 'Web Developer', company: 'Amazon', location: 'Hyderabad', salary: '$30,000/year' },
    { id: 6, title: 'Software Developer', company: 'Decka', location: 'Tokoyo', salary: '$10,000/year' },
    { id: 7, title: 'Front-end Developer', company: 'Google', location: 'Chennai', salary: '$8,000/month' },
    { id: 8, title: 'Back-end Developer', company: 'Flipkart', location: 'Bengaluru', salary: '$1,000/month' },
    { id: 9, title: 'Java Developer', company: 'Mooncraft', location: 'Coimbatore', salary: '$20,000/year' },
    { id: 10, title: 'Web Developer', company: 'Amazon', location: 'Hyderabad', salary: '$30,000/year' },
    { id: 11, title: 'Java Developer', company: 'Mooncraft', location: 'Coimbatore', salary: '$20,000/year' },
    { id: 12, title: 'Software Developer', company: 'Decka', location: 'Tokoyo', salary: '$10,000/year' },
    { id: 13, title: 'Front-end Developer', company: 'Google', location: 'Chennai', salary: '$8,000/month' },
    { id: 14, title: 'Back-end Developer', company: 'Flipkart', location: 'Bengaluru', salary: '$1,000/month' },
    { id: 15, title: 'Java Developer', company: 'Mooncraft', location: 'Coimbatore', salary: '$20,000/year' },
    { id: 16, title: 'Web Developer', company: 'Amazon', location: 'Hyderabad', salary: '$30,000/year' },
    { id: 17, title: 'Java Developer', company: 'Mooncraft', location: 'Combatore', salary: '$20,000/year' }
];

function translateToJapanese(text) {
    const translationMap = {
      'Software Developer': 'ソフトウェア開発者',
      'Front-end Developer': 'フロントエンド開発者',
      'Back-end Developer': 'バックエンド開発者',
      'Java Developer': 'ジャワ 開発者',
      'Web Developer': 'ウェブ 開発者',
      'Company': '会社',
      'Salary': '給与',
      'Location': '場所',
      'Apply Now': '今すぐ応募',
      '日本語 (Japanese)': 'English',
      'Google':'グーグル',
      'Flipkart':'フリップカート',
      'Mooncraft':'ムーンクラフト',
      'year':'年',
      'Tokyo':'東京',
      'Chennai':'チェンナイ',
      'Bengaluru':'バンガロール',
      'Hyderabad':'ハイデラバード',
      'Coimbatore':'コインバトール',
    };
    return translationMap[text] || text;
}

  function generateJobListing() {
    jobListingContainer.innerHTML = '';
    jobs.forEach(job => {
         const jobListings = document.createElement('div');
         jobListings.classList.add('job-listings-inner');
         jobListings.setAttribute('data-en-title', job.title);
         jobListings.setAttribute('data-ap-title', translateToJapanese(job.title));
         jobListings.setAttribute('data-en-company', job.company);
         jobListings.setAttribute('data-ja-company', translateToJapanese(job.company));
         jobListings.setAttribute('data-en-salary', job.salary);
         jobListings.setAttribute('data-ja-salary', translateToJapanese(job.salary));
         jobListings.setAttribute('data-en-location', job.location);
         jobListings.setAttribute('data-ja-location', translateToJapanese(job.location));
                 jobListings.innerHTML = `
                 <h3 data-en=${job.title} data-ja=${translateToJapanese(job.title)}>${job.title}</h3>
                 <p data-en=${job.company} data-ja=${translateToJapanese(job.company)}><strong>Company : </strong> ${job.company}</p>
                 <p data-en=${job.salary} data-ja=${translateToJapanese(job.salary)}><strong>Salary : </strong> ${job.salary}</p>
                 <p data-en=${job.location} data-ja=${translateToJapanese(job.location)}><strong>Location : </strong> ${job.location}</p>
                 <button class='apply-btn' data-en="Apply Now" data-ja="今すぐ応募"> <a href="https://forms.gle/YRUzr41vhBHrVY6T6" style='color:white'>Apply Now</a></button>`;
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
            jobListings.classList.add('job-listings-inner');
            jobListings.setAttribute('data-en-title', job.title);
            jobListings.setAttribute('data-jp-title', translateToJapanese(job.title));
            jobListings.setAttribute('data-en-company', job.company);
            jobListings.setAttribute('data-jp-company', translateToJapanese(job.company));
            jobListings.setAttribute('data-en-salary', job.salary);
            jobListings.setAttribute('data-jp-salary', translateToJapanese(job.salary));
            jobListings.setAttribute('data-en-location', job.location);
            jobListings.setAttribute('data-jp-location', translateToJapanese(job.location));
                jobListings.innerHTML = `
                <h3 data-en=${job.title} data-ja=${translateToJapanese(job.title)}>${job.title}</h3>
                <p data-en=${job.company} data-ja=${translateToJapanese(job.company)}><strong>Company : </strong> ${job.company}</p>
                <p data-en=${job.salary} data-ja=${translateToJapanese(job.salary)}><strong>Salary : </strong> ${job.salary}</p>
                <p data-en=${job.location} data-ja=${translateToJapanese(job.location)}><strong>Location : </strong> ${job.location}</p>
                <button class='apply-btn' data-en="Apply Now" data-ja="今すぐ応募"><a href="https://forms.gle/YRUzr41vhBHrVY6T6" style='color:white'>Apply Now</a></button>`;
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
        generateJobListing();
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
        generateJobListing();
        element.textContent = element.dataset.en;
      } else if (language === 'ja') {
        element.textContent = element.dataset.ja;
      }
    });
  }
  document.getElementById('language-select').addEventListener('change', toggleLanguage);
  toggleLanguage();
  