import React from 'react'
import Link from 'next/link'
import './style.scss'

import arrow from './arrow.svg'

export const LinkTile = ({link, external}) =>
    <Link href={link.url || link.meta.html_url}>
        <a className={(external)? "link-tile link-tile--external" : "link-tile"}  target={external && "blank"}>
            {link.image && <img className="link-tile__image" src={link.image.meta.download_url} alt={link.image.title} loading="lazy"/>}
            <h3 className="link-tile__title">{link.title}</h3>
            <p className="link-tile__summary">{link.summary}</p>
            {external && <div className="link-tile__call-to-action">{link.link_text} <img className="link-tile__icon" aria-hidden="true" role="presentation" alt="" src={arrow}/></div>}
        </a>
    </Link>

export default ({links, external}) =>
    <section className="links">
        <h2 className={(external)? "links__title links__title--external section-title" : "links__title section-title"}>{(external)? "You may also find useful" : "Learn more"}</h2>
        {external && <p className="links__lede">Discover more about this issue from these trusted websites</p>}
        <div class="links__list">
            {links && links.map((link, i)=>
                <LinkTile link={link} key={i} external={external}/>            
            )}
        </div>
    </section>

