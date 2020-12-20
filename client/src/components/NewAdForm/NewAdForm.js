import React from 'react'
import { Button } from 'semantic-ui-react'
import { reduxForm, Field } from 'redux-form'
import TextField from '../TextField/TextField'
import TypeOptions from '../TypeOptions/TypeOptions'
import FieldFileInput from '../FieldFileInput/FieldFileInput'

function NewAdForm({handleSubmit, valid, submitting}) {
  return (
    <form className='form' onSubmit={handleSubmit}>
      <div className='form__row'>
        <Field className='form__input' name='city' label='Город' component={TextField} placeholder='Одесса'></Field>
      </div>
      <div className='form__row'>
        <Field className='form__input' name='description' label='Описание' component={TextField} placeholder='...'></Field>
      </div>
      <div className='form__row'>
        <Field className='form__input' name='type' label='Тип' component={TypeOptions} placeholder='Покупка/Продажа/Аренда'></Field>
      </div>
      <div className='form__row'>
        <Field className='form__input' name='price' label='Цена' component={TextField}></Field>
      </div>
      <div className='form__row'>
        <Field className='form__input' name='status' label='Статус' component={TextField}></Field>
      </div>
      {/* <div className='imageUpload'>
        <Field name='imageUpload' label='Загрузите фото' type='file' component={FieldFileInput}></Field>
      </div> */}
      <Button type='submit' disabled={!valid && !submitting}>Подать объявление</Button>
    </form>
  )
}

const validate = values => {
  const errors = {};
  if(!values.city){
    errors.city = 'Required'
  }
  if(!values.description){
    errors.description = 'Required'
  }
  if(!values.type){
    errors.type = 'Required'
  }
  if(!values.price){
    errors.price = 'Required'
  }
  return errors
}

export default reduxForm({
  form: "newAd",
  validate,
})(NewAdForm);