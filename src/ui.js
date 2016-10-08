import React from 'react';
import {TextInput, Rating, Spinner} from 'belle';

class UI extends React.Component {
  render() {
    return <div>
      <h1>Hello Wor3333</h1>
      <Spinner />
      <TextInput defaultValue="foo" />
      <Rating defaultValue={3} />
    </div>;
  }
}

module.exports = UI;
