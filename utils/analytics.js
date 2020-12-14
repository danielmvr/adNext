// utils/analytics.js (https://medium.com/@austintoddj/using-google-analytics-with-next-js-423ea2d16a98)
import ReactGA from 'react-ga'
export const initGA = () => {
  console.log('GA init')
  ReactGA.initialize('G-GE686WPV6X')
}
export const logPageView = () => {
  console.log(`Logging pageview for ${window.location.pathname}`)
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
}
export const logEvent = (category = '', action = '') => {
  if (category && action) {
    ReactGA.event({ category, action })
  }
}
export const logException = (description = '', fatal = false) => {
  if (description) {
    ReactGA.exception({ description, fatal })
  }
}