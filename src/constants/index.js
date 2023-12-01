import Taskify from '../assets/projects/taskify.jpeg'
import Disphotoplay from '../assets/projects/Disphotoplay.png'
import Mario from '../assets/projects/MarioLegacyIcon.png'
import Tankzone from '../assets/projects/Tank.png'
import TheRace from '../assets/projects/Car.png'
import { ReactIcon, java, js, python } from './imageindex'
const status = ["Finished", "Work In Progress"];
const types = ["Software", "Video Production"];


export const navLinks = [
  {
    id: "about",
    title: "About Me",
  },
  {
    id: "story",
    title: "My Journey",
  },
  {
    id: "projects",
    title: "Projects",
  },
];

const projects = [
    //* Status: 0 = Finished, 1 = WIP

    // Any Future Database Entries Should Follow This:
    //{
    //  id: 0,
    //  title: " title ",
    //  description: " brief disc.",
    //  type: " type of ",
    //  status: status[ 0 is finished, 1 is not ],
    //  date: "date",
    //  logo: Photo,
    //  tools: ["Tools Used"],
    //  points: [
    //    "Key Points"
    //  ],
    //  source_code: "link, if none just delete"
    //},

  {
    id: 0,
    title: "Taskify",
    description: "A small, simple, brief task app.",
    type: "Software",
    status: status[0],
    date: "September 2023",
    logo: Taskify,
    tools: ["React Native", "JavaScript", "Photoshop"],
    points: [
      "Used to learn the basics of React Native",
      "Used concepts from this on later projects",
    ],
    source_code: "https://github.com/joshrashtian/Taskify",
    featured: "yes",
  },
  {
    id: 1,
    title: "Disphotoplay",
    description: "A simple photo album application.",
    type: "Software",
    status: status[0],
    date: "March 2023",
    logo: Disphotoplay,
    tools: ["JavaScript", "Illustrator"],
    points: [
      "Used to learn the basics of JavaScript, and build a simple project.",
      "AP Computer Science Princples AP Exam",
    ],
    source_code: "https://github.com/joshrashtian/Disphotoplay",
    featured: "yes",
  },
  {
    id: 2,
    title: "FASFA PSA",
    description: "FASFA PSA that was submitted to the Hart District.",
    type: "Video Production",
    status: status[0],
    date: "March 2023",
    tools: ["Premiere Pro"],
    points: [
      "Used to learn the basics of JavaScript, and build a simple project.",
      "AP Computer Science Princples AP Exam",
    ],
    website: "https://www.youtube.com/watch?v=ej0LSopo77s&pp=ygUQZmFzZmEgd2VzdCByYW5jaA%3D%3D",
    featured: "no",
  },
  {
     id: 3,
     title: "Super Mario Legacy",
     description: "A simple Mario fan game for my Game Development Course.",
     type: "Video Game",
     status: status[1],
     date: "September 2019",
     logo: Mario,
     tools: ["Construct 3", "JavaScript"],
     points: [
       "Learned Asyncing", "Learned how to make a platformer"
     ],
     website: "https://gamegen.games/game/BjEpaGDJ2ksndAhKn",
     featured: "yes",
  },
  {
    id: 4,
    title: "Tankzone",
    description: "Two tanks can battle, Controller or Keyboard",
    type: "Video Game",
    logo: Tankzone,
    status: status[1],
    date: "August 2018",
    tools: ["Construct 3", "JavaScript"],
    points: [
      "Learned Asyncing", "Learned how to make a platformer"
    ],
    website: "https://gamegen.games/game/axrh2STs9q6aG3WdK",
    featured: "no",
 },
 {
  id: 5,
  title: "The Race",
  description: "Top Down Arcade Racer with a Different Path",
  type: "Video Game",
  logo: TheRace,
  status: status[0],
  date: "September 2018",
  tools: ["Construct 3", "JavaScript"],
  points: [
    "Learned Asyncing", "Learned how to make a platformer"
  ],
  website: "https://gamegen.games/game/nJamThw3CmYCA5bnh",
  featured: "no",
},
];

const studybases = [{
  title: "CMPSCI-111 Database",
  desc: "Introduction to Java",
  school: "College of the Canyons",
  grade: "A",
  source_code: "https://github.com/joshrashtian/CMPSCI-111_Codebase"
},
{
  title: "CMPSCI-182 Database",
  desc: "Data Structures",
  school: "College of the Canyons",
  grade: "N/A",
  source_code: "N/A"
}
]

const exprience = [
{
  title: "Programmer", 
  desc: "I have been interested in programming since I was a kid, when I was a kid I used to play around with Scratch and sometimes Code.Org, however around age 12 I picked up Construct 3 from a Game Development Course. It was a visual scripting based coding tool, and I spent a long time just trying out new ways to make my small little web games better. In 2022, I took the AP Computer Science Principles Course at my High School, and I instantly fell in love all over again. I fine-tuned my AP app and tried to put as much features as I could into it. As of 2023, I have been learning JavaScript, Java, React, Swift, as well as C#. And I have been enjoying my time learning all of these.",
},
{
  title: "Game Developer", 
  desc: "I was a part of a course called GameGen, where I learned not only the basics of Computer Science in the Programming Space, but some tips and tricks and the ins and outs when it comes to Game Development. I would test new ideas and new concepts and ways to make my small web games just a little bit more fun. Throughout this course, I learned how to develop and polish my own video games myself, and I loved every second of it. ",
},
{
 title: "Video Creator",
 desc: "As a kid, I was always interested in the idea of Video Production. It started by making small YouTube videos when I was 10 years old, and mostly just having fun doing so. But, I also grew quite an interest in how to create edited videos. In 2017, I picked up Hitfilm 4 Express, a lesser known video editing software. I would continue to build up my skills in my field, and even picked up Premiere Pro when I was a freshman in High School. I joined my school's TV program as well after taking Video Production. I grew to greatly enjoy making polished videos, and in this time picking up After Effects and sharpening my Premiere Pro skills. I would even go with my TV Team to the Student Television Network Convention in March, a competition. Our school's TV team, which I was a part of the Graphics Team, placed 3rd!",
},
{
 title: "Graphic Designer",
 desc: "",
}]

const skills = [{
  id: 1,
  skill: 'JavaScript',
  field: 'Programming',
  icon: js,
  color: 'font-mono',
  desc: '',
},
{
  id: 2,
  skill: 'ReactJS',
  field: 'Programming',
  color: 'font-mono',
  icon: ReactIcon,
  desc: '',
},
{
  id: 3,
  skill: 'React Native',
  field: 'Programming',
  color: 'font-mono',
  icon: ReactIcon,
  desc: '',
},
{
  id: 4,
  skill: 'Java',
  field: 'Programming',
  color: 'font-mono',
  icon: java,
  desc: '',
},
{
  id: 5,
  skill: 'Python',
  field: 'Programming',
  color: 'font-mono',
  desc: '',
  icon: python,
},
{
  id: 6,
  skill: 'Premiere Pro',
  field: 'Video Production',
  color: 'font-light',
  desc: '',
},
]

export { exprience, projects, studybases, skills };