import React from 'react'
import { Dropdown,Label } from 'semantic-ui-react'
import './TypeOptions.scss'

export default function TypeOptions() {
  const options = [
    { key: 1, text: 'Покупка', value: 1 },
    { key: 2, text: 'Продажа', value: 2 },
    { key: 3, text: 'Аренда', value: 3 },
  ]

  return (
    <div className='dropdownContainer'>
      <Label className='dropdownContainer__label' size='large' for='type'>Тип</Label>
      <Dropdown className='dropdownContainer__options' name='type' clearable options={options} selection />
    </div>
  )
}
