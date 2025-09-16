import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "../src/index.css";

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
    <div>
      <Skill skillName="HTML + CSS" emoji="💪🏻" color="#915b14ff" />
      <Skill skillName="PYTHON" emoji="💪🏻" color="#9a9f19ff" />
      <Skill skillName="JAVA SCRIPT" emoji="💪🏻" color="#123456" />
      <Skill skillName="REACT" emoji="💪🏻" color="#0ba5b4ff" />
    </div>
  );
}
function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skillName}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
