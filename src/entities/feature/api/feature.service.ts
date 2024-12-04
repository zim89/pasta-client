import axios from 'axios'

import { SERVER_URL } from '@/shared/constants'
import { Feature } from '../model'

class FeatureService {
  private BASE_URL = SERVER_URL + '/our-advantages'

  async getFeatures() {
    try {
      return (await axios.get<Feature[]>(this.BASE_URL)).data
    } catch (err) {
      console.error(err)
    }
  }
}

export const featureService = new FeatureService()
