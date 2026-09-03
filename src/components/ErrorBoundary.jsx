import React from 'react'
import { Link } from 'react-router-dom'

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error) {
    console.error('Purohit Group render error:', error)
  }

  render() {
    if (this.state.hasError) {
      return (
        <section className="container" style={{ minHeight: '60vh', display: 'grid', placeItems: 'center', textAlign: 'center', padding: '8rem 1.5rem' }}>
          <div>
            <span className="eyebrow">TEMPORARY ERROR</span>
            <h1 style={{ margin: '1rem 0' }}>This page could not be loaded.</h1>
            <p style={{ maxWidth: 560, margin: '0 auto 2rem' }}>
              Please return to the company directory and open the profile again.
            </p>
            <Link className="btn primary" to="/">Back to home</Link>
          </div>
        </section>
      )
    }
    return this.props.children
  }
}
