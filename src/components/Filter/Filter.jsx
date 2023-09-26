import React, { Component } from 'react';
import { FilterInput, FilterLabel } from './FilterStyled';

class Filter extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <div>
        <FilterLabel>
          Find contacts by name:
          <FilterInput
            type="text"
            name="value"
            value={value}
            onChange={onChange}
          />
        </FilterLabel>
      </div>
    );
  }
}

export default Filter;
