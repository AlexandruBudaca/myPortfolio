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
