import React, { useState } from 'react';
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

  return (
    <FilterWrapper>
      <button onClick={() => { setFilters([]); props.handleResetProjects() }}>Clear Filter</button>
      {filterList.map(filter => {
        return <button
          key={filter}
          onClick={() => toggleFilter(filter)}
          className={filters.includes(filter) ? "selected" : null}
        >{filter}</button>
      })}
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
margin-top: 80px;
padding: 0 5%;

@media (max-width: 700px) {
  margin-top: 110px;
}
@media (hover: none) {
  button:hover {
    background-color:#afafaf !important;
    color: #1E242C !important;
  }
}

button{
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
  &:hover{
    background-color:#fff;
    color:black;
  }
}

`;

export default withTheme(ProjectsFilter);
