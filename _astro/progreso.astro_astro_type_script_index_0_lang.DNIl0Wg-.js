const f="oposicion-stats-v3",T="oposicion-fallos-v3",k=(t,e,s)=>Math.max(e,Math.min(s,t)),B=t=>{if(!t||typeof t!="object")return null;const e=Math.max(0,Number(t.total??0)||0),s=Math.max(0,Number(t.correctas??0)||0),n=k(Math.round(Number(t.pct??0)||0),0,100),r=Number(t.at??0)||0;return r?{total:e,correctas:Math.min(s,e),pct:n,at:r}:null},H=t=>{const e=t&&typeof t=="object"?t:{},s=Number(e.total??0),n=Number(e.correctas??0),r=Array.isArray(e.recent)?e.recent.map(o=>Number(o)).filter(o=>Number.isFinite(o)).slice(-8):[],l=Array.isArray(e.attempts)?e.attempts.map(B).filter(Boolean).slice(-12):[],i=Number(e.updatedAt??0)||null;return{total:Number.isFinite(s)?s:0,correctas:Number.isFinite(n)?n:0,recent:r,attempts:l,updatedAt:i}},L=()=>{if(typeof localStorage>"u")return{};try{const t=JSON.parse(localStorage.getItem(f)??"{}");return!t||typeof t!="object"?{}:Object.fromEntries(Object.entries(t).map(([e,s])=>[e,H(s)]))}catch{return{}}},x=document.getElementById("stats"),y=document.getElementById("progress-feedback"),I=t=>{if(!t)return"Sin fecha";try{return new Intl.DateTimeFormat("es-ES",{dateStyle:"medium",timeStyle:"short"}).format(new Date(t))}catch{return"Sin fecha"}},w=t=>{const e=Array.isArray(t.attempts)?t.attempts.slice(-5):[];return e.length?e:(Array.isArray(t.recent)?t.recent.slice(-5):[]).map((n,r)=>({total:0,correctas:0,pct:n,at:(t.updatedAt??0)+r}))},h=t=>{const e=w(t);if(!e.length)return 0;const s=e.reduce((r,l,i)=>{const o=i+1;return r+l.pct*o},0),n=e.reduce((r,l,i)=>r+i+1,0);return Math.round(s/n)},M=t=>w(t).reduce((e,s)=>{const n=Number(s.total??0);return e+(n>0?n:1)},0),C=t=>t>=80?{label:"Muy sólido",cls:"success"}:t>=65?{label:"Bien encaminado",cls:"primary"}:t>=50?{label:"A vigilar",cls:"warning"}:{label:"Flojo",cls:"danger"},F=(t=[])=>{const e=t.map(d=>Number(d.pct??0));if(e.length<2)return{label:"Sin tendencia suficiente",cls:"secondary"};const s=e.slice(-3),n=e.slice(-6,-3),r=Math.round(s.reduce((d,m)=>d+m,0)/s.length),l=n.length?n:e.slice(0,-1),i=l.length?Math.round(l.reduce((d,m)=>d+m,0)/l.length):r,o=r-i;return o>=8?{label:`En subida (+${o})`,cls:"success"}:o<=-8?{label:`Bajando (${o})`,cls:"danger"}:{label:"Estable",cls:"secondary"}},N=(t,e)=>{y&&(y.innerHTML=`<div class="alert alert-${t} border-0 shadow-sm mb-0">${e}</div>`,window.setTimeout(()=>{y.innerHTML.includes(e)&&(y.innerHTML="")},2400))},b=()=>{const t=L(),e=Object.entries(t).sort((c,a)=>Number(c[0])-Number(a[0]));if(!e.length){x.innerHTML=`
        <article class="card border-0 shadow-sm">
          <div class="card-body p-4">
            <h2 class="h4 mb-2">Aún no hay progreso</h2>
            <p class="text-body-secondary mb-0">Haz uno o varios tests y aquí aparecerán tus temas trabajados, tu nivel actual y el histórico acumulado.</p>
          </div>
        </article>`;return}const s=e.reduce((c,[,a])=>c+M(a),0),n=e.reduce((c,[,a])=>c+h(a)*M(a),0),r=e.reduce((c,[,a])=>c+a.total,0),l=e.reduce((c,[,a])=>c+a.correctas,0),i=s?Math.round(n/s):0,o=r?Math.round(l/r*100):0,d=e.filter(([,c])=>h(c)<50).length,m=`
        <article class='result-summary card border-0 shadow-sm'>
          <div class='card-body p-4 p-lg-5'>
            <span class='test-kicker'>Resumen general</span>
            <div class='d-lg-flex align-items-center justify-content-between gap-4'>
              <div>
                <h2 class='display-6 mb-2'>Nivel actual: ${i}%</h2>
                <p class='text-body-secondary mb-2'>Calculado con los intentos mas recientes de cada tema.</p>
                <p class='text-body-secondary mb-1'>Historico acumulado: ${l}/${r} correctas (${o}%).</p>
                <p class='text-body-secondary mb-lg-0'>Temas con actividad: ${e.length}. Temas flojos ahora mismo: ${d}.</p>
              </div>
              <div class='score-ring' style='--score:${i}%'>${i}%</div>
            </div>
          </div>
        </article>`,S=e.map(([c,a])=>{const p=w(a),v=h(a),j=a.total?Math.round(a.correctas/a.total*100):0,$=C(v),A=F(p),g=p.map(u=>u.pct).slice(-5),E=p.length?p[p.length-1].at:a.updatedAt;return`
          <article class='card border-0 shadow-sm'>
            <div class='card-body p-4'>
              <div class='d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3'>
                <div>
                  <h2 class='h4 mb-1'>Tema ${c}</h2>
                  <p class='text-body-secondary mb-0'>Histórico: ${a.correctas}/${a.total} correctas acumuladas (${j}%)</p>
                </div>
                <span class='badge text-bg-${$.cls}'>${$.label}</span>
              </div>
              <div class='d-flex flex-wrap align-items-center gap-3 mb-3'>
                <strong class='fs-4'>${v}%</strong>
                <span class='text-body-secondary'>Nivel actual</span>
                <span class='badge text-bg-${A.cls}'>${A.label}</span>
              </div>
              <div class='progress-streak mb-2'>
                ${g.length?g.map(u=>`<span class='progress-dot tone-${u>=80?"success":u>=65?"primary":u>=50?"warning":"danger"}' title='${u}%'></span>`).join(""):"<span class='text-body-secondary small'>Sin historial reciente.</span>"}
              </div>
              <p class='text-body-secondary small mb-1'>Intentos recientes usados para el nivel actual: ${g.length?g.join("% · ")+"%":"sin datos"}.</p>
              <p class='text-body-secondary small mb-0'>Última actualización: ${I(E)}.</p>
            </div>
          </article>`}).join("");x.innerHTML=m+S};document.getElementById("clear-progress")?.addEventListener("click",()=>{window.confirm("Se borrara todo el progreso guardado de este temario.")&&(localStorage.removeItem(f),b(),N("warning","Progreso reiniciado."))});document.getElementById("clear-fails")?.addEventListener("click",()=>{window.confirm("Se borraran todas las preguntas guardadas en fallos.")&&(localStorage.removeItem(T),N("secondary","Fallos vaciados."))});b();window.addEventListener("pageshow",b);window.addEventListener("storage",t=>{t.key===f&&b()});document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&b()});
