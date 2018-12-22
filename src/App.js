import React, { Component, Fragment } from 'react';

import Footer from "./client/components/Footer";
import Header from "./client/components/Header";
import LowerContainer from "./client/Logic/LowerContainer";
//import UpperContainer from "./client/Logic/UpperContainer";
import { Grad, therapists } from "./Store";

class App extends Component {
  state = {
    therapists,
    therapist: {}
  }

  getTherapistByCity() {
    return Object.entries(
      this.state.therapists.reduce((therapists, therapist) => {
        const { Grad } = therapist

        therapists[Grad] = therapists[Grad]
          ? [...therapists[Grad], therapist]
          : [therapist]

        return therapists
      }, {})
    )
  }

  handleGradSelected = list => {
    this.setState({
      list
    })
  }



  handleTherapistSelected = Ime => {
    this.setState(({ therapists }) => ({
      therapist: therapists.find(ex => ex.Ime === Ime)
    }))
  }

  render() {
    const therapists = this.getTherapistByCity(),
      { list, therapist } = this.state

    return <Fragment>
      <Header />
      <LowerContainer
        therapist={therapist}
        list={list}
        therapists={therapists}
        onSelect={this.handleTherapistSelected}
      />
      <Footer
        list={list}
        Grad={Grad}
        onSelect={this.handleGradSelected}
      />
    </Fragment>
  }
}

export default App;



