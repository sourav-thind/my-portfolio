// import {
//     mobile,
//     backend,
//     creator,
//     web,
//     javascript,
//     typescript,
//     html,
//     css,
//     reactjs,
//     redux,
//     tailwind,
//     nodejs,
//     mongodb,
//     git,
//     figma,
//     docker,
//     meta,
//     starbucks,
//     tesla,
//     shopify,
//     carrent,
//     jobit,
//     tripguide,
//     threejs,
//   } from "../assets/tech/";
   import css from  "../assets/tech/css.png";
   import html from  "../assets/tech/html.png";
   import reactjs from  "../assets/tech/reactjs.png";
   import redux from  "../assets/tech/redux.png";
   import tailwind from  "../assets/tech/tailwind.png";
   import nodejs from  "../assets/tech/nodejs.png";
   import docker from  "../assets/tech/docker.png";
   import figma from  "../assets/tech/figma.png";
   import javascript from  "../assets/tech/javascript.png";
   import mongodb from  "../assets/tech/mongodb.png";
   import typescript from  "../assets/tech/typescript.png";
   import git from  "../assets/tech/git.png";
   import expressjs from  "../assets/tech/express.png";
   import nextjs from  "../assets/tech/nextjs.png";
  import threejs from  "../assets/tech/threejs.svg";
  import chatGpt from  "../assets/Project/chatGpt.png";
  import netflix from  "../assets/Project/netflix.png";
  import inotebook from  "../assets/Project/inotebook.png";
  import newsmonkey from  "../assets/Project/newsMonkey.png";
  import textutils from  "../assets/Project/textutils.png";

  //  import mongodb from  "../assets/tech/mongodb.png";
   
   
   export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  // const services = [
  //   {
  //     title: "Web Developer",
  //     icon: web,
  //   },
  //   {
  //     title: "React Native Developer",
  //     icon: mobile,
  //   },
  //   {
  //     title: "Backend Developer",
  //     icon: backend,
  //   },
  //   {
  //     title: "Content Creator",
  //     icon: creator,
  //   },
  // ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Express JS",
      icon: expressjs,
    },
    {
      name: "Next JS",
      icon: nextjs,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  // const experiences = [
  //   {
  //     title: "React.js Developer",
  //     company_name: "Starbucks",
  //     icon: starbucks,
  //     iconBg: "#383E56",
  //     date: "March 2020 - April 2021",
  //     points: [
  //       "Developing and maintaining web applications using React.js and other related technologies.",
  //       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //       "Implementing responsive design and ensuring cross-browser compatibility.",
  //       "Participating in code reviews and providing constructive feedback to other developers.",
  //     ],
  //   },
  //   {
  //     title: "React Native Developer",
  //     company_name: "Tesla",
  //     icon: tesla,
  //     iconBg: "#E6DEDD",
  //     date: "Jan 2021 - Feb 2022",
  //     points: [
  //       "Developing and maintaining web applications using React.js and other related technologies.",
  //       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //       "Implementing responsive design and ensuring cross-browser compatibility.",
  //       "Participating in code reviews and providing constructive feedback to other developers.",
  //     ],
  //   },
  //   {
  //     title: "Web Developer",
  //     company_name: "Shopify",
  //     icon: shopify,
  //     iconBg: "#383E56",
  //     date: "Jan 2022 - Jan 2023",
  //     points: [
  //       "Developing and maintaining web applications using React.js and other related technologies.",
  //       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //       "Implementing responsive design and ensuring cross-browser compatibility.",
  //       "Participating in code reviews and providing constructive feedback to other developers.",
  //     ],
  //   },
  //   {
  //     title: "Full stack Developer",
  //     company_name: "Meta",
  //     icon: meta,
  //     iconBg: "#E6DEDD",
  //     date: "Jan 2023 - Present",
  //     points: [
  //       "Developing and maintaining web applications using React.js and other related technologies.",
  //       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //       "Implementing responsive design and ensuring cross-browser compatibility.",
  //       "Participating in code reviews and providing constructive feedback to other developers.",
  //     ],
  //   },
  // ];
  
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
      name: "ChatGpt",
      description:
        "A Clone of ChatGpt, which has similar interface and features, where I used the openAI API to give response. We used Google service provider to login. We used NextJS, obviously react comes with that, Tailwind CSS, NodeJs and a bunch of other helping libraries. This application is not production ready yet but i will make it so soon.",
        tags: [
          {
            name: "nextjs",
            image: nextjs,
          },
          {
            name: "Tailwind",
            image: tailwind,
          },
          {
            name: "ReactJS",
            image: reactjs,
          },
      ],
      image: chatGpt,
      source_code_link: "https://github.com/sourav-thind/Chat-GPT",
      live_app_link:"https://chat-gpt-rouge-three.vercel.app/"
    },
    {
      name: "Netflix",
      description:
        "A perfect netflix clone, you will get confused what is this the real netflix, so starting with resources used, I used NextJS and react, NodeJS and for the styling I used the classsic CSS for styling, Yes Pure CSS. I used an API to give me the data I needed and rest was me and CSS.",
        tags: [
          {
            name: "nextjs",
            image: nextjs,
          },
          {
            name: "nodeJS",
            image: nodejs,
          },
          {
            name: "css",
            image: css,
          },
      ],
      image: netflix,
      source_code_link: "https://github.com/sourav-thind/Netflix-Clone-App",
      live_app_link:"https://netflix-clone-app-ivory.vercel.app/"
    },
    {
      name: "I notebook",
      description:
        "You Know Because of this application , I can call my self a full stack developer. This is a MERN stack application that allows you to add your notes, the good thing is that this is not just localhost, I hosted my own API on vercel and this application sends request to that api to get data. MongoDB atlas is used as database. Also the designing part is handled by Boostrap.",
        tags: [
          {
            name: "MongoDB",
            image: mongodb,
          },
          {
            name: "express",
            image: expressjs,
          },
          {
            name: "NodeJS",
            image: nodejs,
          },
          {
            name: "React JS",
            image: reactjs,
          },
      ],
      image: inotebook,
      source_code_link: "https://github.com/sourav-thind/iNoteBook",
      live_app_link: "https://i-note-book-jade.vercel.app/"
    },
    {
      name: "News Monkey",
      description:
        "This application was built React obviously. So this application fetches data from TheNewsAPI and displays as cards. There are several categories so you can switch according to your choise. This application is working but not live. Visit the about section of the application to learn more about this.",
     
        tags: [
          {
            name: "React JS",
            image: reactjs,
          },
          {
            name: "nodejs",
            image: nodejs,
          },
         
      ],
      image: newsmonkey,
      source_code_link: "https://github.com/sourav-thind/News_Monkey",
      live_app_link: "http://news-monkey-ten.vercel.app/"
    },
    {
      name: "Text Utils",
      description:
        "This is like one of my first real world application using react. This is called Text Utils. This is basically a sinple text utility application. You can convert the text to uppercase, lowecase, and copy it etc. It also counts you the words and time to read etc. Visit the about section of the application to learn more about the application.",
      tags: [
        {
          name: "React JS",
          image: reactjs,
        },
        {
          name: "redux",
          image: redux,
        },
        
      ],
      image: textutils,
      source_code_link: "https://github.com/sourav-thind/Text-Util",
      live_app_link: "http://text-util-eight.vercel.app/"
    },
  ];
  
  export { 
    //services,
     technologies,
   //   experiences, 
      testimonials, projects };
  