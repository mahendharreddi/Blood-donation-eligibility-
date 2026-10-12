// Shared data layer + auth guard (localStorage = demo backend; swap for fetch('/api/...') later)
const K={donors:'bd_donors',inv:'bd_inv',org:'bd_org',auth:'bd_auth'};
const get=(k,d)=>{try{const v=JSON.parse(localStorage.getItem(k));return v??d}catch(e){return d}};
const set=(k,v)=>localStorage.setItem(k,JSON.stringify(v));
const GROUPS=['A+','A-','B+','B-','O+','O-','AB+','AB-'];
const LOW=10;
if(!get(K.auth,null)) location.replace('login.html');
function inv(){let i=get(K.inv,null);if(!i){i={};[42,8,35,6,60,12,15,4].forEach((u,n)=>i[GROUPS[n]]=u);set(K.inv,i)}return i}
function donors(){return get(K.donors,[])}
function logout(){localStorage.removeItem(K.auth);localStorage.removeItem(K.org);location.href='login.html'}
function shell(active){
  if(!get(K.org,null)){location.replace('select-organization.html');return}
  const L=[['dashboard.html','fa-chart-column','Dashboard'],['predict.html','fa-brain','Predict Eligibility'],['donors.html','fa-users','Donors'],['inventory.html','fa-droplet','Inventory']];
  document.getElementById('side').innerHTML='<h2><i class="fa-solid fa-heart-pulse"></i> Blood Donor</h2><small>'+get(K.org,'')+'</small>'+
   L.map(l=>`<a href="${l[0]}" class="${l[0]===active?'on':''}"><i class="fa-solid ${l[1]}"></i>${l[2]}</a>`).join('')+
   '<a href="select-organization.html"><i class="fa-solid fa-building"></i>Switch Org</a><a href="#" class="out" onclick="logout()"><i class="fa-solid fa-right-from-bracket"></i>Logout</a>';
}
