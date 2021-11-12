import React from 'react';
import { useNavigate } from 'react-router';
import { PASSWORD_RESET } from '../../api';
import useFetch from '../../hooks/useFetch';
import useForm from '../../hooks/useForm';
import Button from '../Form/Button';
import Input from '../Form/Input';
import Error from '../Helper/Error';

function LoginPasswordReset() {
  const [login, setLogin] = React.useState('')
  const [key, setKey] = React.useState('')

  const password = useForm()

  const navigate = useNavigate()

  const { error, loading, request } = useFetch()

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const key = params.get('key')
    const login = params.get('login')
    if (key) setKey(key)
    if (login) setLogin(login)
  }, [])

  async function handleSubmit(event) {
    event.preventDefault()
    if (password.validate) {
      const { url, options } = PASSWORD_RESET({
        login,
        key,
        password: password.value
      })

      const { response } = await request(url, options)
      if (response.ok) {
        navigate('/login')
      }
    }
  }

  return (
    <div>
      <h1 className="title">Resete a senha</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Nova Senha" type="password" name="password" {...password} />

        {loading
          ? <Button disabled>Enviando...</Button>
          : <Button>Resetar</Button>

        }
      </form>
      <Error error={error} />
    </div>
  )
}

export default LoginPasswordReset;
