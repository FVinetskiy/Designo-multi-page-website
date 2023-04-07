import React from 'react'
import './Form.scss'
import {useForm} from 'react-hook-form'

const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm({
    mode: 'onChange',
  })
  const onSubmit = (data) => {
    alert('your message has been sent')
    console.log(data)
    reset()
  }
  return (
    <section className='contact'>
      <div className='contact__content'>
        <h1 className='contact__title'>Contact Us</h1>
        <p className='contact__text'>
          Ready to take it to the next level? Let’s talk about your project or
          idea and find out how we can help your business grow. If you are
          looking for unique digital experiences that’s relatable to your users,
          drop us a line.
        </p>
      </div>

      <form className='form' onSubmit={handleSubmit(onSubmit)}>
        <div className='form__item'>
          <input
            className='form__input'
            {...register('name', {
              required: `Can't be empty`,
              pattern: {
                value: /^([^0-9]*)$/,
                message: 'Please use a valid name',
              },
            })}
            placeholder='Name'
            type='text'
          />
          {errors?.name && (
            <div className='form__error'>{errors.name.message}</div>
          )}
        </div>
        <div className='form__item'>
          <input
            className='form__input'
            {...register('email', {
              required: `Can't be empty`,
              pattern: {
                value:
                  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                message: 'Please use a valid email address',
              },
            })}
            placeholder='Email Address'
          />
          {errors?.email && (
            <div className='form__error'>{errors.email.message}</div>
          )}
        </div>

        <div className='form__item'>
          <input
            className='form__input'
            placeholder='Phone'
            type='text'
            {...register('Phone', {
              required: `Can't be empty`,
              pattern: {
                value:
                  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
                message: 'Please enter a valid Phone address',
              },
            })}
          />
          {errors?.Phone && (
            <div className='form__error'>{errors.Phone.message}</div>
          )}
        </div>
        <div className='form__item'>
          <textarea
            className='form__textarea'
            placeholder='Your Message'
            {...register('textarea', {
              required: `Enter your question`,
            })}></textarea>
          {errors?.textarea && (
            <div className='form__error'>{errors.textarea.message}</div>
          )}
        </div>

        <input value={'Submit'} className='button' type='submit' />
      </form>
    </section>
  )
}

export default Form
