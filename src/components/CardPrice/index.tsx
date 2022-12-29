import { useTranslation } from 'next-i18next'
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
  const { t } = useTranslation('prices')
  
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
                  {`${item.timeInMinutes} ${t("minutes")} `}
                  <small>
                    ({item.extraMinutePrice ? `${formatPrice(item.extraMinutePrice)} / ${t("surplusMinute")}` : t("toMatch")})
                  </small>
                </strong>
              )}
            </span>
          </li>
        ))}
      </ul>

      <span className={styles.price}>
        {selectedPeriod === 'monthly' ? 
          (plan.monthlyPrice ? <span>R$ {plan.monthlyPrice}<small> / {t("month")}</small></span> : t("toMatch")):
          (plan.yearlyPrice ? <span>R$ {plan.yearlyPrice}<small> / {t("year")}</small></span> : t("toMatch"))
        }
      </span>
    
      <a href="#contact">
        {plan.monthlyPrice ? t("choosePlanButton") : t("buttonConsultPrice")}
      </a>
    </div>
  )
}