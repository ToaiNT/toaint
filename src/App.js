import FootBottom from 'components/Footer/FootBottom/FootBottom';
import FooterContainer from 'containers/Footer/FooterContainer';
import HeaderContainer from 'containers/HeaderContainer';
import { Route, Switch } from 'react-router';
import routes from 'routes';
import './App.css';

function App() {
  const showContentPage = (routes) => {
    if (!routes) return null;
    return routes.map((route, index) => (
      <Route key={index} path={route.path} exact={route.exact} component={route.main} />
    ));
  };
  return (
    <div className="App">
      <HeaderContainer />
      <Switch>{showContentPage(routes)}</Switch>
      <div style={{ height: 2 + 'px', with: 100 + '%', marginTop: 48 + 'px', backgroundColor: '#4285de' }} />
      <FooterContainer />
      <FootBottom />
    </div>
  );
}

export default App;
