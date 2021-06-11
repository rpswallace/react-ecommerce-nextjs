import App from 'next/app';
import TagManager from 'react-gtm-module'
import ReactGA from 'react-ga'
import { AnimatePresence } from 'framer-motion'
import { auth } from '../firebase/firebase.utils';
import Header from '../components/shared/Header'

// import Router from 'next/router';
// import UserContext from '../components/UserContext';

// Global CSS
import 'bootstrap/dist/css/bootstrap.min.css'
import '../assets/css/main.scss'

// Tag Manager (define the GTM ID)
const tagManagerArgs = {
  gtmId: '',
}

// Google Analytics ID
const gaID = ''
class MyApp extends App {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    if (tagManagerArgs.gtmId) {
      TagManager.initialize(tagManagerArgs)
    }

    if (gaID) {
      ReactGA.initialize(gaID)
      ReactGA.pageview(window.location.pathname + window.location.search)
    }

    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({
        currentUser: user
      })
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { Component, pageProps, router } = this.props;
    return (
      <AnimatePresence exitBeforeEnter>
        <Header currentUser={this.state.currentUser}/>
        <Component {...pageProps} key={router.route}/>
      </AnimatePresence>
    );
  }
}

export default MyApp
