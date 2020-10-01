import moment from "moment";
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
      text: `<span>myProjects</span> ls`,
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
      imgSrc:
        "https://coryrylan.com/assets/images/posts/types/javascript-1280x960.png",
      name: "Project1",
      description:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate.",
      responsibilities: "",
      achievements: "",
    },
    {
      id: 2,
      idText: "seeTheFuture",
      text: ` <span id="seeTheFuture">See the future </span>`,
      state: false,
      imgSrc:
        "https://www.freecodecamp.org/news/content/images/2020/01/js-image.jpeg",
      name: "Project2",
      description:
        "A beautiful project in the Hackathon 2020 run by Capgemini and Code your future.",
      responsibilities: "",
      achievements: "",
    },

    {
      id: 3,
      idText: "chatApp",
      text: `<span id="chatApp">Chat App</span>`,
      state: false,
      imgSrc:
        "https://images.ctfassets.net/yr4qj72ki4ky/legacyBlogPost77Thumbnail/cd4783ad7b35efc4367166a570a9952e/bigstock-Real-Java-Script-Code-Developi-217215433.jpg",
      name: "Project3",
      description:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate.",
      responsibilities: "",
      achievements: "",
    },
  ],
};
