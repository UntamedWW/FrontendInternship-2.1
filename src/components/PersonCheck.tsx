import React from 'react';
import axios from 'axios';

interface Person {
  id: number;
  name: string;
}

interface State {
  persons: Person[];
  idSelected: number;
}

export default class HealthCheck extends React.Component<{}, State> {
  state: State = {
    persons: [],
    idSelected: -1
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons: Person[] = res.data;
        this.setState({ persons });
      })
  }

  handleOnClick = (person: Person, index: number) => {
    this.setState({ idSelected: index });
  }

  render() {
    return (
      <ul>
        {
          this.state.persons.map((person, index) => (
            <li 
              className={this.state.idSelected === index ? 'person-list active' : 'person-list'} 
              key={person.id} 
              onClick={() => this.handleOnClick(person, index)}
            >
              {person.name}
            </li>
          ))
        }
      </ul>
    )
  }
}
