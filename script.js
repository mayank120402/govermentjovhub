
// Theme toggle functionality
const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');

// Check for saved theme preference or use preferred color scheme
const savedTheme = localStorage.getItem('theme') || 
                  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

// Apply the saved theme
root.setAttribute('data-theme', savedTheme);
themeToggle.checked = savedTheme === 'dark';

// Toggle theme when switch is clicked
themeToggle.addEventListener('change', e => {
    const theme = e.target.checked ? 'dark' : 'light';
    root.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
});

// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// जॉब डेटा (आप इसे API से भी फेच कर सकते हैं)
const jobs = [
//   Bank Jobs 

    {
        id: 1,
        title: "IBPS PO (Specialist Officer)",
        department: "Institute of Banking Personnel Selection",
        type: "bank",
        vacancies: "600+",
        lastDate: "15 जनवरी 2025",
        qualification: "स्नातक/स्नातकोत्तर",
        link: "ibps-so.html"




 
    
    },
    {
        id: 1,
        title: "IBPS SO (Specialist Officer)",
        department: "Institute of Banking Personnel Selection",
        type: "bank",
        vacancies: "600+",
        lastDate: "15 जनवरी 2025",
        qualification: "स्नातक/स्नातकोत्तर",
        link: "so.html"
    },
    {
        id: 1,
        title: "IBPS SO (Specialist Officer)",
        department: "Institute of Banking Personnel Selection",
        type: "bank",
        vacancies: "600+",
        lastDate: "15 जनवरी 2025",
        qualification: "स्नातक/स्नातकोत्तर",
        link: "so.html"
    },





    //   SSC Jobs
    {
        id: 2,
        title: "SSC CGL 2024",
        department: "Staff Selection Commission",
        type: "ssc",
        vacancies: "7500+",
        lastDate: "24 दिसंबर 2024",
        qualification: "स्नातक",
        link: "ssc-cgl.html"
    },




  
    
  // UPSC Jobs   
    {
        id: 3,
        title: "UPSC Civil Services 2025",
        department: "Union Public Service Commission",
        type: "upsc",
        vacancies: "1000+",
        lastDate: "21 फरवरी 2025",
        qualification: "स्नातक",
        link: "upsc-cse.html"
    },











    // RRB Jobs
    {
        id: 4,
        title: "रेलवे ग्रुप डी",
        department: "भारतीय रेलवे",
        type: "railway",
        vacancies: "1,03,769",
        lastDate: "12 दिसंबर 2024",
        qualification: "10वीं/ITI",
        link: "railway-group-d.html"
    },
    {
        id: 5,
        title: "UPPSC PCS 2024",
        department: "उत्तर प्रदेश लोक सेवा आयोग",
        type: "state",
        vacancies: "220+",
        lastDate: "05 जनवरी 2025",
        qualification: "स्नातक",
        link: "uppsc-pcs.html"
    },


    //  DEFENCE Jobs
    {
        id: 6,
        title: "भारतीय सेना भर्ती 2024",
        department: "भारतीय सेना",
        type: "defense",
        vacancies: "विभिन्न",
        lastDate: "चालू भर्ती",
        qualification: "10वीं से स्नातक",
        urgent: true,
        link: "indian-army.html"
    },
    {
        id: 7,
        title: "बैंक क्लर्क",
        department: "विभिन्न सार्वजनिक बैंक",
        type: "bank",
        vacancies: "5000+",
        lastDate: "30 नवंबर 2024",
        qualification: "स्नातक",
        link: "bank-clerk.html"
    },
    {
        id: 8,
        title: "दिल्ली पुलिस कांस्टेबल",
        department: "दिल्ली पुलिस",
        type: "state",
        vacancies: "7547",
        lastDate: "15 दिसंबर 2024",
        qualification: "12वीं",
        urgent: true,
        link: "delhi-police.html"
    }
];

// जॉब लिस्ट रेंडर करें
function renderJobs(filter = "all") {
    const jobList = document.getElementById('jobList');
    jobList.innerHTML = '';
    
    const filteredJobs = filter === "all" ? jobs : jobs.filter(job => job.type === filter);
    
    filteredJobs.forEach(job => {
        const jobCard = document.createElement('div');
        jobCard.className = 'job-card';
        jobCard.innerHTML = `
            <h3 class="job-title">${job.title} ${job.urgent ? '<span class="urgent-badge">तुरंत आवेदन करें</span>' : ''}</h3>
            <p class="job-department">${job.department}</p>
            <div class="job-meta">
                <span class="meta-item"><i class="fas fa-user-plus"></i> ${job.vacancies} रिक्तियाँ</span>
                <span class="meta-item"><i class="far fa-calendar-alt"></i> अंतिम तिथि: ${job.lastDate}</span>
                <span class="meta-item"><i class="fas fa-graduation-cap"></i> ${job.qualification}</span>
            </div>
            <a href="${job.link}" class="apply-btn">आवेदन करें</a>
        `;
        jobList.appendChild(jobCard);
    });
}

// फिल्टर बटन इवेंट
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        renderJobs(this.dataset.filter);
    });
});

// सर्च फंक्शनैलिटी
document.getElementById('searchInput').addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    const jobCards = document.querySelectorAll('.job-card');
    
    jobCards.forEach(card => {
        const text = card.textContent.toLowerCase();
        if (text.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});

// पेज लोड पर जॉब्स रेंडर करें
document.addEventListener('DOMContentLoaded', function() {
    renderJobs();
});
