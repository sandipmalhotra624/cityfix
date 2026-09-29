
const seed=[
{id:"CF-1042",title:"Broken streetlight near main gate",cat:"Streetlight",loc:"Station Road",reporter:"Amit Kumar",status:"Pending",desc:"Three streetlights are not working near the main gate.",date:"29 Sep 2026",priority:"High"},
{id:"CF-1038",title:"Large pothole on service road",cat:"Pothole",loc:"MG Road",reporter:"Priya Singh",status:"In Progress",desc:"Deep pothole creating a safety risk for two-wheelers.",date:"29 Sep 2026",priority:"High"},
{id:"CF-1029",title:"Water leakage beside park",cat:"Water Leakage",loc:"Ward 12",reporter:"Ravi Kumar",status:"Resolved",desc:"Continuous water leakage beside the public park.",date:"28 Sep 2026",priority:"Medium"},
{id:"CF-1021",title:"Overflowing garbage bin",cat:"Garbage",loc:"Market Area",reporter:"Neha Devi",status:"Resolved",desc:"Public bin has remained full since yesterday.",date:"27 Sep 2026",priority:"Medium"},
{id:"CF-1016",title:"Damaged footpath",cat:"Road Damage",loc:"Civil Lines",reporter:"Karan Raj",status:"Pending",desc:"Broken footpath blocks pedestrian movement.",date:"27 Sep 2026",priority:"Low"}
];
function getData(){let x=localStorage.getItem("cityfixBest");if(!x){localStorage.setItem("cityfixBest",JSON.stringify(seed));return seed}return JSON.parse(x)}
function saveData(x){localStorage.setItem("cityfixBest",JSON.stringify(x))}
function statusClass(s){return s==="Pending"?"pending":s==="In Progress"?"progress":"resolved"}
function badge(s){return `<span class="badge ${statusClass(s)}">${s}</span>`}
function stats(){let x=getData();return{total:x.length,p:x.filter(a=>a.status==="Pending").length,i:x.filter(a=>a.status==="In Progress").length,r:x.filter(a=>a.status==="Resolved").length}}
function updateStatus(id,s){let x=getData(),a=x.find(q=>q.id===id);if(a){a.status=s;saveData(x);showToast(`${id} updated to ${s}`);setTimeout(()=>location.reload(),300)}}
function showToast(t){let e=document.getElementById("toast");if(!e)return;e.textContent=t;e.style.display="block";setTimeout(()=>e.style.display="none",2200)}
function openIssue(id){let a=getData().find(x=>x.id===id);if(!a)return;document.getElementById("modal").classList.add("show");document.getElementById("modalContent").innerHTML=`<button class="close" onclick="closeModal()">×</button><div class="eyebrow">COMPLAINT ${a.id}</div><h2>${a.title}</h2>${badge(a.status)}<p class="issue-desc">${a.desc}</p><div class="grid2"><div><div class="tiny">CATEGORY</div><p>${a.cat}</p></div><div><div class="tiny">LOCATION</div><p>${a.loc}</p></div><div><div class="tiny">REPORTER</div><p>${a.reporter}</p></div><div><div class="tiny">PRIORITY</div><p>${a.priority}</p></div></div><div class="divider"></div><h3>Resolution Timeline</h3><div class="timeline"><div class="step">Complaint received</div><div class="step">Authority reviewed the report</div><div class="step">${a.status==="Pending"?"Waiting for assignment":a.status==="In Progress"?"Field team is working":"Field work completed"}</div><div class="step">${a.status==="Resolved"?"Issue resolved successfully":"Resolution pending"}</div></div>`}
function closeModal(){document.getElementById("modal").classList.remove("show")}
