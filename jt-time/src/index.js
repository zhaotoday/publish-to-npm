import dayjs from 'dayjs'

const DATE_FORMATTER = 'YYYY-MM-DD'
const TIME_FORMATTER = 'YYYY-MM-DD HH:mm'

export default {
  getDate (time) {
    return dayjs(time).format(DATE_FORMATTER)
  },
  getTime (time) {
    return dayjs(time).format(TIME_FORMATTER)
  },
  format (time, formatter) {
    return dayjs(time).format(formatter)
  },
  add (time, num, unit) {
    return dayjs(time).add(num, unit)
  }
}
