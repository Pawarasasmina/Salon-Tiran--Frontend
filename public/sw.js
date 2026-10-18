self.addEventListener('push',event=>{
 const data=event.data?event.data.json():{};
 event.waitUntil(self.registration.showNotification(data.title||'New appointment',{body:data.body||'A new appointment was received.',icon:'/images/hero-salon.png',badge:'/images/hero-salon.png',data:{url:data.url||'/admin'},tag:'salon-appointment',renotify:true}));
});
self.addEventListener('notificationclick',event=>{event.notification.close();event.waitUntil(clients.matchAll({type:'window',includeUncontrolled:true}).then(windows=>{const existing=windows.find(client=>new URL(client.url).pathname.startsWith('/admin'));if(existing)return existing.focus();return clients.openWindow(event.notification.data.url)}))});
