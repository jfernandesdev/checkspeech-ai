import { Check } from 'phosphor-react'

import { formatPrice } from '../../utils/formatPrice'

import styles from './styles.module.scss'

interface CardPriceProps {
  selectedPeriod?: 'monthly' | 'yearly'
  plan: {
    title: string,
    monthlyPrice?: number,
    yearlyPrice?: number,
    cardIsActive: boolean,
    features: { 
      name: string, 
      timeInMinutes?: number | string,
      extraMinutePrice?: number
    }[]
  }
}

export function CardPrice({ plan, selectedPeriod = 'monthly' }: CardPriceProps) {
  return (
    <div className={`${styles.card} ${plan.cardIsActive && styles.active}`}>
      <h3 className={styles.title}> {plan.title} </h3>

      <ul className={styles.listOfFeatures}>
        {plan.features.map((item) => (
          <li key={item.name}>
            <span className={styles.checkIcon}><Check /></span>
            <span>
              {item.name}

              {item.timeInMinutes && (
                <strong>
                  {item.timeInMinutes} minutos {' '}
                  <small>
                  ({item.extraMinutePrice ? `${formatPrice(item.extraMinutePrice)} / min excedente` : 'A combinar'})
                  </small>
                </strong>
              )}
            </span>
          </li>
        ))}
      </ul>

      <span className={styles.price}>
        {selectedPeriod === 'monthly' ? 
          plan.monthlyPrice ? <span>R$ {plan.monthlyPrice}<small> / mês</small></span> : 'A combinar' :
          plan.yearlyPrice ? <span>R$ {plan.yearlyPrice}<small> / ano</small></span> : 'A combinar'
        }
      </span>
    
      <a href="#contact">
        {plan.monthlyPrice ? 'Escolher Plano' : 'Consultar preço'}
      </a>
    </div>
  )
}