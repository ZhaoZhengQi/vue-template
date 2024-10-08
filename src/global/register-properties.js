import { formatUtcString } from '@/utils'

export default function registerProperties(app) {
  app.config.globalProperties.$filters = {
    foo() {
      console.log('foo')
    },
    formatTime(value) {
      return formatUtcString(value)
    },
  }
}
