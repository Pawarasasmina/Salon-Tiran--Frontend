import { Menu, X, UserRound } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const nav = [['Home','/'],['Our Story','/about'],['Services','/services'],['Our Work','/work'],['Contact','/contact']];
export function Layout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false); const { pathname } = useLocation();
  useEffect(() => { setOpen(false); window.scrollTo(0,0); }, [pathname]);
  return <>
    <header className="site-header"><Link className="wordmark" to="/" aria-label="Salon Tiran Weerasinghe home"><span>SALON</span><strong>TIRAN WEERASINGHE</strong></Link>
      <nav className={open ? 'nav open' : 'nav'} aria-label="Main navigation">{nav.map(([label,path]) => <NavLink key={path} to={path}>{label}</NavLink>)}<Link to="/account" className="account"><UserRound size={17}/> Account</Link><Link to="/book" className="button dark mobile-book">Book an appointment</Link></nav>
      <div className="header-actions"><Link to="/book" className="button dark desktop-book">Book an appointment</Link><button className="menu" onClick={()=>setOpen(!open)} aria-label="Toggle menu">{open?<X/>:<Menu/>}</button></div>
    </header>
    <main>{children}</main>
    <footer className="footer"><div className="footer-lead"><p className="eyebrow">THE ART OF PERSONAL STYLE</p><h2>Let’s create something<br/><i>distinctly yours.</i></h2><Link to="/book" className="text-link light">Make an appointment <span>↗</span></Link></div><div className="footer-grid"><div><div className="wordmark light"><span>SALON</span><strong>TIRAN WEERASINGHE</strong></div><p className="muted">A considered unisex salon experience<br/>in Sri Lanka.</p></div><div><h4>Visit</h4><p>Address awaiting client confirmation<br/>Sri Lanka</p><p>Mon–Sat · 9:00–19:00<br/>Sunday · Closed</p></div><div><h4>Explore</h4>{nav.slice(1).map(([l,p])=><Link key={p} to={p}>{l}</Link>)}<Link to="/book">Book online</Link></div><div><h4>Connect</h4><a href="tel:+94000000000">Phone placeholder</a><a href="mailto:hello@example.com">Email placeholder</a><a href="#">Instagram</a><a href="#">WhatsApp</a></div></div><div className="footer-bottom"><span>© 2026 Salon Tiran Weerasinghe</span><span>Demo content · Privacy · Booking policy</span></div></footer>
  </>;
}
