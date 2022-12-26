import { Controller, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import * as Checkbox from '@radix-ui/react-checkbox'
import ReactFlagsSelect from 'react-flags-select'
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input'

import { Title } from "../Title";

import { Check } from 'phosphor-react'

import styles from './styles.module.scss'
import 'react-phone-number-input/style.css'

const newContactFormSchema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  country: yup.string().required(),
  phone: yup.string().required().test('is-valid-phone-number', function(value) {
    return value ? isValidPhoneNumber(value) : this.createError()
  }),
  message: yup.string().required(),
  terms: yup.boolean().oneOf([true], 'You must accept the terms and conditions')
})

type NewContactFormInputs = yup.InferType<typeof newContactFormSchema>

export function ContactForm() {
  const methods = useForm<NewContactFormInputs>({
    resolver: yupResolver(newContactFormSchema),
  })

  const { register, handleSubmit, control, reset, formState: { errors, isSubmitting }} = methods;
 
  function handleNewContact(data: NewContactFormInputs) {
    console.log(data);

    // reset();
  }

  return (
    <form onSubmit={handleSubmit(handleNewContact)} className={styles.form}>
      <Title>Fale conosco</Title>

      <div>
        <label htmlFor="name">
          <span>Nome:</span>
          <input
            type="text"
            id="name"
            {...register('name')}
            className={errors.name ? styles.inputErrorAlert : ''}
          />
        </label>

        <label htmlFor="email">
          <span>E-mail: </span>
          <input
            type="email"
            id="email"
            {...register('email')}
            className={errors.email ? styles.inputErrorAlert : ''}
          />
        </label>
      </div>

      <div>
        <label htmlFor="country">
          <span>País: </span>
          <Controller
            control={control}
            name='country'
            defaultValue='BR'
            render={({ field: { onChange, value } }) => (
              <ReactFlagsSelect
                selected={value}
                onSelect={onChange}
                customLabels={{ BR: "Brasil" }}
                className={`${styles.selectCountry} ${errors.country && styles.inputErrorAlert}`}
                searchable
                placeholder="Selecione seu país"
                searchPlaceholder="Buscar país..."
              />
            )}
          />
        </label>

        <label htmlFor="phone" className={styles.inputPhone}>
          <span>Telefone: </span>
          <Controller
            control={control}
            name='phone'
            render={({ field: { onChange, value } }) => (
               <PhoneInput
                value={value}
                onChange={onChange}
                international
                defaultCountry='BR'
                countryCallingCodeEditable={false}
                className={errors.phone && styles.inputErrorAlert}
              /> 
            )}
          />
        </label>
      </div>

      <label htmlFor="message">
        <span>Mensagem:</span>
        <textarea
          id="message"
          {...register('message')}
          className={errors.message ? styles.inputErrorAlert : ''}
          placeholder="Digite sua mensagem..."
        />
      </label>

      <label className={`${styles.labelCheckbox} ${errors.terms && styles.inputErrorAlert}`}>
        <Controller 
          control={control}
          name='terms'
          defaultValue={false}
          render={({ field: { onChange, value } }) => (
            <Checkbox.Root
              checked={value}
              onCheckedChange={onChange}
              className={`${styles.checkbox} ${errors.terms && styles.inputErrorAlert}`}
            >
              <Checkbox.Indicator>
                <Check size={30} color='var(--cyan)' />
              </Checkbox.Indicator>
            </Checkbox.Root>
          )}
        />
        Eu concordo com a <a>Política de Privacidade</a>
      </label>

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Enviando...' : 'Enviar mensagem'}
      </button>
    </form>
  )
}