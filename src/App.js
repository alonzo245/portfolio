import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components'
import Nav from './components/Nav'
import Layout from './hoc/Layout'

const theme = {
  primaryColor: '#04C2C9',
  darkColor: '#343a40',
  lightColor: '#f4f4f4',
  dangerColor: '#dc3545',
  successColor: '#28a745',
  maxWidth: '1100px'
}

const Home = lazy(() => import('./routes/Home'));
const About = lazy(() => import('./routes/About'));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Router>
          <Suspense fallback={<div>Loading...</div>}>
            <Nav />

            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/portfolio" component={Home} />
              <Route exact path="/about" component={About} />
            </Switch>
          </Suspense>
        </Router>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
