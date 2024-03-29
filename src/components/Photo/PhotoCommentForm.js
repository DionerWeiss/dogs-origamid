import React from 'react'
import { COMMENT_POST } from '../../api'
import { ReactComponent as Enviar } from '../../assets/enviar.svg'
import useFetch from '../../hooks/useFetch'
import Error from '../Helper/Error'
import styles from './PhotoCommentForm.module.css'

const PhotoCommentForm = ({ id, setComments, single }) => {
  const [comment, setComment] = React.useState('')

  const { request, error } = useFetch()

  async function handleSubmit(event) {
    event.preventDefault()
    const token = window.localStorage.getItem('token')
    const { url, options } = COMMENT_POST(id, { comment }, token)
    const { response, json } = await request(url, options)
    if (response.ok) {
      setComment('')
      setComments((comments) => [...comments, json])
    }
  }

  return (
    <form className={`${styles.form} ${single? styles.single : ''}`} onSubmit={handleSubmit}>
      <textarea
        className={styles.textarea}
        value={comment}
        id="comment"
        name="comment"
        placeholder="Comente..."
        onChange={({ target }) => setComment(target.value)} />
      <button className={styles.button}>
        <Enviar />
      </button>
      <Error error={error} />
    </form>
  )
}

export default PhotoCommentForm
