import React from 'react';
import { RootState } from '../store';
import { removeItemFromInventory, addItemToInventory } from '../store/inventory/action';
import { Item } from '../store/inventory/types';
import { Grid, Form, Input } from 'semantic-ui-react';
import { connect } from 'react-redux';

export interface IInventoryProps {
  removeItemFromInventory: typeof removeItemFromInventory,
  addItemToInventory: typeof addItemToInventory,
  items: Item[]
}

export class Inventory extends React.Component<IInventoryProps>
{
  render ()
  {
    return (
      <Grid>
        <Form>{/*onSubmit=newProduct*/}
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
