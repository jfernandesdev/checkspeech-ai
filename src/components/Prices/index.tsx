import { useTranslation } from 'next-i18next'
import { useState } from 'react'

import { Title } from '../Title'
import { Text } from '../Text'
import { CardPrice } from '../CardPrice'

import styles from './styles.module.scss'

type periodPlansTypes = 'monthly' | 'yearly'

export function Prices() {
  const { t } = useTranslation('prices')
  const [periodPlans, setPeriodPlans] = useState<periodPlansTypes>('monthly')

  function handleTogglePeriodPlans(selectedPeriod: periodPlansTypes) {
    setPeriodPlans(selectedPeriod)
  }

  const planInformation = [
    {
      title: 'Beginner',
      monthlyPrice: 29,
      yearlyPrice: 328,
      cardIsActive: false,
      features: [
        { name: t("asynchronousAudioTranscription"), timeInMinutes: 120, extraMinutePrice: 0.20 },
        { name: t("realtimeAudioTranscription"), timeInMinutes: 90, extraMinutePrice: 0.40 },
        { name: t("identificationOfLanguagesInAudios"), timeInMinutes: 200, extraMinutePrice: 0.05 },
        { name: t("sentimentAnalysisFromAudio"), timeInMinutes: 120, extraMinutePrice: 0.40 },
      ]
    },
    {
      title: 'Business',
      monthlyPrice: 44,
      yearlyPrice: 499,
      cardIsActive: true,
      features: [
        { name: t("asynchronousAudioTranscription"), timeInMinutes: 200, extraMinutePrice: 0.15 },
        { name: t("realtimeAudioTranscription"), timeInMinutes: 120, extraMinutePrice: 0.40 },
        { name: t("identificationOfLanguagesInAudios"), timeInMinutes: 500, extraMinutePrice: 0.03 },
        { name: t("sentimentAnalysisFromAudio"), timeInMinutes: 200, extraMinutePrice: 0.35 },
      ]
    },
    {
      title: 'Enterprise',
      cardIsActive: false,
      features: [
        { name: t("asynchronousAudioTranscription"), timeInMinutes: '+200' },
        { name: t("realtimeAudioTranscription"), timeInMinutes: '+120' },
        { name: t("identificationOfLanguagesInAudios"), timeInMinutes: '+500' },
        { name: t("sentimentAnalysisFromAudio"), timeInMinutes: '+200' },
        { name: t("specialPricesForLargeVolumes") },
        { name: t("technicalSupportPriority") },
        { name: t("dedicatedAccountManager") },
      ]
    },
  ]

  return (
    <section className={styles.container} id="prices">
        <Title>{t("title")}</Title>

        <div className={styles.header}>
          <Text>
            {t("subtitle")}
          </Text>

          <div className={styles.togglePeriodPlans}>
            <button 
              id="monthly"
              onClick={() => handleTogglePeriodPlans('monthly')}
              className={periodPlans === 'monthly' ? styles.active : ''}
              aria-label={t("monthly")}
            >
            {t("monthly")}
            </button>
            <button 
              id="yearly"
              onClick={() => handleTogglePeriodPlans('yearly')}
              className={periodPlans === 'yearly' ? styles.active : ''}
              aria-label={t("yearly")}
              >
            {t("yearly")}
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