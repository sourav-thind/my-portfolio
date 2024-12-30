
   import css from  "../ImageData/tech/css.png";
   import html from  "../ImageData/tech/html.png";
   import reactjs from  "../ImageData/tech/reactjs.png";
   import redux from  "../ImageData/tech/redux.png";
   import tailwind from  "../ImageData/tech/tailwind.png";
   import nodejs from  "../ImageData/tech/nodejs.png";
   import javascript from  "../ImageData/tech/javascript.png";
   import mongodb from  "../ImageData/tech/mongodb.png";
   import typescript from  "../ImageData/tech/typescript.png";
   import git from  "../ImageData/tech/git.png";
   import expressjs from  "../ImageData/tech/express.png";
   import nextjs from  "../ImageData/tech/nextjs.png";
  import threejs from  "../ImageData/tech/threejs.svg";
  import chatGpt from  "../ImageData/Project/chatGpt.png";
  import netflix from  "../ImageData/Project/netflix.png";
  import inotebook from  "../ImageData/Project/inotebook.png";
  import newsmonkey from  "../ImageData/Project/newsMonkey.png";
  import textutils from  "../ImageData/Project/textutils.png";

   
 
  

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
      name: "git",
      icon: git,
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
     technologies,
     projects };
  