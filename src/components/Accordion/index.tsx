import { createElement } from 'react'
import { useTranslation } from 'next-i18next'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { CaretDown, FileAudio, ClosedCaptioning, Translate, Smiley } from 'phosphor-react'

import styles from './styles.module.scss'

export function Accordion() {
  const { t } = useTranslation('solutions')

  const solutionsAccordion = [
    { title: t('titleAccordion1'), content: t('textAccordion1'), icon: FileAudio, },
    { title: t('titleAccordion2'), content: t('textAccordion2'), icon: ClosedCaptioning},
    { title: t('titleAccordion3'), content: t('textAccordion3'), icon: Translate },
    { title: t('titleAccordion4'), content: t('textAccordion4'), icon: Smiley }
  ]

  return(
    <AccordionPrimitive.Root className={styles.accordionRoot} type="single" collapsible>
      {solutionsAccordion.map(item => (
        <AccordionPrimitive.Item key={item.title} className={styles.accordionItem} value={item.title}>
          <AccordionPrimitive.Trigger className={styles.accordionTrigger}>
            <div>
              <div className={styles.iconWrapper}>
                {createElement(item.icon)}
              </div>
              <span>{item.title}</span>
            </div>
            <CaretDown className={styles.accordionChevron} />
          </AccordionPrimitive.Trigger>
          <AccordionPrimitive.Content className={styles.accordionContent}>
           {item.content}
          </AccordionPrimitive.Content>
        </AccordionPrimitive.Item>
      ))}
    </AccordionPrimitive.Root>
  )
}