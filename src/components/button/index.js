import LanButton from './Button'

LanButton.install = vue => {
  vue.component(LanButton.name,LanButton)
}

if (typeof window !== 'undefined' && window.Vue) {
  LanButton.install(window.Vue)
}

export default LanButton
