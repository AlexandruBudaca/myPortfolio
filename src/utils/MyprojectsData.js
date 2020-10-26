import seeTheFuture from "../assets/seethefuture.jpg";
import chatApp from "../assets/chatapp.jpg";
import overTheLine from "../assets/overtheline.jpg";
import countries from "../assets/countries.jpg";
import jobs from "../assets/jobs.jpg";
import movies from "../assets/movies.jpg";

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
        "•	Create and connect the frontend with the server",
      ],
      achievements: [
        "•	A fully working web application",
        "•	Learning about the post method and edit ",
        "•	Learning Postaman. ",
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
      description: "Web application, working with external api.",
      responsibilities: [
        "•	Fetch multiple api",
        "•	Create filters",
        "•	Create dark mode",
      ],
      achievements: ["•	A fully working web application.", "•	Responsive. "],
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
      description: "Web application working on filtered arrays.",
      responsibilities: ["•	Filter the arrays using methods", "•	Css"],
      achievements: ["•	Learn about filtering in arrays"],
      link: "https://alex-jobs.netlify.app/",
      githubLink: "https://github.com/AlexandruBudaca/job-listings-react",
    },
    {
      id: 6,
      idText: "movies",
      text: `<span id="movies">Tv Shows</span>`,
      state: false,
      imgSrc: movies,
      name: "Tv Shows",
      description: "Website, working with external api in JavasScript.",
      responsibilities: [
        "•	Manipulate the DOM in JavaScript",
        "•	Fetch the api",
        "•	CSS",
      ],
      achievements: [
        "•	A fully working and responsive web application.",
        "•	Learning about the DOM. ",
        "•	Learning JavaScript. ",
      ],
      link: "https://alex-movies.netlify.app/",
      githubLink: "https://github.com/AlexandruBudaca/tv-show-dom-project",
    },
    {
      id: 7,
      idText: "hotel",
      text: `<span id="hotel">Hotel App</span>`,
      state: false,
      imgSrc: movies,
      name: "Hotel App",
      description: "Full stack, working with api.",
      responsibilities: ["•	Working with api", "•	CSS"],
      achievements: [
        "•	A fully working and responsive web application.",
        "•	Learning MongoDb. ",
        "•	Learning Express. ",
      ],
      link: "https://alex-hotel-app.netlify.app/",
      githubLink: "https://github.com/AlexandruBudaca/cyf-hotel-react",
    },
  ],
};
