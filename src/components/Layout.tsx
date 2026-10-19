import {Menu,X,UserRound,MessageCircle} from 'lucide-react';
import {useEffect,useState} from 'react';
import {Link,NavLink,useLocation} from 'react-router-dom';
import {useBusiness} from '../lib/business';

const nav=[['Home','/'],['Our Story','/about'],['Services','/services'],['Our Work','/work'],['Contact','/contact']];
export function Layout({children}:{children:React.ReactNode}){
 const [open,setOpen]=useState(false),{pathname}=useLocation(),{settings}=useBusiness();
 const bookingHeader=pathname==='/book',lightHeader=pathname!=='/',shortName=settings.salonName.replace(/^salon\s+/i,''),whatsapp=settings.whatsapp.replace(/\D/g,'');
 useEffect(()=>{setOpen(false);window.scrollTo(0,0)},[pathname]);
 return <>
  <header className={`site-header${lightHeader?' site-header-light':''}${bookingHeader?' site-header-booking':''}`}><Link className="wordmark" to="/" aria-label={`${settings.salonName} home`}><span>SALON</span><strong>{shortName}</strong></Link>
   <nav className={open?'nav open':'nav'} aria-label="Main navigation">{nav.map(([label,path])=><NavLink key={path} to={path}>{label}</NavLink>)}<Link to="/account" className="account"><UserRound size={17}/> Account</Link><Link to="/book" className="button dark mobile-book">Book an appointment</Link></nav>
   <div className="header-actions"><Link to="/book" className="button dark desktop-book">Book an appointment</Link><button className="menu" onClick={()=>setOpen(!open)} aria-label="Toggle menu">{open?<X/>:<Menu/>}</button></div>
  </header>
  <main>{children}</main>
  <footer className="footer"><div className="footer-lead"><p className="eyebrow">{settings.tagline}</p><h2>Let&apos;s create something<br/><i>distinctly yours.</i></h2><Link to="/book" className="text-link light">Make an appointment <span>↗</span></Link></div><div className="footer-grid"><div><div className="wordmark light"><span>SALON</span><strong>{shortName}</strong></div><p className="muted">{settings.tagline}</p></div><div><h4>Visit</h4><p>{settings.address||'Sri Lanka'}</p><p>Open daily · {settings.openingHours.open}–{settings.openingHours.close}</p></div><div><h4>Explore</h4>{nav.slice(1).map(([label,path])=><Link key={path} to={path}>{label}</Link>)}<Link to="/book">Book online</Link></div><div><h4>Connect</h4><a href={`tel:${settings.phone}`}>{settings.phone}</a>{settings.email&&<a href={`mailto:${settings.email}`}>{settings.email}</a>}<a href={`https://wa.me/${whatsapp}`} target="_blank" rel="noreferrer">WhatsApp</a></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} {settings.salonName}</span><span>Privacy · Booking policy</span></div></footer>
  <a className="whatsapp-float" href={`https://wa.me/${whatsapp}`} target="_blank" rel="noreferrer" aria-label={`Chat with ${settings.salonName} on WhatsApp`}><MessageCircle/><span>WhatsApp</span></a>
 </>
}
