import React from 'react';
import checkboxes from '../checkboxes';
import Checkbox from './Checkbox';

class CheckboxContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checkedItems: new Map(),
      
    }

    this.handleChange = this.handleChange.bind(this);
    
    //console.log('Ale....',props);

      

  }

  handleChange(e) {
    const item = e.target.name;
    const isChecked = e.target.checked;
    this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item, isChecked) }));
    
    this.props.setCheckboxes(this.state.checkedItems);
    console.log('State:__', this.state.checkedItems);
    console.log('Url:__',e.target.url,e.target.name)
    
  }

  render() {
    return (
      <React.Fragment>
        {
          checkboxes.map(item => (
            <label key={item.key}>
              <Checkbox name={item.name} checked={this.state.checkedItems.get(item.name)} onChange={this.handleChange} />
              {item.label}
            </label>
          ))
        }
      </React.Fragment>
    );
  }
}

export default CheckboxContainer;