import { useState } from 'react'

import { Title } from '../Title'
import { Text } from '../Text'
import { CardPrice } from '../CardPrice'

import { planInformation } from '../../utils/planInformation'

import styles from './styles.module.scss'

type periodPlansTypes = 'monthly' | 'yearly'

export function Prices() {
  const [periodPlans, setPeriodPlans] = useState<periodPlansTypes>('monthly')

  function handleTogglePeriodPlans(selectedPeriod: periodPlansTypes) {
    setPeriodPlans(selectedPeriod)
  }

  return (
    <section className={styles.container}>
        <Title>Planos & Preços</Title>
        <div className={styles.header}>
          <Text>
            Independentemente de suas necessidades serem grandes <br />ou pequenas, estamos aqui para ajudá-lo.
          </Text>

          <div className={styles.togglePeriodPlans}>
            <button 
              id="monthly"
              onClick={() => handleTogglePeriodPlans('monthly')}
              className={periodPlans === 'monthly' ? styles.active : ''}
            >
              Mensal
            </button>
            <button 
              id="yearly"
              onClick={() => handleTogglePeriodPlans('yearly')}
              className={periodPlans === 'yearly' ? styles.active : ''}
              >
              Anual
            </button>
          </div>
        </div>

        <div className={styles.planCards}>
         {planInformation.map(plan => (
           <CardPrice key={plan.title} plan={plan} selectedPeriod={periodPlans} />
         ))}
        </div>
    </section>
  )
}