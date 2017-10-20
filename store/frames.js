import { frames } from '../mock/frames.js'

export const state = () => ({
  frames
})

export const getters = {
  'frames': state => state.frames
}