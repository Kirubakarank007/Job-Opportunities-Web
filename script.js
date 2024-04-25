const jobListingContainer=document.getElementById('job-listing-container')
let x=jobListingContainer.scrollHeight;
let y=jobListingContainer.scrollWidth;
const jobs =[
    {id :1, title:'Software Developer', company:'Decka',location:'Tokoyo',salary:'$10,000/year'},
    {id :2, title:'Front-end Developer', company:'Google',location:'Chennai',salary:'$8,000/month'},
    {id :3, title:'Back-end Developer', company:'Flipkart',location:'Bengaluru',salary:'$1,000/month'},
    {id :4, title:'Java Developer', company:'Mooncraft',location:'Combatore',salary:'$20,000/year'},
    {id :5, title:'Web Developer', company:'Amazon',location:'Hydearbad',salary:'$30,000/year'},
    {id :4, title:'Java Developer', company:'Mooncraft',location:'Combatore',salary:'$20,000/year'},
    {id :5, title:'Web Developer', company:'Amazon',location:'Hydearbad',salary:'$30,000/year'},
    {id :1, title:'Software Developer', company:'Decka',location:'Tokoyo',salary:'$10,000/year'},
    {id :2, title:'Front-end Developer', company:'Google',location:'Chennai',salary:'$8,000/month'},
    {id :3, title:'Back-end Developer', company:'Flipkart',location:'Bengaluru',salary:'$1,000/month'},
    {id :4, title:'Java Developer', company:'Mooncraft',location:'Combatore',salary:'$20,000/year'},
    {id :5, title:'Web Developer', company:'Amazon',location:'Hydearbad',salary:'$30,000/year'},
    {id :4, title:'Java Developer', company:'Mooncraft',location:'Combatore',salary:'$20,000/year'},
    {id :1, title:'Software Developer', company:'Decka',location:'Tokoyo',salary:'$10,000/year'},
    {id :2, title:'Front-end Developer', company:'Google',location:'Chennai',salary:'$8,000/month'},
    {id :3, title:'Back-end Developer', company:'Flipkart',location:'Bengaluru',salary:'$1,000/month'},
    {id :4, title:'Java Developer', company:'Mooncraft',location:'Combatore',salary:'$20,000/year'},
    {id :5, title:'Web Developer', company:'Amazon',location:'Hydearbad',salary:'$30,000/year'},
    {id :4, title:'Java Developer', company:'Mooncraft',location:'Combatore',salary:'$20,000/year'},
]

function generateJobListings(){
    jobListingContainer.innerHTML='';
    jobs.forEach(jobs=>{
        const jobListings=document.createElement('div');
        jobListings.classList.add('job-listings-inner');
        jobListings.innerHTML=`
        <h3>${jobs.title}</h3>
        <p><strong>Company : </strong> ${jobs.company}</p>
        <p><strong>Salary : </strong> ${jobs.salary}</p>
        <p><strong>Location : </strong> ${jobs.location}</p>
        <button><a href ='#' class='apply-btn' data-job-id='${jobs.id}'></a>Apply Now</button>`;
        jobListingContainer.appendChild(jobListings);
    })
}

window.addEventListener('load',generateJobListings);