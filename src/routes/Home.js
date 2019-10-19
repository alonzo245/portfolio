import React, { useState, useEffect, Link, Fragment } from 'react';
import styled, { withTheme } from 'styled-components';
import githubImage from '../assets/images/github.png'
import ProjectsFilter from '../components/ProjectsFilter';
import techImages from '../utils'
import initPojects from '../api';

const projectSourceUrlButton = url => (
  <a href={url} target="_blank"
    className="btn">View Source <img src={githubImage} alt="github" /></a>);

const projectUrlButton = demoUrl => (
  <a href={demoUrl} target="_blank"
    className="btn">View Project</a>);


const Home = (props) => {
  const [projects, setProjects] = useState(initPojects)
  const handleResetProjects = () => {
    setProjects(initPojects)
  }

  if (projects.length === 0) return 'loading....';

  return (
    <Fragment>
      <ProjectsFilter initPojects={initPojects} setProjects={setProjects} handleResetProjects={handleResetProjects}/>
      <CardContainer>
        {projects.map((project) => (
          <div key={project.name} className="card">
            <div className="cardContent">
              <h4>
                {project.name.replace(/[_,-]/g, ' ')}
              </h4>
              <p>
                {project.description}
              </p>
            </div>

            <div className="cardBadges">
              {project.technologies && project.technologies.map(technology => (
                <div key={technology} className="badge2"
                  style={{ backgroundImage: `url(${techImages[technology]})` }}
                ></div>
              ))}
            </div>

            <div className="cardButton">
              {project.url && projectSourceUrlButton(project.url)}
              {project.demoUrl && projectUrlButton(project.demoUrl)}
            </div>
          </div>
        ))}
      </CardContainer>
    </Fragment>
  );
}


const CardContainer = styled.div`
display: flex;
flex-flow:wrap;
justify-content:center;
position: relative;
/* border: solid 1px #fff; */
margin-top: 30px;
width: 100%;

@media (max-width: 1024px)  {
}

@media (max-width: 780px) and (min-width: 480px)  {
}

@media (max-width: 480px)  {

}

@media (min-width: 1025px)  {
  max-width: 1100px;

}

.card{
  margin: 10px;
  background-color: #1E242C;
  width: 240px;
  height: 320px;
  color: white;
  padding:5px 5px; 
  display:flex;
  flex-direction:column;
  align-items:center;
  transition: all 0.2s ease-in;

  &:hover{
    background-color: #12171d;

  }

  @media (max-width: 480px)  {
    width: 90%;
    margin: 10px;
  }

  .cardImage{
    justify-items: center;
    align-items: center;
    grid-area: cardImage;
    background-position: center center;
    background-size: cover;
    width:100%;
    height:100px;
    display:none;
  }

  .cardContent{
    justify-items: center;
    align-items: center;
    padding:5px;
    font-size:0.9rem;
    width:100%;
    height: 50%;
  }

  h4{
    font-size: 1.1rem;
    font-weight:bolder;
    border-bottom: solid #fff 1px;
    margin-bottom:10px;
    height:70px;
    align-items: center;
    display: flex;
  }

  .cardButton{
    display: flex;
    justify-content: center;
    position: relative;
    width: 100%;
    flex-grow: 1;
    align-items:flex-end;
    padding-bottom:5px;

    .btn{
      background: #1E242C;
      color: #fff;
      padding: 0.4rem 0.4rem;
      border: solid #fff 2px;
      cursor: pointer;
      font-size: 0.7rem;
      outline: none;
      transition: all 0.2s ease-in;
      align-items:center;
      display:flex;
      justify-content:space-around;
      margin: 0px 5px 0px 5px ;
      height: 36px;

      img{
        width:20px;
        height:20px;
      }
    }
  }

  .cardBadges{
    justify-items: center;
    align-items: center;
    flex-wrap:wrap;
    grid-area: cardBadges;
    display: flex;
    width:100%;
    margin: 5px 5px;
    justify-content:flex-start;

    .badge2{
      border-radius: 15px;
      width: 33px;
      height: 33px;
      background-repeat: no-repeat;
      background-position: center center;
      background-size: contain;
      margin: 5px;
    }
  }
}
`;

export default withTheme(Home);
