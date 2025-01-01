
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
  import bravo from  "../ImageData/Project/Bravo.png";
   
 
  

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
        name: "Bravo Pizza",
        description:
          "A local Businees, sekking online presense contacted me about a website, I was able to fulfil their satisfaction by creating a site according to their customer base.",
          tags: [
            
            {
              name: "Tailwind",
              image: tailwind,
            },
            {
              name: "ReactJS",
              image: reactjs,
            },
        ],
        image: bravo,
        source_code_link: "https://github.com/sourav-thind/bravo-pizza",
        live_app_link:"https://www.bravopizzanb.com/"
      },
      {
        name: "ChatGpt",
        description:
          "A Clone of ChatGpt, which has similar interface and features. We used Google service provider to login.. This application is not production ready yet but i will make it so soon.",
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
          "A perfect netflix clone,starting with resources used, I used NextJS and react, NodeJS and classsic CSS for styling. I used an API to get the data.",
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
          "This is a MERN stack application that allows you to add your notes, this site sends request to another API hoster by me to get data. MongoDB atlas is used as database.",
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
          "This application fetches data from TheNewsAPI and displays as cards. There are several categories so you can switch according to your choice.",
       
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
          "My First React Application called Text Utils. This is a simnple text utility app. Converting text to uppercase, lowecaseetc . It also counts you the words and time to read etc.",
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
  