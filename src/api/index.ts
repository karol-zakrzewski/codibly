import { Data } from '../components/table/Table.types'
import { paths } from '../utils/paths'

export const getProducts = async (): Promise<Response> => {
  try {
    const res = await fetch(paths.fetchUrl)
    const data = await res.json()
    return data
  } catch (error) {
    throw Error('failed fetch')
  }
}

export const getProductById = async (id: string): Promise<{ data: Data }> => {
  try {
    const res = await fetch(`${paths.baseUrl}/${id}`)
    const data = await res.json()
    return data
  } catch (error) {
    throw Error('failed fetch')
  }
}
