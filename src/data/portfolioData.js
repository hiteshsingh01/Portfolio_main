import React from 'react';
import jenkinsImg from "../../public/jenkins.png";
import faceImg from "../../public/face.png";
import searchImg from "../../public/searchdone.png";
import ec2Img from "../../public/ec2.png";
import ecommerceImg from "../../public/ecommerce.jpg";
import fileManagerImg from "../../public/filesystem.png";


export const skillsData = {
    "DevOps & Cloud": [
      "Microsoft Azure Cloud Platform",
      "Amazon Web Services (AWS)",
      "Docker Containerization",
      "Kubernetes Orchestration",
      "CI/CD Pipeline Development",
      "Azure DevOps Services",
      "Jenkins Automation",
      "Infrastructure as Code (IaC)"
    ],
    "Programming Languages": [
      "Python Programming",
      "JavaScript (ES6+)",
      "TypeScript",
      "Java Programming",
      "Bash Shell Scripting",
      "PowerShell Scripting",
      "HTML5 & CSS3",
      "SQL Database Queries"
    ],
    "Frameworks & Tools": [
      "React.js Framework",
      "Node.js Runtime",
      "Express.js Framework",
      "Git Version Control",
      "GitHub Actions",
      "Linux System Administration",
      "RESTful API Development",
      "Streamlit Framework"
    ],
    "Databases & Storage": [
      "MongoDB NoSQL Database",
      "MySQL Relational Database",
      "PostgreSQL Database",
      "Microsoft SQL Server",
      "Redis Caching",
      "Azure Blob Storage"
    ]
};

// Add your GitHub and LinkedIn links here
export const socialLinks = {
  github: "https://github.com/hiteshsingh01",
  linkedin: "https://www.linkedin.com/in/hiteshsingh2k4/"
};

export const projectsData = [
  {
    title: "SearchDone - Search Engine Website",
    description: "A fully functional search engine website with modern interface and advanced search capabilities.",
    image: searchImg,
    tags: ["HTML", "CSS", "JavaScript", "React", "Responsive Design"],
    hasCode: true,
    hasLive: true,
    liveLink: "https://searchdone.in/"
  },
  {
    title: "CI/CD Automation ",
    description: "Automated CI/CD pipeline for Flask applications using Jenkins.",
    image: jenkinsImg,
    tags: ["CI/CD",],
    hasCode: true,
    hasLive: false,
    codeLink: "https://github.com/hiteshsingh01/devops_project_01",
    liveLink: null
  },
  {
  title: "Face Recognition Attendance System",
  description: "Automated attendance system using real-time face recognition with OpenCV and Tkinter GUI.",
  image: faceImg,
  tags: ["Python", "OpenCV", ],
  hasCode: true,
  hasLive: false,
  codeLink: "https://github.com/hiteshsingh01/AttendanceSystem",
  liveLink: null
},

  {
  title: "AWS EC2 Dashboard",
  description: "A web-based dashboard to monitor and manage AWS EC2 instances using Boto3 and Streamlit.",
  image: ec2Img, // replace with your image variable
  tags: ["Python", "AWS", "Boto3", "Streamlit"],
  hasCode: true,
  hasLive: false,
  codeLink: "https://github.com/hiteshsingh01/AWS_Dashboad",
  liveLink: null
},

  {
  title: "E-commerce Website",
  description: "A basic e-commerce website built using HTML, CSS, and JavaScript with product listing, cart functionality, and responsive design.",
  image: ecommerceImg, // replace with your image variable
  tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
  hasCode: true,
  hasLive: true,
  codeLink: "https://github.com/hiteshsingh01/ecommerce-website",
  liveLink: "https://hiteshsingh01.github.io/ecommerce-website/"
},
{
  title: "File Manager App",
  description: "A powerful file manager built with Streamlit and Python, offering folder browsing, file operations, and full access to the Windows filesystem.",
  image: fileManagerImg, // replace with your image variable
  tags: ["Python", "Streamlit", "File System", "GUI"],
  hasCode: true,
  hasLive: false,
  codeLink: "https://github.com/hiteshsingh01/File_Manager_App",
  liveLink: null
},
  // The following project is only for the All Projects section, not for Featured Projects:
  // {
  //   title: "URL Shortener Service",
  //   description: "Custom URL shortening service with analytics and tracking features.",
  //   image: "https://storage.googleapis.com/hostinger-horizons-assets-prod/f5bb479e-7c77-447a-b3b1-1b27c08c4307/22c34553bafe378a11431e98b6a94fcf.png",
  //   tags: ["Python", "Web Service", "Analytics", "API"],
  //   hasCode: true,
  //   hasLive: true,
  //   codeLink: "https://github.com/hiteshsingh01/url-shortener-service",
  //   liveLink: "https://url-shortener-hitesh.netlify.app/"
  // }
];

export const experienceData = [
    {
      title: "DevOps Intern",
      company: "LinuxWorld Informatics Pvt Ltd",
      location: "Jaipur, Rajasthan, India",
      type: "On-site",
      period: "May 2025 - Present",
      duration: "3 mos",
      current: true,
      description: "Working on advanced DevOps practices, cloud infrastructure automation, and enterprise-level deployment strategies. Implementing CI/CD pipelines and managing production environments."
    },
    {
      title: "Web Development Intern",
      company: "InternPe",
      location: "Remote",
      type: "Remote",
      period: "2023",
      duration: "6 mos",
      current: false,
      description: "Built responsive frontend applications using modern web technologies and collaborated with design teams. Developed full-stack web applications with focus on user experience."
    },
    {
      title: "Salesforce Architect Intern",
      company: "TechForce",
      location: "Remote",
      type: "Remote",
      period: "2022",
      duration: "4 mos",
      current: false,
      description: "Designed and implemented Salesforce solutions for enterprise clients. Worked on Lightning components, Apex development, and integration with external systems."
    }
];

export const educationData = [
  {
      degree: "B.Tech Computer Science",
      institution: "Arya College of Engineering & IT",
      location: "Jaipur, India",
      period: "2021 - 2025",
      gpa: "CGPA: 7.8/10",
      description: "Specialized in software engineering, data structures, system design, and cloud computing technologies."
  }
];

export const certificationsData = [
    "RHCSA - Red Hat Certified System Administrator",
    "Computer Graphics - NPTEL"
];

export const achievementsData = [
    {
      title: "LAN Gaming Winner",
      organization: "Arya College",
      description: "First place in college-wide LAN gaming competition demonstrating strategic thinking and teamwork"
    },
   
];
