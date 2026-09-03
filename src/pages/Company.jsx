import { ArrowUpRight, MapPin, Phone, MessageCircle, Mail } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { companies } from '../data/companies'
import SectionTitle from '../components/SectionTitle'

function CompanyNotFound({ slug }) {
  return (
    <section className="container" style={{ minHeight: '60vh', display: 'grid', placeItems: 'center', textAlign: 'center', padding: '8rem 1.5rem' }}>
      <div>
        <span className="eyebrow">404 / COMPANY NOT FOUND</span>
        <h1 style={{ margin: '1rem 0' }}>Company profile unavailable.</h1>
        <p style={{ maxWidth: 560, margin: '0 auto 2rem' }}>
          We could not find a company profile for “{slug}”. Please return to the group homepage and choose a company again.
        </p>
        <Link className="btn primary" to="/">Back to home</Link>
      </div>
    </section>
  )
}

export default function Company() {
  const { slug } = useParams()
  const company = companies.find((item) => item.slug === slug)

  if (!company) return <CompanyNotFound slug={slug} />

  const gallery = Array.isArray(company.gallery) ? company.gallery.filter(Boolean) : []
  const stats = Array.isArray(company.stats) && company.stats.length
    ? company.stats
    : [['01', 'Focused expertise'], ['02', 'Trusted relationships'], ['03', 'Long-term growth'], ['04', 'Responsive service']]

  return (
    <>
      <section className="company-hero">
        <img src={company.hero} alt={company.name} />
        <div className="company-hero-overlay" />
        <div className="container company-hero-inner">
          <span>{company.category}</span>
          <h1>{company.name}</h1>
          <p>{company.description}</p>
          <div className="hero-actions">
            <a className="btn primary" href={`tel:+${company.phone}`}>
              <Phone size={16} /> Call us
            </a>
            <a className="btn glass" href={`https://wa.me/${company.whatsapp}`} target="_blank" rel="noreferrer">
              <MessageCircle size={17} /> WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="company-intro container">
        <div>
          <SectionTitle eyebrow="01 / Company profile" title={'A distinct business.<br/><em>A shared standard.</em>'} />
          <p>{company.description}</p>
          <p>
            This profile is powered from a single company data file, so the layout remains consistent across the group while each company&apos;s content, photos, videos, contacts and location can be changed independently.
          </p>
        </div>
        <div className="stat-row">
          {stats.map((stat, index) => (
            <div key={`${stat[0]}-${index}`}>
              <strong>{stat[0]}</strong>
              <span>{stat[1]}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="company-video">
        <video autoPlay muted loop controls playsInline poster={company.hero}>
          {company.video ? <source src={company.video} type="video/mp4" /> : null}
        </video>
        <div className="video-caption">
          <span>02 / COMPANY VIDEO</span>
          <h2>Inside the business.</h2>
        </div>
      </section>

      <section className="gallery container">
        <SectionTitle
          eyebrow="03 / Gallery"
          title={'A closer look at <em>our work</em>'}
          copy="Replace these images with the company&apos;s actual photographs, product catalogue or project portfolio."
        />
        <div className="gallery-grid">
          {gallery.length ? gallery.map((image, index) => (
            <figure className={index === 0 ? 'wide' : ''} key={`${image}-${index}`}>
              <img src={image} alt={`${company.name} gallery ${index + 1}`} />
              <figcaption>{String(index + 1).padStart(2, '0')}</figcaption>
            </figure>
          )) : (
            <div className="logo-placeholder">Gallery images coming soon</div>
          )}
        </div>
      </section>

      <section className="location-section">
        <div className="container location-grid">
          <div>
            <SectionTitle eyebrow="04 / Visit us" title={'Find the <em>company</em>'} />
            <p>{company.location}</p>
            <div className="contact-actions">
              <a className="btn primary" href={company.map} target="_blank" rel="noreferrer">
                <MapPin size={17} /> Open in Google Maps
              </a>
              <a className="btn soft" href={`mailto:${company.email}`}>
                <Mail size={17} /> Email us
              </a>
            </div>
          </div>
          <div className="map-card">
            <iframe
              title={`${company.name} location map`}
              src={`https://www.google.com/maps?q=${encodeURIComponent(company.location)}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <section className="company-contact container">
        <SectionTitle center eyebrow="05 / Contact" title={'Let&apos;s build the <em>next step</em>'} />
        <div className="contact-cards">
          <a href={`tel:+${company.phone}`}>
            <Phone />
            <small>Phone</small>
            <strong>{company.phone ? `+91 ${company.phone.slice(0, 5)} ${company.phone.slice(5)}` : 'Call the company'}</strong>
          </a>
          <a href={`https://wa.me/${company.whatsapp}`} target="_blank" rel="noreferrer">
            <MessageCircle />
            <small>WhatsApp</small>
            <strong>Chat with the team</strong>
          </a>
          <a href={`mailto:${company.email}`}>
            <Mail />
            <small>Email</small>
            <strong>{company.email}</strong>
          </a>
        </div>
      </section>

      <div className="next-company">
        <Link to="/">← Back to all companies</Link>
        <Link to="/contact">Group contact <ArrowUpRight size={17} /></Link>
      </div>
    </>
  )
}
