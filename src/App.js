import React from 'react'
import Header from './components/header/Header'
import Home from './components/home/Home'
import About from './routes/About'
import Skills from './routes/Skills'
import Project from './routes/Project'
import Contact from './routes/Contact'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/skills" component={Skills} />
        <Route exact path="/project" component={Project} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </Router>
  )
}

export default App