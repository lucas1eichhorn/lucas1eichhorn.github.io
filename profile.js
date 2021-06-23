export const skills = [
    {
        skill: 'PHP',
        percentage: '80',
        subskills: ['Laravel', 'Slim Framework', 'Xinergia Adhoc Framework']
    },
    {
        skill: 'HTML & CSS',
        percentage: '90',
        subskills: ['Bootstrap 3 & 4', 'Sass preprocessor', 'Less preprocessor']

    },
    {
        skill: 'Javascript',
        percentage: '80',
        subskills: ['jQuery', 'ES5 / ES6', 'Typescript', 'React', 'Angular']
    },

    {
        skill: 'Nodejs',
        percentage: '70',
        subskills: ['Express', 'Sails']
    },
    {
        skill: 'React',
        percentage: '70',
    },
    {
        skill: 'Angular',
        percentage: '40',
    },
    {
        skill: 'Ionic 3',
        percentage: '40',
    },
    {
        skill: 'API REST & GraphQL',
        percentage: '80',
    },
    {
        skill: 'QA: Testing & CI/CD',
        percentage: '70',
        subskills: ['JEST', 'Enzyme', 'Cucumber', 'Selenium', 'Robot Framework', 'WebDriver IO']
    },
    {
        skill: 'Databases',
        percentage: '80',
        subskills: ['MySQL', 'MariaDB', 'PostgreSQL', 'Oracle']
    }

]

export const learning = [
    {
        skill: 'Data Science',
        percentage: '20'
    },
    {
        skill: 'Machine Learning',
        percentage: '20'
    },
    {
        skill: 'Pyhton',
        percentage: '30',

    },
]

export const education = [
    {
        title: 'Information system engineer',
        subtitle: 'National Technological University (Argentina)',
        period: '2012 - 2019',
    },
    {
        title: 'Scrum Grand Master - Project management',
        subtitle: 'e-Learning center at UTN FRBA',
        period: '2019',
    },
]

export const certifications = [
    {
        title: 'AWS Cloud Practitioner Essentials',
        subtitle: 'Amazon Web Services (AWS)',
        period: 'May 2021',
    },
    {
        title: 'GitLab Certified Associate',
        subtitle: 'GitLab',
        period: 'May 2021',
    },
    {
        title: 'React & Redux',
        subtitle: 'Udemy',
        period: 'Apr 2019',
    },
    {
        title: 'Ionic 3: Hybrid mobiles apps',
        subtitle: 'Udemy',
        period: 'Jan 2019',
    },
]

export const languajes = [
    {
        name: 'Spanish',
        level: 'Native'
    },
    {
        name: 'English',
        level: 'B1 Intermediate (Studies in course: First)'
    },
]

export const experiences = [
    {
        company: "DoctorPlus SAS",
        from: "May 2020",
        role: "CTO & Fullstack Developer",
        description: `DoctorPlus is French startup that provides an e-health solution with well-being programs. Through video consultations it offers doctors and patients a platform to achieve remote medical consultations.
        This project started a few years ago, while I was working at the Xinergia consulting firm developing the application for Argentina, and some years later I got involved again to develop the product in France and even in Morocco in a future. 
        I have a huge variety of tasks here. In my role as a lead full stack developer, I work from analysis with the product owner to software implementations and even AWS Cloud management. 
        `,
        skills: "PHP, SQL, HTML, CSS, Javascript, jQuery, AWS Cloud Admin, API REST, Git"
    },
    {
        company: "MercadoLibre",
        from: "Ene 2020",
        to: "May 2020",
        role: "Front end & middle end developer",
        description: `MercadoLibre is the #1 marketplace in Latin America and one of the top 10 most visited e-commerce websites.
        I was part of the team that develops tools for sellers, more specifically the offers section that allows user set promotions in their products.
        Here I assumed the position of front/middle end developer. I used to work with JavaScript technologies such as React (server side rendering framework) or Node JS (express based framework), and additionally adopting agile methodologies like Scrum with my team.`,
        skills: "React, Node JS, Git, GraphQL, API REST, JEST, Enzyme, WebDriver IO"
    },
    {
        company: "NEORIS",
        from: "Jun 2019",
        to: "Ene 2020",
        role: "Fullstack Developer",
        description: `I worked in the argentinian subsidiary of this international software factory, specifically in the area of financial services for the private banking section. 
        Firstly my role was as fullstack developer, and then I was trained as a Scrum Master (National Technological University), to coordinate the work team that carried out projects with Angular and Java technologies.`,
        skills: "Angular+React, HTML, CSS, Scrum Master, Git, API REST, Cucumber, Selenium, Robot Framework"
    },
    {
        company: "Xinergia",
        from: "Nov 2015",
        to: "Jun 2019",
        role: "Fullstack Developer",
        description: `At the beginning of my professional career while I was at univeristy, I started working in this company and forming my profile as a fullstack web developer.
        Along many years I was in charge of analyze, design and implement a plenty of web systems, mobile applications, creation of e-commerce and advertising websites for different clients. 
        This tasks allowed customers to improve their internal proceses, management and brand positioning.`,
        skills: "PHP, HTML, CSS, Javascript, jQuery, ionic 3,SQL (MySQL/Oracle/Postgre), Database Admin, API REST, SVN"
    },

]

export const projects = [
    {
        name: "DoctorPlus",
        subtitle: "e-health & well-being",
        description: `This project is part of a French startup that provides an e-health solution with well-being programs. It offers doctors and patients a platform to achieve remote medical consultations using the power of videocalls over the WebRTC technologies.

        WebRTC (Web real-time communications) is a open source technology that allows websites to capture audio and video, as well as exchange arbitrary data between browsers without the need for an intermediary.
        
        This app is fully integrated with third party services such as Stripe for payments, SendGrid for mailing, and even AWS SNS (Simple Notification Services) to notify events between users.
        `,
        image: "doctorplus.jpg"
    },
    {
        name: "Serendipia Deco",
        subtitle: "e-commerce",
        description: `This project is an ecommerce for a home decoration store where customers can access an online store to browse through, and place orders for products or services via their own devices.
        
        The Covid-19 pandemic has increased the need for eCommerce with new consumer habits and has led this business to implement online commerce.
        
        Is a solution implemented with the fully customizable and open source Woocommerce platform built for WordPress. 
        `,
        image: "serendipia.jpg"
    },
    {
        name: "Cristian Brunet",
        subtitle: "Wedding photographer",
        description: `This was a project developed for an enthusiastic wedding photographer who wants to share the incredible moments captured with his camera on his own website.
        
        This website has a set of tools and functions that allow the best management option for a professional photographer.
        
        Developed with Laravel, one of the most popular MVC frameworks within the PHP ecosystem. Laravel is a flexible framework that allows to develop much faster and without so many demands of good practices at the beginning.
        `,
        image: "cristian-brunet1.jpg"
    },
    {
        name: "KeyWi",
        subtitle: "Smart lock with Arduino ",
        description: `KeyWi is an IoT solution that consists of an intelligent lock with a system embedded in a Raspeberry Pi powered by mobile devices with NFC service.  This was my final degree project at the university.

        The project seeks to provide convenience to the user, with the capacity for connectivity and data processing in IoT devices and to improve security aspects in electronic locks.
        
        The project has a mobile application that works as a key transmitting by NFC a unique code that is interpreted by an intelligent lock (Raspberry Pi inside) that allows / denies the opening of a door
        `,
        image: "keywi2.jpg"
    }, {
        name: "Taxi Tracker",
        subtitle: "Starter Ionic project",
        description: `It is probably not one of the bigges projects that I have done, but it represents all the small applications developed while learning mobile application development with Ionic.
        
        This app was part of an Udemy course. It consists on a tracking system for taxi company using mobile phones using GPS positioning and real time events on Google Firebase.
        `,
        image: "taxi-app.jpg"
    },

]