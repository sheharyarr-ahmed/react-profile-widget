import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "../src/index.css";
const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="me.jpeg" alt="pic of me"></img>;
}
function Intro() {
  return (
    <div>
      <h1>SHEHARYAR AHMED</h1>
      <p>
        I’m a passionate Full-Stack Developer in the making, I’ve already
        mastered the core of JavaScript and am now expanding into backend
        technologies like Node.js, Express, and database management, as well as
        modern front-end frameworks like React. My focus is on creating
        seamless, scalable, and user-focused applications from the ground up.
      </p>
    </div>
  );
}
function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill.skill} color={skill.color} level={skill.level} />
      ))}
    </div>
  );
}
function Skill({ skill, color, level }) {
  return (
    <div style={{ backgroundColor: color }} className="skill">
      <span>{skill}</span>
      <span>
        {level === "advanced" && "💪🏻"}
        {level === "intermediate" && "👍🏻"}
        {level === "beginner" && "👶🏻"}
      </span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
