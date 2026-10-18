import {createContext,useContext,useEffect,useState} from 'react';
import {apiUrl} from './api';

export type BusinessSettings={salonName:string;tagline:string;phone:string;whatsapp:string;email:string;address:string;openingHours:{open:string;close:string};bookingSettings:{approval:'manual'|'automatic'}};
export const defaultBusinessSettings:BusinessSettings={salonName:'Salon Tiran Weerasinghe',tagline:'Your Style. Our Artistry.',phone:'+94711078696',whatsapp:'+94711078696',email:'',address:'',openingHours:{open:'09:00',close:'19:00'},bookingSettings:{approval:'manual'}};
const BusinessContext=createContext<{settings:BusinessSettings;setSettings:(value:BusinessSettings)=>void}>({settings:defaultBusinessSettings,setSettings:()=>{}});
export function BusinessProvider({children}:{children:React.ReactNode}){const [settings,setSettings]=useState(defaultBusinessSettings);useEffect(()=>{fetch(apiUrl('/api/business-settings')).then(response=>response.ok?response.json():Promise.reject()).then(body=>setSettings(body.data)).catch(()=>{})},[]);return <BusinessContext.Provider value={{settings,setSettings}}>{children}</BusinessContext.Provider>}
export const useBusiness=()=>useContext(BusinessContext);
