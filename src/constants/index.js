import {
  cloud,
  linux,
  devops,
  migrate,
  kubernetes,
  script,
  altschool,
  nginx,
  laravel,
  sockshop,
  dockerva,
  S3static,
  scripting,
} from "../assets";

export const navLinks = [
  {
    id: "hero",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "services",
    title: "Service",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "projects",
    title: "Project",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Cloud Infrastructure Engineer",
    icon: cloud,
    text: "Design, deploy, and manage cloud infrastructure solutions tailored to your business needs, ensuring scalability, security, and performance.",
  },
  {
    title: "Linux System Administrator",
    icon: linux,
    text: "Provide expert support for Linux-based systems and applications, ensuring optimal performance, security, and reliability.",
  },
  {
    title: "DevOps Engineer",
    icon: devops,
    text: "Implement DevOps best practices to automate workflows, improve collaboration, and accelerate software delivery.",
  },
  {
    title: "Cloud Migration Specialist",
    icon: migrate,
    text: "Plan and execute seamless cloud migrations, minimizing downtime and disruptions while maximizing cost savings and efficiency.",
  },
  {
    title: "Kubernetes Administrator",
    icon: kubernetes,
    text: "Manage and optimize Kubernetes clusters for containerized applications, ensuring high availability, scalability, and performance.",
  },{
    title: "Shell Scripting Expert",
    icon: script,
    text: "Develop custom shell scripts to automate routine tasks, streamline workflows, and improve operational efficiency.",
  },
];

const technologies = [
  { name: "Cloud platforms-AWS, Azure, GCP, OCI, DigitalOcean",  percentage: 85 },
  { name: "IaC-Terraform, Ansible, AWS Cloudformation", percentage: 90 },
  { name: "Containerization & Orchestration-Docker, Kubernetes, Helm", percentage: 80 },
  { name: "CI/CD Pipelines- Github Action, Jenkins, Gitlab CI/CD", percentage: 85 },
  { name: "Version Control- Git, Github", percentage: 90 },
  { name: "Monitoring & Logging- Prometheus, Grafana, ELK Stack", percentage: 95 },
  { name: "Automation & Scripting- Bash, Powershell, Python", percentage: 90 },
  { name: " Networking & Security- VPCs, Firewalls, IAM, TLS/SSL Encryption", percentage: 85 },
  { name: "Virtualization & Cloud Architecture- VMware / Hyper-V, AWS Lambda, Azure Functions, GCP Functions, Load Balancing & Auto-scaling", percentage: 80 },
  { name: "Databases & Storage- Sql, Mongodb, Dynamodb, Aws-S3, Azure Blob Storage, Google Cloud Storage", percentage: 75 },
  { name: "Cost Optimization & Cloud Management- AWS Cost Explorer / Azure Cost Management", percentage: 80 },
  { name: "Javascript/CSS Frameworks- React.js, Next.js, Tailwind CSS", percentage: 45 },

];

const professionalSkills = [
  { name: "Collaboration", percentage: 90 },
  { name: "Leadership", percentage: 85 },
  { name: "Problem-Solving", percentage: 95 },
  { name: "Adaptability", percentage: 90 },
  { name: "Communication", percentage: 85 },
  { name: "English Proficiency", percentage: 90 },
];

const education = [
  { degree: "Diploma in Cloud Engineering", institution: "Altschool Africa" },
];

const certificates = [
 // { name: "AWS Certified Solutions Architect", issuedBy: "Amazon Web Services", year: 2021 },
  //{ name: "Certified Kubernetes Administrator (CKA)", issuedBy: "Cloud Native Computing Foundation", year: 2022 },
 // { name: "Google Professional Cloud Architect", issuedBy: "Google Cloud", year: 2023 },

  { name: "Diploma in cloud/DevOps Engineering", issuedBy: "Altschool Africa", year: 2023 },
];

const experiences = [
  {
    title: "Linux System Administrator",
    company_name: "Altschool Africa",
    icon: altschool,
    iconBg: "#E6DEDD",
    date: "2022 - 2024",
    points: [
      "Provided hands-on support for end-users experiencing issues with Linux-based systems or applications, facilitating quick resolutions and minimal disruptions to productivity.",
      "Contributed to incident response efforts as needed to address urgent situations quickly and effectively.",
      "Conducted regular audits of system logs to identify potential vulnerabilities or unauthorized activities within the IT environment.",
      "Developed scripts for automating routine tasks, reducing human error and increasing overall efficiency in the administration process.",
    ],
  },
  {
    title: "Cloud Engineer",
    company_name: "altschool",
    icon: altschool,
    iconBg: "#E6DEDD",
    date: " 2022 - 2024",
    points: [
      "Developed a cloud-based file storage system using AWS S3, ensuring scalability and durability of stored data.",
      "Configured automated backup and disaster recovery solutions for cloud-based infrastructure using AWS    Backup and Azure Site Recovery.",
     "Collaborated on a team project to create a serverless application using AWS Lambda, API Gateway, and DynamoDB, reducing operational costs and improving scalability.",
      "Implemented monitoring and alerting solutions using AWS CloudWatch and Azure Monitor, enabling proactive identification and resolution of performance issues.",
     "Spearheaded the transition to Infrastructure as Code using Terraform, enabling the automated provisioning and management of cloud infrastructures.",
     "Managed Kubernetes clusters across multiple environments (development, staging, production), ensuring high availability and scalability of applications using  amazon EKS, azure AKS.",
     "Led a successful migration of on-premises infrastructure to AWS, improving scalability and reducing operational costs by 30%.",
     "Conducted post-migration reviews and optimization, achieving a 20% reduction in resource costs through infrastructure right-sizing and reserved instances.",
],
  },
  {
    title: "DevOps Engineer",
    company_name: "altschool",
    icon: altschool,
    iconBg: "#E6DEDD",
    date: " 2022 - 2024",
    points: [
     "Successfully designed and implemented continuous integration and continuous deployment (CI/CD) pipelines using Jenkins for multiple microservices, reducing deployment time by 40%.",
      "Automated the deployment of infrastructure using Terraform, enabling the rapid provisioning of resources in AWS and Azure.",
      "Implemented automated testing solutions using tools like Selenium and JUnit, ensuring the quality and reliability of applications.",
     "Designed and deployed multi-container Docker applications using Docker Compose, streamlining the local development and testing processes.",
    "Implemented configuration management solutions using tools like Ansible/Puppet/Chef, automating server provisioning and configuration.",
    "Set up comprehensive monitoring and alerting systems using Prometheus, Grafana, and ELK stack, ensuring real-time visibility and proactive incident management.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "simple-nginx-k8s",
    description:
      "This project demonstrates how to deploy a simple Nginx web server on Kubernetes using Pods, Deployments, and Services",
    tags: [
      {
        name: "kubernetes",
        color: "blue-text-gradient",
      },
      {
        name: "nginx",
        color: "green-text-gradient",
      },
      {
        name: "Dockers",
        color: "pink-text-gradient",
      },
    ],
    image: nginx,
    source_code_link: "https://github.com/ajayD1345/simple-nginx-k8s",
  },
  {
    name: "Laravel site",
    description:
      "This project automates the deployment of a LAMP (Linux, Apache, MySQL, PHP) stack using Vagrant and Ansible. It deploys a Laravel php application and sets up server monitoring.",
    tags: [
      {
        name: "lamp-stack",
        color: "blue-text-gradient",
      },
      {
        name: "vagrant",
        color: "green-text-gradient",
      },
      {
        name: "bash-scripting",
        color: "pink-text-gradient",
      },
      {
        name: "ansible",
        color: "red-text-gradient",
      },
    ],
    image: laravel,
    source_code_link: "https://github.com/ajayD1345/Project-Laravel",
  },
  {
    name: "Sock Shop",
    description:
      "A microservices-based architecture application is deployed on Kubernetes and there’s a need to create a clear IaaC (Infrastructure as Code) deployment to be able to deploy the services in a fast manner.",
    tags: [
      {
        name: "terraform(Iaac)",
        color: "blue-text-gradient",
      },
      {
        name: "Ansible",
        color: "green-text-gradient",
      },
      {
        name: "monitoring-tools",
        color: "pink-text-gradient",
      },
      {
        name: "let's-encrypt",
        color: "red-text-gradient",
      },
      {
        name: "nginx-controller",
        color: "yellow-text-gradient",
      },
      {
        name: "Aws-eks",
        color: "blue-text-gradient",
      },
    ],
    image: sockshop,
    source_code_link: "https://github.com/ajayD1345/capstone_project",
  },
  {
    name: "Docker",
    description:
      "This project demonstrates how to containerize a simple Flask web application using Docker. The application displays \"Hello, Docker!\" at the root URL.",
    tags: [
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "Dockers",
        color: "pink-text-gradient",
      },
    ],
    image: dockerva,
    source_code_link: "https://github.com/ajayD1345/Web-application_containerization"
  },
  {
    name: "Static Website",
    description:
      "This project sets up the infrastructure for hosting a static website on AWS using Terraform. The infrastructure includes an S3 bucket, CloudFront distribution, Route 53 domain management, IAM roles and policies, API Gateway, and SSL certificates.",
    tags: [
      {
        name: "Aws-cloudfront",
        color: "yellow-text-gradient",
      },
      {
        name: "terraform",
        color: "blue-text-gradient",
      },
      {
        name: "Aws-s3",
        color: "green-text-gradient",
      },
      {
        name: "Aws-Apigateway",
        color: "pink-text-gradient",
      },
    ],
    image: S3static,
    source_code_link: "https://github.com/ajayD1345/Static.web-terraform"
  },
  {
    name: "Backup Scripting",
    description:
     "This project demonstrates how to create a simple backup script using Bash scripting. The script creates a compressed archive of a specified directory and uploads it to an S3 bucket for storage.",
    tags: [
      {
        name: "Bash-scripting",
        color: "yellow-text-gradient",
      },
     
    ],
    image: scripting,
    source_code_link: "https://github.com/ajayD1345/bash-scripting"
  },
];

export { services, technologies, experiences, testimonials, professionalSkills, education, certificates, projects };
