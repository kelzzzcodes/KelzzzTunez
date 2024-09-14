import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faMusic,
  faShuffle,
  faBackwardStep,
  faForwardStep,
  faRepeat,
  faVolumeHigh,
  faEllipsis,
  faPlus,
  faMinus
} from '@fortawesome/free-solid-svg-icons'
import { faCirclePause, faHeart } from '@fortawesome/free-regular-svg-icons'
import { defineNuxtPlugin } from '#app'

// Disable auto CSS addition
config.autoAddCss = false

// Add icons to the library
library.add(
  faMusic,
  faShuffle,
  faBackwardStep,
  faCirclePause,
  faForwardStep,
  faRepeat,
  faVolumeHigh,
  faEllipsis,
  faHeart,
  faPlus,
  faMinus
)

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
})
