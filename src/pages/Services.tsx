import {useEffect,useMemo,useState} from 'react';
import {ArrowRight,Clock3,Scissors,Search} from 'lucide-react';
import {Link} from 'react-router-dom';
import {apiUrl} from '../lib/api';

type Audience={id:string;name:string;description:string;imageUrl:string};
type Category={id:string;audienceId:string;name:string;description:string;imageUrl:string};
type Service={id:string;name:string;category:string;categoryId:string;description:string;imageUrl:string;price:number;duration:number};

export default function Services(){
 const [audiences,setAudiences]=useState<Audience[]>([]),[categories,setCategories]=useState<Category[]>([]),[services,setServices]=useState<Service[]>([]),[audienceId,setAudienceId]=useState(''),[categoryId,setCategoryId]=useState(''),[search,setSearch]=useState(''),[loading,setLoading]=useState(true);
 useEffect(()=>{fetch(apiUrl('/api/services')).then(async response=>{const body=await response.json();if(!response.ok)throw new Error(body.error?.message);return body.data}).then(data=>{setAudiences(data.audiences);setCategories(data.categories);setServices(data.services);setAudienceId(data.audiences[0]?.id??'')}).finally(()=>setLoading(false))},[]);
 useEffect(()=>setCategoryId(''),[audienceId]);
 const visibleCategories=categories.filter(item=>item.audienceId===audienceId),visible=useMemo(()=>services.filter(item=>(!categoryId||item.categoryId===categoryId)&&(!audienceId||visibleCategories.some(category=>category.id===item.categoryId))&&`${item.name} ${item.category} ${item.description}`.toLowerCase().includes(search.toLowerCase())),[services,categoryId,audienceId,visibleCategories,search]);
 return <div className="page shell service-catalog-page"><p className="eyebrow">THE SERVICE MENU</p><h1>Find the care<br/><i>made for you.</i></h1><p className="page-intro">Choose your collection, explore a care category, then book the exact service you need.</p>
  <section className="catalog-browser"><div className="audience-tabs visual" role="tablist">{audiences.map(item=><button role="tab" aria-selected={audienceId===item.id} className={audienceId===item.id?'active':''} onClick={()=>setAudienceId(item.id)} key={item.id}><img src={item.imageUrl} alt={`${item.name} services`}/><span><Scissors/></span><strong>{item.name}</strong><small>{item.description}</small></button>)}</div>
  <div className="catalog-controls"><div className="category-chips"><button className={!categoryId?'active':''} onClick={()=>setCategoryId('')}>All services</button>{visibleCategories.map(item=><button className={categoryId===item.id?'active':''} onClick={()=>setCategoryId(item.id)} key={item.id}>{item.name}</button>)}</div><label className="booking-search"><Search/><input value={search} onChange={event=>setSearch(event.target.value)} placeholder="Search services"/></label></div>
  {loading?<div className="catalog-empty">Loading live services…</div>:<div className="catalog-service-grid">{visible.map(item=><article key={item.id}><img className="catalog-service-image" src={item.imageUrl} alt={item.name}/><div><small>{item.category}</small><h2>{item.name}</h2><p>{item.description}</p></div><div className="catalog-service-meta"><span><Clock3/> {item.duration} min</span><strong>From LKR {item.price.toLocaleString()}</strong><Link to={`/book?service=${item.id}`}>Book service <ArrowRight/></Link></div></article>)}{!visible.length&&<div className="catalog-empty">No services match this selection.</div>}</div>}</section>
 </div>
}
