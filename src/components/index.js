import XHeader from './XHeader'
import XFooter from './XFooter'
import Cell from './Cell'
import CellGroup from './CellGroup'
import LangSelect from './LangSelect' // 选择语言
import XLabel from './XLabel'
import XTitle from './XTitle'

const components = {
  XHeader,
  XFooter,
  Cell,
  CellGroup,
  LangSelect,
  XLabel,
  XTitle
}

const install = function (Vue) {
  for (let name in components) {
    Vue.component(name, components[name])
  }
}

export {
  install,
  XHeader,
  XFooter,
  Cell,
  CellGroup,
  LangSelect,
  XLabel,
  XTitle
}
