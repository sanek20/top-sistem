import { AuthPage } from '../Pages/AuthPage'
import { BonusOperationPage } from '../Pages/BonusOperationPage'
import { CatalogItemPage } from '../Pages/CatalogItemPage'
import { CatalogPage } from '../Pages/CatalogPage'
import { MainPage } from '../Pages/MainPage'
import { PollItemPage } from '../Pages/PollItemPage/PollItemPage'
import { PollsPageSC } from '../Pages/PollPageSC/PollsPageSC'
import { PollsMainPage } from '../Pages/PollsMainPage/PollsMainPage'
import { ProfilePage } from '../Pages/ProfilePage'
import { QrScan } from '../Pages/QrScan'
import { SuccessTransactionPage } from '../Pages/SuccessTransactionPage/SuccessTransactionPage'
import { VerifiedEmailPage } from '../Pages/VerifiedEmailPage'


export const routes = [
	{ path: '/', name: 'Main', authenticated: true, Component: MainPage },
	{
		path: '/profile',
		name: 'Profile',
		authenticated: true,
		Component: ProfilePage
	},
	{
		path: '/catalog',
		name: 'Catalog',
		authenticated: true,
		Component: CatalogPage
	},
	{
		path: '/catalog/:id',
		name: 'CatalogItemPage',
		authenticated: true,
		Component: CatalogItemPage
	},
	{
		path: '/auth',
		name: 'AuthPage',
		authenticated: false,
		Component: AuthPage
	},
	{ path: '/scan', name: 'QrScan', authenticated: true, Component: QrScan },
	{
		path: '/bonus/:number',
		name: 'Bonus',
		authenticated: true,
		Component: BonusOperationPage
	},
	{
		path: '/success-transaction/:bonusAmount',
		name: 'SuccessTransactionPage',
		authenticated: true,
		Component: SuccessTransactionPage
	},
	{
		path: '/verified/:emailParam',
		name: 'Verified Email',
		authenticated: true,
		Component: VerifiedEmailPage
	},
	{
		path: '/polls/:idSC',
		name: 'PollsPageSC',
		authenticated: true,
		Component: PollsPageSC
	},
	{
		path: '/polls/:idSC/:idPoll',
		name: 'PollItemPage',
		authenticated: true,
		Component: PollItemPage
	},
	{
		path: '/polls-page',
		name: 'PollsMainPage',
		authenticated: true,
		Component: PollsMainPage
	}
]