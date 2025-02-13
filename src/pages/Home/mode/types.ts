export type ProductType = {
  barcode: string | null
  catalogcode: string
  catalogname: string
  count: string
  created_at: string
  deliverysum: string
  deliverysumwithvat: string
  id: number
  invoice_id: number
  marks: string | null
  measureid: number | null
  name: string
  ordno: number
  packagecode: number
  packagename: string
  sale_product_id: number | null
  summa: string
  updated_at: string
  vatrate: number
  vatsum: string
}

export type StateTextType = {
  state: number
  text: string
  class: string
  status: string
}

export type ConnectType = {
  buyer_name: string
  buyer_tin: string
  company_id: number
  contract_date: string
  contract_id: number | null
  contract_number: string
  created_at: string
  hascommittent: number
  haslgota: number
  hasmarking: number
  hasvat: number
  id: number
  invoice_date: string
  invoice_id: string
  invoice_number: string
  is_bind: number
  notes: string
  partner_id: number
  payable_total: string
  products: ProductType[]
  sale_id: number | null
  seller_name: string
  seller_tin: string
  stateid: string
  statetext: StateTextType
  sum_delivery: string
  sum_total: string
  updated_at: string
}
