export type Data = {
  id: number
  name: string
  year: number
  color: string
  pantone_value: string
}

export type Response = {
  page: number
  per_page: number
  total: number
  total_pages: number
  data: Data[]
  support: {
    url: string
    text: string
  }
}
