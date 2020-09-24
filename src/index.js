import React from 'react';
import ReactDOM from 'react-dom';

class Text extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sentence: "React State",
      name: "Igor",
      surname: "Torgaiev",
      age: 28, 
      hobbies: "programming, music",
      lifeview: "Christian",
      interest: "traveling",
      status: "single",
      languages: "English and Polish",
      mothertongues: "Ukrainian and Armenian"
    };
  }
  changeLanguage = () => {
    this.setState({mothertongues: "Ukrainian and Russian"});
  }
  render() {
    return(
      <div>
        <h1>Here we study the {this.state.sentence} topic</h1>
        <p>
          Hereinafter, we will continue the study of this topic.
          The current sentence has been appended, however, it doesn't start from the line below.
          No worries, we will figure it out.
        </p>
        <p>
          One more time have we tried and now it ServiceWorkerMessageEvent, i.e., this sentence starts from the next line like a new paragraph.  
        </p>
        <h2>
          Now, let's skip to a little bit more complicated level.
        </h2>
        <p>
          Let me introduce myself.
        </p>
        <p>
          My name is {this.state.name} {this.state.surname}.
          I am already {this.state.age} years old. But, this year I will be 29 years old.
        </p>
        <p>
          I am {this.state.status}, and I am {this.state.lifeview}.
        </p>
        <p>
          What I am interested are {this.state.hobbies} and {this.state.interest}.
        </p>
        <p>
          The foreign languages I know are {this.state.languages}. And, my mothertongues are {this.state.mothertongues}.
        </p>
        <p>
          Hold on..... there is a mistake in the previous sentence. Let's correct it.
        </p>
        <button type="button" onClick={this.changeLanguage}>
          Correct
        </button>
      </div>  
    );
  }
}

ReactDOM.render(<Text />, document.getElementById('main'));