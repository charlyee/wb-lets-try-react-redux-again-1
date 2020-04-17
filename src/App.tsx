import React from 'react';
// import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import Inventory from './components/Inventory';

function App() {
  return (
    <Grid centered>
      <Grid.Row>
        <h1>Let's Try React &amp; Redux... Again!</h1>
      </Grid.Row>
      <Grid.Row>
        {/* Products. */}
        <Inventory />
      </Grid.Row>
      <Grid.Row>
        {/* Cart. */}
      </Grid.Row>
    </Grid>
  );
}

export default App;
