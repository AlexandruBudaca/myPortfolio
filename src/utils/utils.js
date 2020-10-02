import moment from "moment";

import seeTheFuture from "../assets/seethefuture.jpg";
import chatApp from "../assets/chatapp.jpg";
import overTheLine from "../assets/overtheline.jpg";
import countries from "../assets/countries.jpg";
import jobs from "../assets/jobs.jpg";
import movies from "../assets/movies.jpg";

const date = moment().format("LLLL");
const purple = "purple";
const red = "red";

export const cursor = (type_cursor) => {
  let cursors = document.getElementsByClassName(type_cursor);
  let i;
  for (i = 0; i < cursors.length; i++) {
    cursors[i].style.color = "transparent";
  }
};

export const typingTerminal = {
  type: [
    {
      id: 0,
      state: true,
      text: ` Last login: ${date}`,
      pasteString: "",
    },

    {
      id: 1,
      state: false,
      text: `<span id="name">Hi, I'm Alexandru Budaca!, I'm a full-stack developer!</span>`,
      pasteString: "",
    },
    { id: 2, state: false, text: "cd mySkills", pasteString: "" },
    {
      id: 3,
      state: false,
      text: " npx create-react-app frontend",
      pasteString: "<span>mySkills</span>",
    },
    {
      id: 4,
      state: false,
      text: " npm install react-bootstrap",
      pasteString: `<span>frontend</span> <span id=${purple}>git:(</span> <span id=${red}> master</span> <span id=${purple}> )</span>`,
    },
    {
      id: 5,
      state: false,
      text: "..",
      pasteString: "",
    },
    {
      id: 6,
      state: false,
      text: " mkdir backend cd backend",
      pasteString: `<span>mySkills</span>`,
    },
    {
      id: 7,
      state: false,
      text: " npm install express generator",
      pasteString: `<span>backend</span> <span id=${purple}>git:(</span> <span id=${red}> master</span> <span id=${purple}> )</span>`,
    },
    {
      id: 8,
      state: false,
      text: " npm install mongoose, mongodb",
      pasteString: "",
    },
    {
      id: 9,
      state: false,
      text: " touch Dockerfile",
      pasteString: "",
    },
    {
      id: 10,
      state: false,
      text: " mkdir circleCi",
      pasteString: "",
    },
    {
      id: 11,
      state: false,
      text: " touch config.yml",
      pasteString: `<span>circleCi</span>`,
    },
  ],
};

export const MyProjects = {
  projects: [
    {
      id: 0,
      idText: "",
      text: `<span id="ls" >myProjects</span> <span id="project-ls">ls</sapn>`,
      state: true,
      imgSrc: "",
      name: "",
      description: "",
    },
    {
      id: 1,
      idText: "overTheLine",
      text: `<span id="overTheLine">Over the line</span>`,
      state: true,
      imgSrc: overTheLine,
      name: "Over the line",
      description:
        "Final project for the graduation day and first project for a real client.",
      responsibilities: [
        "•	Frontend",
        "•	Design, Css",
        "•	Dev Ops -Docker -CircleCi",
        "•	Presenting the project with the team",
      ],
      achievements: [
        "•	Publicly launched on Refugee Week, a major UK festival",
        "• Fully responsive web application	",
        "•	Originally an MVP, client decided to accept it as fully functional application",
      ],
      link: "https://over-the-line.uk/",
      githubLink: "https://github.com/CodeYourFuture/over-the-Line",
    },
    {
      id: 2,
      idText: "seeTheFuture",
      text: ` <span id="seeTheFuture">See the future </span>`,
      state: false,
      imgSrc: seeTheFuture,
      name: "See the future",
      description:
        "A beautiful project in the Hackathon 2020 run by Capgemini and Code your future.",
      responsibilities: [
        "•	Develop the user log in and registration feature",
        "•	Manage the repository and deploy the project ",
        "•	Create private links for different access based on the type of users.",
      ],
      achievements: [
        "•	Winning Most Effective Solution (team award) for implementing the user registration feature.",
        "•	Winning Award Hero Helper for demonstrating the best team spirit by showing the most enthusiasm and effort to help out others regardless of which team they are in.",
      ],
      link: "https://see-the-future.netlify.app/",
      githubLink: "https://github.com/AlexandruBudaca/Hackathon-sf-ldn-2020",
    },

    {
      id: 3,
      idText: "chatApp",
      text: `<span id="chatApp">Chat App</span>`,
      state: false,
      imgSrc: chatApp,
      name: "Chat app",
      description:
        "Full-stack web application, working with api methods for edit and delete the messages.",
      responsibilities: [
        "•	Create the database",
        "•	Create the api",
        "•	Test it in Postman",
        "•	Create and connect the frontend with the server.",
      ],
      achievements: [
        "•	A fully working web application.",
        "•	Learing about the post method and edit. ",
      ],
      link: "https://cyf-alex-chat-app.netlify.app/",
      githubLink: "https://github.com/AlexandruBudaca/cyf-chat-react",
    },
    {
      id: 4,
      idText: "countries",
      text: `<span id="countries">Countries</span>`,
      state: false,
      imgSrc: countries,
      name: "Countries",
      description:
        "Full-stack web application, working with api methods for edit and delete the messages.",
      responsibilities: [
        "•	Create the database",
        "•	Create the api",
        "•	Test it in Postman",
        "•	Create and connect the frontend with the server.",
      ],
      achievements: [
        "•	A fully working web application.",
        "•	Learing about the post method and edit. ",
      ],
      link: "https://alex-countries.netlify.app/",
      githubLink: "https://github.com/AlexandruBudaca/countries-react",
    },
    {
      id: 5,
      idText: "jobs",
      text: `<span id="jobs">Filtered Jobs</span>`,
      state: false,
      imgSrc: jobs,
      name: "Filtered Jobs",
      description:
        "Full-stack web application, working with api methods for edit and delete the messages.",
      responsibilities: [
        "•	Create the database",
        "•	Create the api",
        "•	Test it in Postman",
        "•	Create and connect the frontend with the server.",
      ],
      achievements: [
        "•	A fully working web application.",
        "•	Learing about the post method and edit. ",
      ],
      link: "https://cyf-alex-chat-app.netlify.app/",
      githubLink: "https://github.com/AlexandruBudaca/cyf-chat-react",
    },
    {
      id: 6,
      idText: "movies",
      text: `<span id="movies">Tv Shows</span>`,
      state: false,
      imgSrc: movies,
      name: "Tv Shows",
      description:
        "Full-stack web application, working with api methods for edit and delete the messages.",
      responsibilities: [
        "•	Create the database",
        "•	Create the api",
        "•	Test it in Postman",
        "•	Create and connect the frontend with the server.",
      ],
      achievements: [
        "•	A fully working web application.",
        "•	Learing about the post method and edit. ",
      ],
      link: "https://cyf-alex-chat-app.netlify.app/",
      githubLink: "https://github.com/AlexandruBudaca/cyf-chat-react",
    },
  ],
};
