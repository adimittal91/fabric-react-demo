import * as React from 'react';
import { Dropdown } from 'office-ui-fabric-react/lib/Dropdown';

class DropdownBasicExample extends React.Component{
  constructor() {
    super();
    this.state = {
      selectedItem: null
    };
  }

  render() {
    let { selectedItem } = this.state;

    return (
      <div className='ms-DropdownBasicExample'>

        <Dropdown
          label='Controlled example:'
          selectedKey={ selectedItem && selectedItem.key }
          onChanged={ (item) => this.setState({ selectedItem: item }) }
          options={
            [
              { key: 'A', text: 'Option a' },
              { key: 'B', text: 'Option b' },
              { key: 'C', text: 'Option c' },
              { key: 'D', text: 'Option d' },
              { key: 'E', text: 'Option e' },
              { key: 'F', text: 'Option f' },
              { key: 'G', text: 'Option g' },
            ]
          }
        />
        </div>
        )
    }
}

export default DropdownBasicExample;