'use client'
import React from 'react'
import { ListWrapper } from './List.styled'
import Item from '../Item/Item'

const data = [
  {
    number: '1',
    description:
      'They search for convenient STI testing locations, checking available dates, times, and prices.',
    title: 'Patients explore the map'
  },
  {
    number: '2',
    description:
      'Patients book an appointment and pay directly to the healthcare provider.',
    title: 'Book STI testing & pay directly to provider'
  },
  {
    number: '3',
    description: 'Only motivated patients who are ready to get tested show up.',
    title: 'Providers receive qualified leads'
  },
  {
    number: '4',
    description:
      'Reception staff spend less time answering questions about pricing, dates, and availability.',
    title: 'Less admin workload'
  },
  {
    number: '5',
    description:
      'Doctors go straight to testing and can recommend additional services such as vaccinations, follow-up visits, or preventive care.',
    title: 'Doctors focus on care & added value'
  }
]

type ListProps = {
  onSelect: (index: number) => void
}

const List = ({ onSelect }: ListProps) => {
  return (
    <ListWrapper>
      {data.map((item, index) => (
        <Item
          key={item.number}
          {...item}
          onSelect={() => onSelect(index)}
        />
      ))}
    </ListWrapper>
  )
}

export default List
export { data as howItWorksSteps }
