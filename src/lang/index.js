import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Cookies from 'js-cookie'
import elementEnLocale from 'element-ui/lib/locale/lang/en' // element-ui lang
import elementZhLocale from 'element-ui/lib/locale/lang/zh-CN'// element-ui lang
import enLocale from './en'
import zhLocale from './zh'

Vue.use(VueI18n)

const messages = {
  en: {
    ...enLocale,
    ...elementEnLocale
  },
  zh: {
    ...zhLocale,
    ...elementZhLocale
  }
}

// 根据浏览器语言设置本地语言
let localLang = (navigator.language || navigator.browserLanguage).toLowerCase()
if (localLang === 'zh-cn') {
  localLang = 'zh'
} else {
  localLang = 'en'
}

const i18n = new VueI18n({
  locale: Cookies.get('language_owner') || localLang,
  messages
})

export default i18n
