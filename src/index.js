import React, { PureComponent } from 'react'
import { render } from 'react-dom'

import 'react-select/dist/react-select.css';
import { Creatable } from 'react-select'

class Example extends PureComponent {
  state = {
    value: '',
    options: [
      { value: 'aaa', label: 'aaa' },
      { value: 'bbb', label: 'bbb' },
      { value: 'ccc', label: 'ccc' }
    ]
  }

  onChange = (selected) => {
    const { value } = selected || {}

    this.setState({ value })
  }

  render() {
    const { value, options } = this.state

    return <div>
      To reproduce: Type "zzz" as option option, then press enter.

      <br />

      <div>
        Works without `promptTextCreator`:
        <Creatable options={options}
          onChange={this.onChange}
          value={value} />
      </div>

      <div>
        Works when `promptTextCreator` returns something more than the label:
        <Creatable options={options}
          onChange={this.onChange}
          value={value}
          promptTextCreator={(label) => `Hi ${label}!`} />
      </div>

      <div>
        Fails when `promptTextCreator` returns just the label - menu stays open after pressing `enter`:
        <Creatable options={options}
          onChange={this.onChange}
          value={value}
          promptTextCreator={(label) => label} />
      </div>
    </div>
  }
}

render(<Example />, document.getElementById('root'));
