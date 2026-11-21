/* FoodQA Food Delivery App — shared logic (plain script, works on file:// double-click) */
(function(){
'use strict';

/* ============ DATA: Restaurants, menus, prices, locations ============ */
var RESTAURANTS=[
  {id:1,name:'Spice Route Biryani',emoji:'🍛',cuisine:'Biryani',cat:'Biryani',rating:4.8,time:'25-30 min',dist:'1.2 km',loc:'Anna Nagar, Chennai',offer:'50% OFF up to ₹120',price:'₹₹',bg:'linear-gradient(135deg,#FDE68A,#F59E0B)',items:[
    {id:'1-1',name:'Chicken Dum Biryani',emoji:'🍗',desc:'Seeraga samba rice, saffron, mint raita & mirchi ka salan.',price:249},
    {id:'1-2',name:'Mutton Biryani',emoji:'🍖',desc:'Tender mutton pieces, fried onions, boiled egg.',price:349},
    {id:'1-3',name:'Veg Biryani + Raita',emoji:'🥕',desc:'Garden vegetables, paneer cubes, burani raita.',price:199},
    {id:'1-4',name:'Egg Biryani',emoji:'🍳',desc:'Masala eggs, curry leaves, lemon wedge.',price:179}]},
  {id:2,name:'Cheese Burst Pizza Co.',emoji:'🍕',cuisine:'Pizza',cat:'Pizza',rating:4.7,time:'20-25 min',dist:'2.0 km',loc:'Velachery, Chennai',offer:'Buy 1 Get 1 Free',price:'₹₹',bg:'linear-gradient(135deg,#FBCFE8,#EC4899)',items:[
    {id:'2-1',name:'Cheese Burst Pizza',emoji:'🧀',desc:'Molten cheese core, mozzarella, oregano dust.',price:299},
    {id:'2-2',name:'Farm Veggie Pizza',emoji:'🫑',desc:'Capsicum, onion, mushroom, sweet corn, olives.',price:279},
    {id:'2-3',name:'Chicken Tikka Pizza',emoji:'🍗',desc:'Spiced chicken tikka, mint mayo drizzle.',price:329},
    {id:'2-4',name:'Garlic Bread (4 pc)',emoji:'🥖',desc:'Buttery garlic breadsticks with cheese dip.',price:129}]},
  {id:3,name:'Smoky Burger Barn',emoji:'🍔',cuisine:'Burgers',cat:'Burger',rating:4.6,time:'15-20 min',dist:'0.8 km',loc:'Adyar, Chennai',offer:'Flat ₹80 OFF',price:'₹',bg:'linear-gradient(135deg,#FED7AA,#F97316)',items:[
    {id:'3-1',name:'Smoky Chicken Burger',emoji:'🍔',desc:'Grilled patty, smoked mayo, toasted brioche bun.',price:199},
    {id:'3-2',name:'Double Cheese Burger',emoji:'🧀',desc:'Two patties, double cheese, caramelised onions.',price:259},
    {id:'3-3',name:'Peri Peri Fries',emoji:'🍟',desc:'Crispy fries tossed in peri peri spice.',price:119},
    {id:'3-4',name:'Cold Coffee',emoji:'🧋',desc:'Blended cold coffee with chocolate drizzle.',price:99}]},
  {id:4,name:'Dosa Diaries',emoji:'🥞',cuisine:'South Indian',cat:'South Indian',rating:4.9,time:'15-20 min',dist:'1.5 km',loc:'Mylapore, Chennai',offer:'Free Delivery',price:'₹',bg:'linear-gradient(135deg,#A7F3D0,#10B981)',items:[
    {id:'4-1',name:'Masala Dosa Set',emoji:'🥞',desc:'Crispy dosa, potato masala, chutney & sambar.',price:149},
    {id:'4-2',name:'Idli (4 pc) + Vada',emoji:'🍚',desc:'Soft idlis, medu vada, coconut chutney.',price:119},
    {id:'4-3',name:'Pongal + Vadai',emoji:'🍲',desc:'Ven pongal with ghee, crispy vadai.',price:129},
    {id:'4-4',name:'Filter Coffee',emoji:'☕',desc:'Strong South Indian filter coffee, frothed.',price:49}]},
  {id:5,name:'Wok & Roll Chinese',emoji:'🍜',cuisine:'Chinese',cat:'Chinese',rating:4.5,time:'25-35 min',dist:'2.5 km',loc:'Guindy, Chennai',offer:'40% OFF up to ₹100',price:'₹₹',bg:'linear-gradient(135deg,#DDD6FE,#8B5CF6)',items:[
    {id:'5-1',name:'Hakka Noodles',emoji:'🍜',desc:'Wok-tossed noodles, burnt garlic, spring onion.',price:189},
    {id:'5-2',name:'Chicken Manchurian',emoji:'🍗',desc:'Crisp chicken balls in garlic soy glaze.',price:229},
    {id:'5-3',name:'Veg Fried Rice',emoji:'🍚',desc:'Smoky fried rice with exotic veggies.',price:169},
    {id:'5-4',name:'Chilli Chicken Dry',emoji:'🌶️',desc:'Fiery chilli chicken, peppers & onions.',price:249}]},
  {id:6,name:'Green Bowl Salads',emoji:'🥗',cuisine:'Healthy',cat:'Healthy',rating:4.7,time:'10-15 min',dist:'1.0 km',loc:'Besant Nagar, Chennai',offer:'Healthy Combo ₹299',price:'₹₹',bg:'linear-gradient(135deg,#BBF7D0,#22C55E)',items:[
    {id:'6-1',name:'Grilled Chicken Bowl',emoji:'🥗',desc:'Quinoa, grilled chicken, avocado, seeds.',price:279},
    {id:'6-2',name:'Paneer Tikka Bowl',emoji:'🧀',desc:'Charred paneer, brown rice, mint dressing.',price:249},
    {id:'6-3',name:'Fruit & Nut Bowl',emoji:'🥭',desc:'Seasonal fruits, granola, Greek yogurt.',price:179},
    {id:'6-4',name:'Fresh Juice (500ml)',emoji:'🧃',desc:'Cold-pressed orange & carrot blend.',price:99}]},
  {id:7,name:'Tandoori Nights',emoji:'🍢',cuisine:'North Indian',cat:'North Indian',rating:4.6,time:'30-40 min',dist:'3.0 km',loc:'T. Nagar, Chennai',offer:'Free Dessert on ₹499+',price:'₹₹₹',bg:'linear-gradient(135deg,#FCA5A5,#EF4444)',items:[
    {id:'7-1',name:'Butter Chicken + Naan',emoji:'🍛',desc:'Creamy tomato makhani, butter naan.',price:329},
    {id:'7-2',name:'Chicken Tikka (8 pc)',emoji:'🍢',desc:'Charcoal-grilled, mint chutney.',price:299},
    {id:'7-3',name:'Dal Tadka + Jeera Rice',emoji:'🍲',desc:'Ghee tadka dal, cumin rice.',price:229},
    {id:'7-4',name:'Gulab Jamun (4 pc)',emoji:'🍮',desc:'Warm jamuns with rabri.',price:119}]},
  {id:8,name:'Sweet Tooth Desserts',emoji:'🍰',cuisine:'Desserts',cat:'Desserts',rating:4.8,time:'15-20 min',dist:'0.5 km',loc:'Alwarpet, Chennai',offer:'Flat 30% OFF',price:'₹₹',bg:'linear-gradient(135deg,#F9A8D4,#DB2777)',items:[
    {id:'8-1',name:'Choco Truffle Cake',emoji:'🍫',desc:'Belgian chocolate, 500g celebration size.',price:449},
    {id:'8-2',name:'Vanilla Sundae',emoji:'🍨',desc:'Vanilla scoops, hot fudge, roasted nuts.',price:149},
    {id:'8-3',name:'Brownie + Ice Cream',emoji:'🍩',desc:'Sizzling brownie with vanilla scoop.',price:199},
    {id:'8-4',name:'Milkshake (Oreo)',emoji:'🥤',desc:'Thick Oreo milkshake, whipped cream.',price:169}]}
];
var CATEGORIES=['All','Pizza','Burger','Biryani','South Indian','Chinese','Healthy','North Indian','Desserts'];
var CAT_EMOJI={'All':'🍽️','Pizza':'🍕','Burger':'🍔','Biryani':'🍛','South Indian':'🥞','Chinese':'🍜','Healthy':'🥗','North Indian':'🍢','Desserts':'🍰'};
var COUPONS={'FOOD50':{off:50,desc:'₹50 OFF applied!'},'FIRST100':{off:100,desc:'₹100 OFF applied!'},'FREEDEL':{off:0,desc:'Free delivery applied!'}};

/* ============ STORAGE (syncs across pages + main FoodQA Lab site) ============ */
function store(k,v){try{if(v===undefined)return JSON.parse(localStorage.getItem(k)||'null');localStorage.setItem(k,JSON.stringify(v))}catch(e){return null}}
function currentUser(){return store('foodqa_user')}
function getCart(){return store('foodqa_cart')||[]}
function saveCart(c){store('foodqa_cart',c);updateCartBadge();try{window.dispatchEvent(new CustomEvent('foodqa-cart-change',{detail:{cart:c,count:cartCount()}}))}catch(e){}}
function getOrders(){return store('foodqa_orders')||[]}
function saveOrders(o){store('foodqa_orders',o)}
function findDish(id){for(var r=0;r<RESTAURANTS.length;r++){for(var i=0;i<RESTAURANTS[r].items.length;i++){if(RESTAURANTS[r].items[i].id===id)return{rest:RESTAURANTS[r],dish:RESTAURANTS[r].items[i]}}}return null}
function findRest(id){for(var i=0;i<RESTAURANTS.length;i++)if(RESTAURANTS[i].id===+id)return RESTAURANTS[i];return null}
function cartCount(){return getCart().reduce(function(s,c){return s+c.qty},0)}
function cartTotal(){return getCart().reduce(function(s,c){var f=findDish(c.id);return s+(f?f.dish.price*c.qty:0)},0)}
function updateCartBadge(){var b=document.getElementById('cartCount');if(b){var n=cartCount();b.textContent=n;b.style.display=n?'flex':'none'}}
function toast(msg){var t=document.getElementById('toast');if(!t)return;t.textContent=msg;t.classList.add('show');clearTimeout(t._h);t._h=setTimeout(function(){t.classList.remove('show')},2400)}
function money(n){return '₹'+n}
function esc(s){return String(s).replace(/[&<>"']/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}

/* ============ AUTH ============ */
function registerUser(name,email,phone,pass){
  var users=store('foodqa_users')||[];
  for(var i=0;i<users.length;i++)if(users[i].email===email)return{ok:false,msg:'Account already exists. Please login.'};
  users.push({name:name,email:email,phone:phone,pass:pass});
  store('foodqa_users',users);store('foodqa_user',{name:name,email:email,phone:phone});
  return{ok:true};
}
function loginUser(email,pass){
  var users=store('foodqa_users')||[];
  for(var i=0;i<users.length;i++)if(users[i].email===email&&users[i].pass===pass){store('foodqa_user',{name:users[i].name,email:email,phone:users[i].phone});return{ok:true}}
  return{ok:false,msg:'Invalid email or password. Try again.'};
}
function logout(){localStorage.removeItem('foodqa_user');toast('👋 Logged out. See you soon!');setTimeout(function(){location.href='index.html'},700)}

/* ============ CART ============ */
function addToCart(id,qty){
  var cart=getCart();qty=qty||1;var found=false;
  for(var i=0;i<cart.length;i++)if(cart[i].id===id){cart[i].qty+=qty;found=true}
  if(!found)cart.push({id:id,qty:qty});
  saveCart(cart);
  var f=findDish(id);toast('🛒 Added: '+(f?f.dish.name:'Item'));
}
function setQty(id,qty){
  var cart=getCart();
  for(var i=0;i<cart.length;i++)if(cart[i].id===id)cart[i].qty=qty;
  cart=cart.filter(function(c){return c.qty>0});
  saveCart(cart);
}
function removeFromCart(id){saveCart(getCart().filter(function(c){return c.id!==id}));toast('🗑️ Removed from cart')}

/* ============ ORDERS ============ */
function placeOrder(address,payMethod){
  var cart=getCart();if(!cart.length)return null;
  var subtotal=cartTotal();
  var coupon=store('foodqa_coupon');
  var off=coupon?COUPONS[coupon].off:0;
  var delivery=subtotal>=499?0:30;
  var total=Math.max(0,subtotal-off)+delivery;
  var order={id:'FD'+Math.floor(1000+Math.random()*9000),items:cart.map(function(c){var f=findDish(c.id);return{name:f.dish.name,emoji:f.dish.emoji,qty:c.qty,price:f.dish.price}}),subtotal:subtotal,off:off,delivery:delivery,total:total,address:address,pay:payMethod,status:'Placed',time:new Date().toLocaleString(),createdAt:Date.now(),etaMinutes:30};
  var orders=getOrders();orders.unshift(order);saveOrders(orders);
  saveCart([]);localStorage.removeItem('foodqa_coupon');
  return order;
}

/* ============ SHARED UI HELPERS ============ */
function headerHTML(active){
  var u=currentUser();
  var links=[['index.html','home','🏠 Home'],['cart.html','cart','🛒 Cart'],['orders.html','orders','📦 Orders'],['profile.html','profile','👤 Profile']];
  var h='<header><div class="header-in">';
  h+='<a class="logo" href="index.html"><span class="logo-badge">🍔</span><span>FoodQA<small>Food Delivery</small></span></a>';
  h+='<div class="loc">📍 Chennai • Anna Nagar</div>';
  h+='<div class="searchbox"><input id="searchInput" placeholder="🔍 Search restaurants or dishes..."><button onclick="doSearch()">Search</button></div>';
  h+='<nav class="nav">';
  links.forEach(function(l){h+='<a href="'+l[0]+'" class="'+(active===l[1]?'on':'')+'">'+l[2]+(l[1]==='cart'?'<span class="cart-count" id="cartCount">0</span>':'')+'</a>'});
  if(u)h+='<a href="profile.html" class="'+(active==='profile'?'on':'')+'">👋 '+esc(u.name.split(' ')[0])+'</a>';
  else h+='<a href="login.html" class="'+(active==='login'?'on':'')+'">🔐 Login</a>';
  h+='<a href="../index.html" class="back-lab">← BiteShield</a>';
  h+='</nav></div></header>';
  return h;
}
function footerHTML(){
  return '<footer><b>FoodQA</b> • Live 3D Food Delivery App • Synced with <b>FoodQA Lab</b> Quality Assessment • SIMATS Engineering, Chennai</footer><div id="toast"></div>';
}
function mount(active){
  var h=document.getElementById('appHeader');if(h)h.innerHTML=headerHTML(active);
  var f=document.getElementById('appFooter');if(f)f.innerHTML=footerHTML();
  updateCartBadge();
  window.addEventListener('storage',function(e){if(e.key==='foodqa_cart')refreshCartUI()});
  window.addEventListener('foodqa-cart-change',refreshCartUI);
  function refreshCartUI(){updateCartBadge();document.querySelectorAll('[data-cart-label]').forEach(function(el){el.textContent='🛒 Cart ('+cartCount()+')'})}
  var si=document.getElementById('searchInput');
  if(si)si.addEventListener('keydown',function(e){if(e.key==='Enter')doSearch()});
  var obs=new IntersectionObserver(function(es){es.forEach(function(en){if(en.isIntersecting)en.target.classList.add('in')})},{threshold:.1});
  document.querySelectorAll('.reveal').forEach(function(el){obs.observe(el)});
}
function doSearch(){
  var q=(document.getElementById('searchInput').value||'').toLowerCase().trim();
  location.href='index.html'+(q?'?q='+encodeURIComponent(q):'');
}
function getParam(k){var m=location.search.match(new RegExp('[?&]'+k+'=([^&]*)'));return m?decodeURIComponent(m[1]):''}
function requireLogin(next){
  if(!currentUser()){toast('🔐 Please login first');setTimeout(function(){location.href='login.html?next='+encodeURIComponent(next||'checkout.html')},600);return false}
  return true;
}
function rippleBind(){
  document.addEventListener('click',function(e){
    var b=e.target.closest('.btn,.add-btn');if(!b)return;
    var r=b.getBoundingClientRect(),d=Math.max(r.width,r.height);
    var rip=document.createElement('span');rip.className='ripple';
    rip.style.width=rip.style.height=d+'px';
    rip.style.left=(e.clientX-r.left-d/2)+'px';rip.style.top=(e.clientY-r.top-d/2)+'px';
    b.appendChild(rip);setTimeout(function(){rip.remove()},650);
  });
}
function tiltBind(){
  document.querySelectorAll('.rest-card').forEach(function(card){
    card.addEventListener('mousemove',function(e){
      var r=card.getBoundingClientRect();
      var x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
      card.style.transform='perspective(700px) rotateY('+(x*10)+'deg) rotateX('+(-y*10)+'deg) translateY(-5px)';
    });
    card.addEventListener('mouseleave',function(){card.style.transform=''});
  });
}
window.FoodQA={RESTAURANTS:RESTAURANTS,CATEGORIES:CATEGORIES,CAT_EMOJI:CAT_EMOJI,COUPONS:COUPONS,store:store,currentUser:currentUser,getCart:getCart,saveCart:saveCart,getOrders:getOrders,findDish:findDish,findRest:findRest,cartCount:cartCount,cartTotal:cartTotal,addToCart:addToCart,setQty:setQty,removeFromCart:removeFromCart,placeOrder:placeOrder,registerUser:registerUser,loginUser:loginUser,logout:logout,mount:mount,doSearch:doSearch,getParam:getParam,requireLogin:requireLogin,toast:toast,money:money,esc:esc,updateCartBadge:updateCartBadge};
document.addEventListener('DOMContentLoaded',function(){rippleBind()});
})();
