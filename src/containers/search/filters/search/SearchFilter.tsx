import React, { Fragment } from "react";
import Select from "react-select";
// import RangeSlider from 'reactrangeslider';
import Button from '../../../../components/elements/Button/Button'
import './SearchFilters.scss'

export interface ISearchFilterProps {};

const SearchFilter: React.FC<ISearchFilterProps> = (props) => {
        const options = [
            { value: 'chocolate', label: 'Chocolate' },
            { value: 'strawberry', label: 'Strawberry' },
            { value: 'vanilla', label: 'Vanilla' }
          ]
          const relevanceOptions = [
            { value: 'chocolate', label: 'Rent' },
            { value: 'strawberry', label: 'Land' },
            { value: 'vanilla', label: 'Appartment' }
          ]
        return (
            <div className="search--filters">
                  <Select options={options} placeholder="select region" />
                  <Select options={relevanceOptions} placeholder="area, region" />
                  <Select options={relevanceOptions} placeholder="Relevance" />
                  <Select options={relevanceOptions} placeholder="Price" />
                  <div>
                      <Button
                      class="search--btn"
                      value="Search" />
                  </div>
            </div>
        )
}

export default SearchFilter;