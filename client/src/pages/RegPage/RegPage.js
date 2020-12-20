import React, { useCallback, useState } from 'react'
import { Header, Message } from 'semantic-ui-react'
import RegForm from '../../components/RegForm/RegForm'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function RegPage() {
  const [ signUpSuccess, setSignUpSuccess ] = useState(false);

  const onSubmit = useCallback(async values => {
    const result = await axios.post('http://localhost:5000/api/registration', values)
    setSignUpSuccess(true)
  },[])
  
  return (
    <div className='container'>
      { signUpSuccess ? 
        <Message
          success
          header='Вы успешно зарегистрировались!'
          content={<Link to='/auth'>Войти</Link>}
        />
      :
        <div>
          <Header as='h2'>Заполните поля что-бы зарегистрироваться</Header>
          <RegForm onSubmit={onSubmit}/>
        </div>
      }
    </div>
  )
}