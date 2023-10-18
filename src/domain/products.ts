export type Products = {
  category: string
  price: string
  stocked: boolean
  name: string
}

export const PRODUCTS_DATA: Products[] = [
  { category: 'Fruits', price: '$1', stocked: true, name: 'Apple' },
  { category: 'Fruits', price: '$1', stocked: true, name: 'Dragonfruit' },
  { category: 'Fruits', price: '$2', stocked: false, name: 'Passionfruit' },
  { category: 'Fruits', price: '$1', stocked: true, name: 'Banana' },
  { category: 'Fruits', price: '$1', stocked: true, name: 'Orange' },
  { category: 'Fruits', price: '$2', stocked: false, name: 'Pineapple' },
  { category: 'Fruits', price: '$2', stocked: true, name: 'Watermelon' },
  { category: 'Vegetables', price: '$1', stocked: true, name: 'Carrot' },
  { category: 'Vegetables', price: '$1', stocked: true, name: 'Potato' },
  { category: 'Vegetables', price: '$2', stocked: false, name: 'Tomato' },
  { category: 'Vegetables', price: '$1', stocked: true, name: 'Cucumber' },
  { category: 'Vegetables', price: '$2', stocked: true, name: 'Broccoli' },
  { category: 'Vegetables', price: '$2', stocked: false, name: 'Cauliflower' },
  { category: 'Vegetables', price: '$2', stocked: true, name: 'Spinach' },
  { category: 'Vegetables', price: '$4', stocked: false, name: 'Pumpkin' },
  { category: 'Vegetables', price: '$1', stocked: true, name: 'Peas' },
]
