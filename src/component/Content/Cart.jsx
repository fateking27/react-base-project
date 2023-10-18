import React, { Component } from 'react';

class LicensePlateGenerator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      plates: [],
      isPaused: false,
      selectedPlate: null,
    };
  }

  generateRandomPlate = () => {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const generateRandomString = (length) => {
      let result = '';
      const characters = '0123456789';
      for (let i = 0; i < length; i++) {
        if (i < 3) {
          result += characters.charAt(Math.floor(Math.random() * characters.length));
        } else {
          result += letters.charAt(Math.floor(Math.random() * letters.length));
        }
      }
      return result;
    };

    const randomPlates = Array(6)
      .fill()
      .map(() => generateRandomString(5))
      .sort(() => Math.random() - 0.5);

    this.setState({ plates: randomPlates, selectedPlate: null });
  };

  handlePauseClick = () => {
    this.setState((prevState) => ({ isPaused: !prevState.isPaused }));
  };

  handlePlateClick = (plate) => {
    this.setState({ selectedPlate: plate });
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      if (!this.state.isPaused) {
        this.generateRandomPlate();
      }
    }, 300);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <button onClick={this.handlePauseClick}>
          {this.state.isPaused ? '继续' : '暂停'}
        </button>
        {this.state.plates.map((plate, index) => (
           <li
            key={index}
            className="license-plate"
            onClick={() => this.handlePlateClick(plate)}
          >
            {plate}
          </li>
        ))}
        {this.state.selectedPlate && (
          <div className="selected-plate">
            你选择了：{this.state.selectedPlate}
          </div>
        )}
      </div>
    );
  }
}

export default LicensePlateGenerator;
