import Header from '../components/header'
import ExtLink from '../components/ext-link'

import sharedStyles from '../styles/shared.module.css'
import contactStyles from '../styles/contact.module.css'

import GitHub from '../components/svgs/github'
import Twitter from '../components/svgs/twitter'
import Envelope from '../components/svgs/envelope'
import LinkedIn from '../components/svgs/linkedin'

const contacts = [
  {
    Comp: Twitter,
    alt: 'twitter icon',
    link: 'https://twitter.com/ch11aki',
  },
  {
    Comp: GitHub,
    alt: 'github icon',
    link: 'https://github.com/ch1aki',
  },
  {
    Comp: LinkedIn,
    alt: 'linkedin icon',
    link: 'https://www.linkedin.com/in/chiaki-sugawara-2b7605135/',
  },
]

export default () => (
  <>
    <Header titlePre="Links" />
    <div className={sharedStyles.layout}>
      <h1 style={{ marginTop: 0 }}>Links</h1>

      <div className={contactStyles.name}>ch1aki - SRE</div>

      <div className={contactStyles.links}>
        {contacts.map(({ Comp, link, alt }) => {
          return (
            <ExtLink key={link} href={link} aria-label={alt}>
              <Comp height={32} />
            </ExtLink>
          )
        })}
      </div>
    </div>
  </>
)
