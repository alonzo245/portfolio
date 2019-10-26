import React, { useState, Fragment } from 'react';
import styled, { withTheme } from 'styled-components';

const ProjectsFilter = (props) => {
  const filterList = ['mongodb', 'typescript', 'mongoose', 'android', 'angular', 'css3', 'expressjs', 'gatsby', 'graphql', 'html5', 'javascript', 'jwt', 'kotlin', 'nodejs', 'reactjs', 'reactnative', 'redux', 'rxjs', 'sass', 'vuejs', 'svelte', 'webpack', 'lodash', 'python', 'flask', 'springAmin', 'vue', 'vuex', 'ejs', 'django', 'styled'];
  const [filters, setFilters] = useState([])

  const toggleFilter = filterInput => {
    let updatedFilters = [];
    if (filters.includes(filterInput)) {
      updatedFilters = filters.filter(itemFilter => itemFilter !== filterInput)
      setFilters(updatedFilters);
    } else {
      updatedFilters = [...filters, filterInput]
      setFilters(updatedFilters)
    }

    let updatedProjects = props.initPojects.filter(project => {
      let result = false;
      updatedFilters.forEach(itemFilter => {
        if (project.technologies.includes(itemFilter)) result = true;
      })
      return result;
    })
    // console.log(updatedProjects)
    if (updatedProjects.length > 0) props.setProjects(updatedProjects)
  }

  const [visible, setVisible] = useState(false)

  const handleClick = () => {
    setVisible(!visible)
  }

  return (
    <FilterWrapper >

      <label for="check" className="button">Filters</label>
      <input id="check" type="checkbox" />

      <div className="panel">
        <button 
        className="clearFilters"
        onClick={() => { setFilters([]); props.handleResetProjects() }}>Clear Filter</button>
        {filterList.map(filter => {
          return <button
            key={filter}
            onClick={() => toggleFilter(filter)}
            className={filters.includes(filter) ? "selected" : null}
          >{filter}</button>
        })}
      </div>
    </FilterWrapper>
  )
}

const FilterWrapper = styled.div`
max-width:1100px;
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
flex-wrap:wrap;
margin-top: 150px;
padding: 0 5%;

/* 000000000000000 */
input {
  display: none;
}

label {
  cursor: pointer;
  display: inline-block;
  padding: 10px 20px;
  border: 1px solid;
  border-radius: 4px;
  background: #336600;
  color: #FFF;
  font-family: arial;
  transition: background-color 0.1s, color 0.1s;
}

/* label:hover {
  background: #33CC00;
  color: #000;
} */

.panel {
  transition: height .3s ease;
  height: 0;
  overflow: hidden;
  max-width: 1100px;
  margin-top: 10px;
  display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
flex-wrap:wrap;
}

input:checked + .panel {
  height: fit-content;
}
/* 000000000000000 */

.clearFilters{
  background-color: #3a3a3c;
}

@media (max-width: 700px) {
  margin-top: 110px;
}
/* @media (hover: none) {
  button:hover {
    background-color:#afafaf !important;
    color: #1E242C !important;
  }
} */

button, .button{
  background: #1E242C;
  color: #fff;
  padding: 0.4rem 0.4rem;
  border: solid #fff 2px;
  cursor: pointer;
  font-size: 0.9rem;
  outline: none;
  transition: all 0.2s ease-in;
  align-items:center;
  display:flex;
  justify-content:space-around;
  margin: 3px ;
  height: 36px;
  
  &.selected{
    background-color:#afafaf;
    color: #1E242C;
  }
  /* &:hover{
    background-color:#fff;
    color:black;
  } */
}

`;

export default withTheme(ProjectsFilter);
