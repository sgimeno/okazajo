import React from 'react'
import 'rc-calendar/assets/index.css'
import FullCalendar from 'rc-calendar/lib/FullCalendar'

import 'rc-select/assets/index.css'
import Select from 'rc-select';

import zhCN from 'rc-calendar/lib/locale/zh_CN';
import enUS from 'rc-calendar/lib/locale/en_US';

import moment from 'moment';
import 'moment/locale/zh-cn';
import 'moment/locale/en-gb';

const format = 'YYYY-MM-DD';
const cn = location.search.indexOf('cn') !== -1;

const now = moment();
if (cn) {
  now.locale('zh-cn').utcOffset(8);
} else {
  now.locale('en-gb').utcOffset(0);
}

const defaultCalendarValue = now.clone();
// defaultCalendarValue.add(-1, 'month');

function onSelect(value) {
  console.log('select', value.format(format));
}


export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      type: 'date'
    }

    this.onTypeChange = this.onTypeChange.bind(this)
  }

  onTypeChange (type) {
    this.setState({
      type
    })
  }

  render () {
    return (
      <div style={{ zIndex: 1000, position: 'relative' }}>
      <FullCalendar
          style={{ margin: 10 }}
          Select={Select}
          fullscreen
          defaultValue={now}
          onSelect={onSelect}
          type={this.state.type}
          onTypeChange={this.onTypeChange}
          locale={cn ? zhCN : enUS}
        />
      </div>
    )
  }
}
