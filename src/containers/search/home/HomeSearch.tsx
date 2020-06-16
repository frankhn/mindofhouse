import React, { Component } from 'react'
import Select from 'react-select'
import './HomeSearch.scss'
import Input from '../../../components/elements/Input/Input'
import Button from '../../../components/elements/Button/Button'

interface Props {
    
}
interface State {
    
}

class HomeSearch extends Component<Props, State> {
    state = {}

    redirectToBrowse = () => {}

    render() {
        const options = [
            { value: 'chocolate', label: 'masaka' },
            { value: 'strawberry', label: 'gikondo, Sgm' },
            { value: 'vanilla', label: 'kimironko' }
          ]
          const cityOptions = [
            { value: 'kigali', label: 'Kigali' },
            { value: 'Kamembe', label: 'Kamembe' },
            { value: 'Rubavu', label: 'Rubavu' }
          ]
          const relevanceOptions = [
            { value: 'chocolate', label: 'Rent' },
            { value: 'strawberry', label: 'Land' },
            { value: 'vanilla', label: 'Appartment' }
          ]
        return (
            <div className="home-search">
                  <Select options={cityOptions} placeholder="Kigali city " />
                  <Select options={options} id="region" placeholder="select region" />
                  {/* <div>
                      <input placeholder="keyword"/>
                  </div> */}
                  <Select options={relevanceOptions} id="relevance" placeholder="Relevance" />
                  <div>
                      <Button
                      clicked={this.redirectToBrowse}
                      value="Search" />
                  </div>
            </div>
        )
    }
}

export default HomeSearch
