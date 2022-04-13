import React, { Component } from "react";
import "./App.css";
import People from "./Components/People";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      people: [
        {
          id: 1,
          fullName: "Anita Jones",
          bio: "Hi, I am Dr.Anita Jones. I have been helping people put their best smile forward for the past 15 years. My hobbies are reading and traveling the world!",
          imageSrc: "../Assets/femaleDentist.jpg",
          profession: "Dentist",
          shows: true,
        },
        {
          id: 2,
          fullName: "Benedict Paul",
          bio: "Hi, I am Dr. Benedict Paul. My goal is to develop a unique treatment plan for each of my patients and achieve the best possible outcome. Healing is my superpower!",
          imageSrc: "../Assets/maleSurgeon.jpg",
          profession: "Surgeon",
          shows: true,
        },
      ],
    };
  }

  handleChange = (id) => {
    this.setState({
      people: this.state.people.map((el) =>
        el.id === id ? { ...el, shows: !el.shows } : el
      ),
    });
  };

  render() {
    return (
      <div>
        <People
          people={this.state.people}
          handleChange={this.handleChange}
          hidePerson={this.hidePerson}
        />
      </div>
    );
  }
}
