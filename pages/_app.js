// NextJS
import App from 'next/app';

// Firebase
import { auth, createUserProfileDocument } from '../firebase/firebase.utils';

// Custom Components
import Header from '../components/shared/Header'

// Redux
import { Provider } from 'react-redux';
import { createWrapper } from 'next-redux-wrapper';
import store from '../redux/store';
import { setCurrentUser } from '../redux/user/user-action';

// SEO
import TagManager from 'react-gtm-module'
import ReactGA from 'react-ga'

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

  unsubscribeFromAuth = null;

  componentDidMount() {

    if (tagManagerArgs.gtmId) {
      TagManager.initialize(tagManagerArgs)
    }

    if (gaID) {
      ReactGA.initialize(gaID)
      ReactGA.pageview(window.location.pathname + window.location.search)
    }

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      // https://redux.js.org/tutorials/fundamentals/part-2-concepts-data-flow
      store.dispatch({ type: 'SET_CURRENT_USER', payload: userAuth })
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { Component, pageProps, router } = this.props;
    return (
      <Provider store={store}>
        <Header/>
        <Component {...pageProps} key={router.route}/>
      </Provider>
    );
  }
}

// https://www.youtube.com/watch?v=UXMGGI3TSs4
const makeStore = () => store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(MyApp);
