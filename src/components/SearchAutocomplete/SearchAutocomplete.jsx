import React from 'react';
import { Button, Card, Container, Form, Row, Col } from 'react-bootstrap';
//import './SearchAutocomplete.css';

class Autocomplete extends React.Component {
  constructor(props) {
    super(props);
    this.items = [
      'David',
      'Andres',
      'Carlos',
    ];
    this.state = {
      suggestions: [],
      text: '',
    };
  }

  handleChange = (e) => {
    const { value } = e.target.value;
    let suggestions = [];
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, 'i');
      suggestions = this.items.sort().filter((v) => regex.test(v));
    }
    this.setState(() => ({ suggestions, text: value }));
  }

  suggestionsSelected(value) {
    this.setState(() => ({
      text: value,
      suggestions: [],
    }));

  }

  renderSuggestions() {
    const { suggestions } = this.state;
    if (suggestions.length === 0) {
      return null;
    }
    return (
      <ul>
        {suggestions.map((item) => <li onClick={() => this.suggestionsSelected(item)}>{item}</li>)}
      </ul>
    );

  }

  render() {
    const { text } = this.state;
    return (
      <>
        <input
          value={text}
          type='text'
          onChange={this.handleChange}
        />
        <ul>
          {this.renderSuggestions()}
        </ul>
      </>
    );
  }
}

export default Autocomplete;
