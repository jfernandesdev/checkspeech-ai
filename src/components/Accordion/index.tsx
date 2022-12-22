import React from 'react'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { CaretDown } from 'phosphor-react'

import { solutionsAccordion } from '../../utils/solutionsAccordion'

import styles from './styles.module.scss'

export function Accordion() {
  return(
    <AccordionPrimitive.Root className={styles.accordionRoot} type="single" collapsible>
      {solutionsAccordion.map(item => (
        <AccordionPrimitive.Item key={item.title} className={styles.accordionItem} value={item.title}>
          <AccordionPrimitive.Trigger className={styles.accordionTrigger}>
            <div>
              <div className={styles.iconWrapper}>
                {React.createElement(item.icon)}
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