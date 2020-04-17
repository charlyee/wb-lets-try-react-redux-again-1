import React from 'react';
import store from '../store';
import { RootState } from '../store';
import { removeItemFromInventory, addItemToInventory } from '../store/inventory/action';
import { Item } from '../store/inventory/types';
import { Grid, Form, Input } from 'semantic-ui-react';
import { connect } from 'react-redux';
// import { dispatch } from 'redux';

export interface IInventoryProps {
  removeItemFromInventory: typeof removeItemFromInventory,
  addItemToInventory: typeof addItemToInventory,
  items: Item[]
}

export class Inventory extends React.Component<IInventoryProps>
{
  generateID = (): number => {
    let randomNumber: number = Math.floor( Math.random() * 1000 );
    randomNumber += this.props.items.length;
    return randomNumber;
  }
  newProduct = ( event: any ) => {
    event.preventDefault();
    // Handle retrieval of form field value.
    const formField: HTMLInputElement | null = document.querySelector( '[name="product-name"]' );
    let formFieldValue: string = '';
    if ( formField !== null ) formFieldValue = formField.value;
    // Add new item to inventory.
    this.props.addItemToInventory( {
      id: this.generateID(),
      name: formFieldValue
    } );
  }
  render ()
  {
    return (
      <Grid>
        <Form onSubmit={this.newProduct}>
          <Form.Field>
            <label htmlFor="product-name">Enter Product Name</label>
            <Input name="product-name" type='text' />
          </Form.Field>
          <Input type="submit" value="Add" />
        </Form>
        {this.props.items.map( element => (<div>{element.name}</div>) )}
      </Grid>
    );
  }
}

// Retrieve "items" from our "global" redux state.
const mapStateToProps = ( state: RootState ) => {
  return {
    items: state.inventory.items
  }
}

// Connect Redux and React using our values and "view!"
export default connect(
  mapStateToProps,
  { addItemToInventory, removeItemFromInventory }
)( Inventory );
