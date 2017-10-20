import { tools } from '../mock/tools.js'

export const state = () => ({
  tools
})

export const getters = {
  'tools': state => state.tools
}