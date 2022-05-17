import ru from 'date-fns/locale/ru'
import moment from 'moment'

export const lastDayOfMonth = () => {
	const date = new Date()
	const lastDayDate = new Date(date.getFullYear(), date.getMonth() + 1, 0)
	return moment(lastDayDate).locale('ru').format('DD.MM')
}