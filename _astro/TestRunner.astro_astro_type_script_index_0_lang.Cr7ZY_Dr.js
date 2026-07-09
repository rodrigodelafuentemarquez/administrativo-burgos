const K="oposicion-stats-v3",q="oposicion-fallos-v3",Y="oposicion-dudosas-v1";function oe(e){if(!e||typeof e!="object")return null;const t=e,s=Math.max(0,Number(t.total??0)||0),a=Math.max(0,Number(t.correctas??0)||0),n=Math.max(0,Math.min(100,Math.round(Number(t.pct??0)||0))),o=Number(t.at??0)||0;return!Number.isFinite(s)||!Number.isFinite(a)||!Number.isFinite(n)||!o?null:{total:s,correctas:Math.min(a,s),pct:n,at:o}}function _(e){const t=e&&typeof e=="object"?e:{},s=Number(t.total??0),a=Number(t.correctas??0),n=Array.isArray(t.recent)?t.recent.map(r=>Number(r)).filter(r=>Number.isFinite(r)).slice(-8):[],o=Array.isArray(t.attempts)?t.attempts.map(oe).filter(Boolean).slice(-12):[],l=Number(t.updatedAt??0)||null;return{total:Number.isFinite(s)?s:0,correctas:Number.isFinite(a)?a:0,recent:n,attempts:o,updatedAt:l}}function ie(e){if(!e||typeof e!="object")return null;const t=e,s=Array.isArray(t.opciones)?t.opciones.map(b=>String(b??"")):[],a=Number(t.correcta);if(!String(t.id??"")||s.length<2||a<0||a>=s.length)return null;const n=Date.now(),o=Number(t.firstFailedAt??0)||n,l=Number(t.lastFailedAt??0)||o,r=Math.max(1,Number(t.fallos??1)||1);return{id:String(t.id),tema:Number(t.tema??0),pregunta:String(t.pregunta??""),opciones:s,correcta:a,referencia:String(t.referencia??""),tags:Array.isArray(t.tags)?t.tags.map(b=>String(b??"")).filter(Boolean):[],fallos:r,firstFailedAt:o,lastFailedAt:l}}function le(e){if(!e||typeof e!="object")return null;const t=e,s=Array.isArray(t.opciones)?t.opciones.map(n=>String(n??"")):[],a=Number(t.correcta);return!String(t.id??"")||s.length<2||a<0||a>=s.length?null:{id:String(t.id),tema:Number(t.tema??0),pregunta:String(t.pregunta??""),opciones:s,correcta:a,referencia:String(t.referencia??""),tags:Array.isArray(t.tags)?t.tags.map(n=>String(n??"")).filter(Boolean):[],createdAt:Number(t.createdAt??0)||Date.now()}}function ce(){if(typeof localStorage>"u")return{};try{const e=JSON.parse(localStorage.getItem(K)??"{}");return!e||typeof e!="object"?{}:Object.fromEntries(Object.entries(e).map(([t,s])=>[t,_(s)]))}catch{return{}}}function de(e,t,s){const a=ce(),n=String(e),o=a[n]??_(null),l=t>0?Math.round(s/t*100):0,r=Date.now();a[n]={total:o.total+t,correctas:o.correctas+s,recent:[...o.recent,l].slice(-8),attempts:[...o.attempts,{total:t,correctas:s,pct:l,at:r}].slice(-12),updatedAt:r},localStorage.setItem(K,JSON.stringify(a))}function E(){if(typeof localStorage>"u")return[];try{const e=JSON.parse(localStorage.getItem(q)??"[]");return Array.isArray(e)?e.map(ie).filter(Boolean):[]}catch{return[]}}function V(e){localStorage.setItem(q,JSON.stringify(e))}function ue(e){const t=E(),s=new Map(t.map(n=>[n.id,n])),a=Date.now();e.forEach(n=>{const o=s.get(n.id);if(o){s.set(n.id,{...o,pregunta:n.pregunta,opciones:n.opciones,correcta:n.correcta,referencia:n.referencia,tags:n.tags,fallos:o.fallos+1,lastFailedAt:a});return}s.set(n.id,{...n,fallos:Math.max(1,Number(n.fallos??1)||1),firstFailedAt:Number(n.firstFailedAt??a)||a,lastFailedAt:Number(n.lastFailedAt??a)||a})}),V(Array.from(s.values()))}function me(e){const t=new Set(e),s=E().filter(a=>!t.has(a.id));V(s)}function T(){if(typeof localStorage>"u")return[];try{const e=JSON.parse(localStorage.getItem(Y)??"[]");return Array.isArray(e)?e.map(le).filter(Boolean):[]}catch{return[]}}function O(e){localStorage.setItem(Y,JSON.stringify(e))}function pe(e){const t=T();return t.find(a=>a.id===e.id)?(O(t.filter(a=>a.id!==e.id)),!1):(O([{...e,createdAt:Date.now()},...t]),!0)}function fe(e){const t=new Set(e);O(T().filter(s=>!t.has(s.id)))}const g=document.getElementById("test-app"),m=g?.dataset.mode??"normal",H=g?.dataset.base??"/",U=[10,20,30,50,70,100],ge=[70,100],G=[0,...U],be=[0,60,75,90,120],ye=[{value:0,label:"Sin penalización"},{value:.25,label:"Penalización -0,25 por fallo"},{value:.33,label:"Penalización -0,33 por fallo"}];let f=[],p=[],A="practice",k="mixed",M="mixed",x=0,w=0,N=!1,z=null,C=!1,R="manual";function B(e,t,s){if(Array.isArray(e)){const[l="",r=[],b=0,y="",$=""]=e;e={id:`t${String(t).padStart(2,"0")}-p${String(s+1).padStart(3,"0")}`,tema:t,pregunta:l,opciones:r,correcta:b,referencia:$}}if(!e||typeof e!="object")return null;const a=Array.isArray(e.opciones)?e.opciones.map(l=>String(l??"")):[],n=Number(e.correcta),o=Number(e.tema??t);return a.length<2||n<0||n>=a.length?null:{...e,id:String(e.id??`t${String(o).padStart(2,"0")}-p${String(s+1).padStart(3,"0")}`),tema:o,pregunta:String(e.pregunta??""),opciones:a,correcta:n,referencia:String(e.referencia??""),tags:Array.isArray(e.tags)?e.tags.map(l=>String(l??"")).filter(Boolean):[],fallos:Math.max(1,Number(e.fallos??1)||1),firstFailedAt:Number(e.firstFailedAt??0)||null,lastFailedAt:Number(e.lastFailedAt??0)||null,createdAt:Number(e.createdAt??0)||null}}const h=e=>String(e??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;");function W(e){const t=Array.isArray(e.tags)?e.tags.filter(Boolean):[];return t.length?`<span class="question-tags">${t.map(s=>`<span class="badge text-bg-success">${h(s)}</span>`).join("")}</span>`:""}function he(e){return Array.isArray(e.tags)&&e.tags.includes("Pregunta real")}function j(e){return e.map(t=>[Math.random(),t]).sort((t,s)=>t[0]-s[0]).map(t=>t[1])}function ve(e){const s=[e.pregunta,...e.opciones??[]].map(a=>String(a??"").toLowerCase()).join(" || ");return[/\blas respuestas?\s+[abcd](?:\)|\.)?\s+y\s+[abcd](?:\)|\.)?/,/\brespuesta\s+[abcd](?:\)|\.)?/,/\b[abcd]\s+y\s+[abcd]\s+son\s+correctas\b/,/\bopciones?\s+[abcd](?:\)|\.)?\s+y\s+[abcd](?:\)|\.)?/,/\banteriores?\b/,/\bsiguientes?\b/].some(a=>a.test(s))}function $e(e){if(ve(e))return{...e,opciones:[...e.opciones]};const t=e.opciones.map((s,a)=>({texto:s,originalIndex:a,sortKey:Math.random()}));return t.sort((s,a)=>s.sortKey-a.sortKey),{...e,opciones:t.map(s=>s.texto),correcta:t.findIndex(s=>s.originalIndex===e.correcta)}}function P(){z&&(window.clearInterval(z),z=null)}function X(e){const t=Math.max(0,Number(e)||0),s=Math.floor(t/60),a=t%60;return`${String(s).padStart(2,"0")}:${String(a).padStart(2,"0")}`}function Z(e){return String(Number(e||0).toFixed(2)).replace(".",",")}function Se(e){return e==="official"?ge:U}function xe(e){return e>=40?"success":e>=30?"primary":e>=20?"warning":"danger"}function F(e){return[...e].sort((t,s)=>(s.fallos??1)!==(t.fallos??1)?(s.fallos??1)-(t.fallos??1):(s.lastFailedAt??0)-(t.lastFailedAt??0))}function we(e){const t=e>0?Math.min(e,f.length):f.length;if(!t)return[];const s=new Map(f.map(c=>[c.id,c])),a=E().map((c,S)=>B(c,Number(c?.tema??0),S)).filter(Boolean).filter(c=>s.has(c.id)),n=F(a.filter(c=>Number(c.fallos??1)>=2).map(c=>({...s.get(c.id),fallos:c.fallos,firstFailedAt:c.firstFailedAt,lastFailedAt:c.lastFailedAt}))),o=new Set(a.map(c=>c.id)),l=new Set,r=Math.min(n.length,t>=20?Math.max(8,Math.round(t*.5)):Math.max(4,Math.round(t*.45))),b=n.slice(0,r);b.forEach(c=>l.add(c.id));const y=j(f.filter(c=>!o.has(c.id)&&!l.has(c.id))),$=j(f.filter(c=>o.has(c.id)&&!l.has(c.id))),d=j(f.filter(c=>!l.has(c.id))),i=[],u=[...b],v=[...y];for(;i.length<t&&(u.length||v.length);)u.length&&i.push(u.shift()),i.length<t&&u.length&&i.push(u.shift()),i.length<t&&v.length&&i.push(v.shift());for(const c of[$,d])for(;i.length<t&&c.length;){const S=c.shift();!S||l.has(S.id)||(i.push(S),l.add(S.id))}return i.slice(0,t)}function D(e){const t=document.getElementById("session-mode"),s=document.getElementById("limit");if(!t||!s)return;const a=t.value??"practice",n=Se(a),o=Number(e??s.value??(a==="official"?70:20));s.innerHTML=n.map(l=>`<option value="${l}">${l}</option>`).join(""),s.value=String(n.includes(o)?o:a==="official"?70:20)}function J(e){const t=document.getElementById("limit"),s=document.getElementById("timer-minutes"),a=document.getElementById("penalty-mode");if(!(!t||!s||!a)){if(e==="official"){D(70),t.value="70",s.value="90",a.value="0.25";return}if(e==="smart"){D(30),s.value==="90"&&(s.value="0");return}D(20)}}function Ae(e){if(P(),!(e>0))return;const t=document.getElementById("timer-display");if(!t)return;const s=Date.now(),a=Math.round(e*60),n=()=>{const o=Math.floor((Date.now()-s)/1e3),l=Math.max(0,a-o);t.textContent=X(l),t.dataset.state=l<=60?"ending":"running",l<=0&&(P(),R="timeout",se(new Event("submit")))};n(),z=window.setInterval(n,1e3)}function I(e,t=""){g.innerHTML=`
      <div class="test-empty text-center py-4">
        <span class="test-kicker">Tests</span>
        <h2 class="h3 mt-2">${h(e)}</h2>
        ${t?`<p class="text-body-secondary mb-0">${h(t)}</p>`:""}
      </div>`}function L(){const e=Array.from(g.querySelectorAll(".test-topic-option input[type=checkbox]:checked")),t=e.length,s=e.reduce((n,o)=>n+Number(o.dataset.preguntas??"0"),0),a=document.getElementById("topic-selection-summary");a&&(a.innerHTML=`
      <span class="badge text-bg-secondary">${t} tema(s) seleccionados</span>
      <span class="badge text-bg-primary">${s} preguntas disponibles</span>
    `)}function ee(e){const t=e.filter(a=>Number(a.fallos??1)>=2);return{nuevos:e.filter(a=>Number(a.fallos??1)<2),recurrentes:t}}function Ne(e){const t=E().map((n,o)=>B(n,Number(n?.tema??0),o)).filter(Boolean),{nuevos:s,recurrentes:a}=ee(t);return e==="new"?[...s].sort((n,o)=>(o.lastFailedAt??0)-(n.lastFailedAt??0)):e==="recurrent"?F(a):[...F(a),...[...s].sort((n,o)=>(o.lastFailedAt??0)-(n.lastFailedAt??0))]}function te(e){const t=new Set(E().filter(n=>Number(n.fallos??1)>=2).map(n=>n.id)),s=e.filter(n=>t.has(n.id));return{nuevas:e.filter(n=>!t.has(n.id)),recurrentes:s}}function Ee(e){const t=T().map((n,o)=>B(n,Number(n?.tema??0),o)).filter(Boolean),{nuevas:s,recurrentes:a}=te(t);return e==="recurrent"?F(a):e==="new"?[...s].sort((n,o)=>(o.createdAt??0)-(n.createdAt??0)):[...F(a),...[...s].sort((n,o)=>(o.createdAt??0)-(n.createdAt??0))]}async function ae(){const t=await(await fetch(`${H}data/tests/index.json`)).json(),a=(Array.isArray(t)?t:Array.isArray(t?.temas)?t.temas:[]).map(r=>({...r,tema:Number(r?.tema??0),preguntas:Number(r?.preguntas??0),titulo:String(r?.titulo??"").trim()})).filter(r=>r.tema>0&&r.preguntas>0);if(!a.length){I("No hay preguntas cargadas todavía.","Cuando añadamos los JSON por tema aparecerán aquí automáticamente.");return}const n=a.filter(r=>r.preguntas>=40).length,o=a.filter(r=>r.preguntas>=30&&r.preguntas<40).length,l=a.filter(r=>r.preguntas>=20&&r.preguntas<30).length;g.innerHTML=`
      <div class="test-hero mb-4">
        <span class="test-kicker">Modo test</span>
        <h2 class="display-6 mb-2">Configurar test</h2>
        <p class="text-body-secondary mb-0">Elige temas, tamaño y formato. Puedes alternar práctica, simulacro oficial o repaso inteligente con penalización y temporizador opcionales.</p>
      </div>
      <div class="test-config">
        <fieldset class="test-panel">
          <legend class="h5 mb-3">Temas disponibles</legend>
          <div class="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
            <div class="d-flex flex-wrap gap-2">
              <button class="btn btn-outline-secondary btn-sm" id="select-all-topics" type="button">Test general</button>
              <button class="btn btn-outline-secondary btn-sm" id="clear-topics" type="button">Quitar selección</button>
            </div>
          </div>
          <p class="text-body-secondary small mb-2">Puedes mezclar varios temas en un mismo test. "Test general" marca todos los temas disponibles.</p>
          <div class="d-flex flex-wrap gap-2 mb-3">
            <span class="badge text-bg-success">Fuertes: ${n}</span>
            <span class="badge text-bg-primary">Solidos: ${o}</span>
            <span class="badge text-bg-warning text-dark">En minimo: ${l}</span>
          </div>
          <div class="d-flex flex-wrap gap-2 mb-3" id="topic-selection-summary"></div>
          <div class="test-topic-grid">
            ${a.map(r=>`
              <label class="test-topic-option">
                <input class="form-check-input" type="checkbox" value="${Number(r.tema)}" data-preguntas="${Number(r.preguntas)}" checked>
                <span>
                  <span class="test-topic-heading">
                    <strong>Tema ${Number(r.tema)}</strong>
                    <span class="test-topic-count badge text-bg-${xe(Number(r.preguntas))}">${Number(r.preguntas)} preguntas</span>
                  </span>
                  ${r.titulo?`<small>${h(r.titulo)}</small>`:""}
                </span>
              </label>`).join("")}
          </div>
        </fieldset>
        <div class="test-panel">
          <div class="real-filter-option">
            <div class="form-check form-switch mb-0">
              <input class="form-check-input" type="checkbox" role="switch" id="only-real-questions">
              <label class="form-check-label fw-semibold" for="only-real-questions">Solo preguntas reales</label>
            </div>
            <p class="text-body-secondary small mt-2 mb-0">Usa únicamente preguntas etiquetadas como "Pregunta real" dentro de los temas seleccionados.</p>
          </div>
          <label class="form-label fw-semibold" for="session-mode">Formato</label>
          <select class="form-select mb-3" id="session-mode">
            <option value="practice" selected>Práctica guiada</option>
            <option value="official">Simulacro oficial</option>
            <option value="smart">Repaso inteligente</option>
          </select>
          <p class="text-body-secondary small mb-3">Práctica muestra la referencia durante el examen. Simulacro oficial se ajusta por defecto a 70 preguntas, 90 minutos y penalización de 0,25. Repaso inteligente carga antes lo que más se te atraganta.</p>
          <label class="form-label fw-semibold" for="limit">Número de preguntas</label>
          <select class="form-select mb-3" id="limit"></select>
          <label class="form-label fw-semibold" for="timer-minutes">Temporizador orientativo</label>
          <select class="form-select mb-3" id="timer-minutes">${be.map(r=>`<option value="${r}" ${r===0?"selected":""}>${r===0?"Sin temporizador":`${r} minutos`}</option>`).join("")}</select>
          <label class="form-label fw-semibold" for="penalty-mode">Corrección</label>
          <select class="form-select" id="penalty-mode">${ye.map(r=>`<option value="${r.value}" ${r.value===0?"selected":""}>${r.label}</option>`).join("")}</select>
          <p class="text-body-secondary small mt-2 mb-0">La penalización solo afecta a la nota mostrada del intento. El progreso por tema sigue contando aciertos reales. Si no hay suficientes preguntas, se usan todas las disponibles.</p>
          <button class="btn btn-primary btn-lg w-100 mt-3" id="start" type="button">Empezar test</button>
        </div>
      </div>`,J("practice"),L(),document.getElementById("session-mode")?.addEventListener("change",()=>{J(document.getElementById("session-mode")?.value??"practice")}),document.getElementById("select-all-topics")?.addEventListener("click",()=>{g.querySelectorAll(".test-topic-option input[type=checkbox]").forEach(r=>{r.checked=!0}),L()}),document.getElementById("clear-topics")?.addEventListener("click",()=>{g.querySelectorAll(".test-topic-option input[type=checkbox]").forEach(r=>{r.checked=!1}),L()}),g.querySelectorAll(".test-topic-option input[type=checkbox]").forEach(r=>{r.addEventListener("change",L)}),document.getElementById("start")?.addEventListener("click",async()=>{const r=Array.from(g.querySelectorAll(".test-topic-option input[type=checkbox]:checked")).map(y=>Number(y.value));if(A=document.getElementById("session-mode")?.value??"practice",!r.length){I("Selecciona al menos un tema.","Vuelve a Tests y marca un tema para empezar.");return}if(f=(await Promise.all(r.map(async y=>{const d=await(await fetch(`${H}data/tests/tema-${String(y).padStart(2,"0")}.json`)).json();return(Array.isArray(d)?d:[]).map((i,u)=>B(i,y,u)).filter(Boolean)}))).flat(),N=!!document.getElementById("only-real-questions")?.checked,N&&(f=f.filter(he)),!f.length){I(N?"No hay preguntas reales en los temas seleccionados.":"No hay preguntas válidas en los temas seleccionados.",N?"Quita el filtro de preguntas reales o añade otros temas con preguntas oficiales.":"Revisa los JSON de test o prueba con otros temas.");return}x=Number(document.getElementById("penalty-mode")?.value??"0")||0,w=Number(document.getElementById("timer-minutes")?.value??"0")||0,Q(Number(document.getElementById("limit")?.value??"10"),A)})}function Q(e,t=A){if(A=t,C=!1,R="manual",P(),m==="fails"){if(x=0,w=0,f=Ne(k),!f.length){I("No hay fallos en ese bloque.","Prueba con otro filtro o vuelve a la práctica general para generar nuevas preguntas falladas.");return}p=f.slice(0,e>0?e:f.length)}else if(m==="doubts"){if(x=0,w=0,f=Ee(M),!f.length){I("No hay preguntas dudosas ahora mismo.","Marca preguntas desde la corrección del test y aparecerán aquí.");return}p=f.slice(0,e>0?e:f.length)}else A==="smart"?p=we(e):(p=j(f),e>0&&(p=p.slice(0,e)));p=p.map(d=>$e(d));const s=A==="official"&&m==="normal",a=A==="smart"&&m==="normal",n=m==="fails"?"Repaso de fallos":m==="doubts"?"Revision de dudosas":N?"Preguntas reales":s?"Simulacro oficial":a?"Repaso inteligente":"Test aleatorio",o=m==="fails"?"Las preguntas se priorizan por recurrencia de error. Si aciertas una aquí, desaparece de fallos.":m==="doubts"?"Este bloque agrupa preguntas que has marcado para revisar con calma. Si aquí ya las ves claras, se limpian automáticamente al acertarlas.":N?"El test usa solo preguntas etiquetadas como reales dentro de los temas seleccionados.":s?"Sin pistas durante el examen: la referencia normativa solo aparece al corregir. Ajuste inicial: 70 preguntas, 90 minutos y penalización de 0,25.":a?"Combina preguntas nuevas con fallos recurrentes del bloque elegido para repasar sin repetir siempre lo mismo.":"Marca una opción por pregunta. La corrección aparece al final con la respuesta correcta y la referencia.",l=m==="normal"&&w>0?`<span class="badge text-bg-dark" id="timer-display">${X(Math.round(w*60))}</span>`:"",r=m==="normal"&&x>0?`<span class="badge text-bg-secondary">Penalización -${Z(x)} por fallo</span>`:"",b=a?'<span class="badge text-bg-info">Nuevas + recurrentes</span>':"",y=N?'<span class="badge text-bg-success">Solo preguntas reales</span>':"";g.innerHTML=`
      <div class="test-hero mb-4">
        <span class="test-kicker">${n}</span>
        <h2 class="display-6 mb-2">${p.length} preguntas</h2>
        <p class="text-body-secondary mb-0">${o}</p>
        ${l||r||b||y?`<div class="d-flex flex-wrap gap-2 mt-3">${y}${b}${r}${l}</div>`:""}
      </div>
      <form id="quiz" class="test-question-list"></form>
      <div class="test-actions sticky-bottom py-3 mt-4">
        <button class="btn btn-primary btn-lg" id="finish" type="submit">Corregir test</button>
      </div>`;const $=document.getElementById("quiz");p.forEach((d,i)=>{const u=document.createElement("article");u.className="question-card card border-0 shadow-sm",u.innerHTML=`
        <div class="card-body p-4">
          <div class="d-flex align-items-start gap-3 mb-3">
            <span class="question-number">${i+1}</span>
            <div>
              <p class="question-meta mb-1">${s?`Tema ${Number(d.tema)}`:`Tema ${Number(d.tema)} · ${h(d.referencia)}`} ${W(d)}</p>
              <h3 class="h5 mb-0">${h(d.pregunta)}</h3>
            </div>
          </div>
          <div class="answer-list">
            ${d.opciones.map((v,c)=>`
              <label class="answer-option" for="q${i}-${c}">
                <input class="form-check-input" id="q${i}-${c}" type="radio" name="q${i}" value="${c}">
                <span>${h(v)}</span>
              </label>`).join("")}
          </div>
        </div>`,$.appendChild(u)}),document.getElementById("finish")?.addEventListener("click",se),m==="normal"&&w>0&&Ae(w)}function se(e){if(e?.preventDefault?.(),C)return;C=!0,P();const t=new Map;let s=0;const a=[];if(p.forEach((d,i)=>{const u=Number((document.querySelector(`input[name=q${i}]:checked`)||{}).value??-1);t.set(d.id,u),u===d.correcta?s+=1:a.push(d)}),m==="fails"){const d=p.filter(i=>t.get(i.id)===i.correcta).map(i=>i.id);me(d)}else if(m==="doubts"){const d=p.filter(i=>t.get(i.id)===i.correcta).map(i=>i.id);fe(d)}else{const d=new Map;p.forEach(i=>{const u=d.get(i.tema)??{total:0,ok:0};u.total+=1,t.get(i.id)===i.correcta&&(u.ok+=1),d.set(i.tema,u)}),d.forEach((i,u)=>de(u,i.total,i.ok)),ue(a)}const n=p.length?Math.round(s/p.length*100):0,o=a.length,l=Number((s-o*x).toFixed(2)),r=p.length?Math.round(l/p.length*100):0,b=m==="fails"?a.length?`${a.length} pregunta(s) siguen en fallos.`:"Has vaciado este bloque de fallos.":m==="doubts"?a.length?`${a.length} pregunta(s) siguen marcadas o dudosas.`:"Has limpiado todas las dudosas de este bloque.":a.length?`${a.length} pregunta(s) guardada(s) en fallos.`:"Sin fallos. Limpio como una patena.",y=R==="timeout"?'<p class="text-warning-emphasis mb-0 mt-2">El temporizador ha llegado a cero y el test se ha corregido automáticamente.</p>':"",$=m==="normal"&&x>0?`<p class="text-body-secondary mb-0 mt-2">Nota neta con penalización de ${Z(x)} por fallo: <strong>${String(l.toFixed(2)).replace(".",",")}</strong> sobre ${p.length} (${r}%).</p>`:"";g.innerHTML=`
      <div class="result-summary card border-0 shadow-sm mb-4">
        <div class="card-body p-4 p-lg-5">
          <span class="test-kicker">Corrección</span>
          <div class="d-lg-flex align-items-center justify-content-between gap-4">
            <div>
              <h2 class="display-6 mb-2">${s}/${p.length} correctas</h2>
              <p class="text-body-secondary mb-lg-0">${b}</p>
              ${$}
              ${y}
            </div>
            <div class="score-ring" style="--score:${n}%">${n}%</div>
          </div>
        </div>
      </div>
      <div class="test-question-list">
        ${p.map((d,i)=>Be(d,i,t.get(d.id))).join("")}
      </div>
      ${m==="normal"?'<div id="doubt-feedback" class="mt-3"></div>':""}
      <button id="again" class="btn btn-primary btn-lg mt-4" type="button">Nuevo test</button>`,window.scrollTo({top:Math.max(0,g.getBoundingClientRect().top+window.scrollY-88),behavior:"smooth"}),document.getElementById("again")?.addEventListener("click",()=>m==="fails"?ne():m==="doubts"?re():ae()),m==="normal"&&g.querySelectorAll(".toggle-doubt").forEach(d=>{d.addEventListener("click",()=>{const i=d.dataset.id??"",u=p.find(S=>S.id===i);if(!u)return;const v=pe({id:u.id,tema:u.tema,pregunta:u.pregunta,opciones:u.opciones,correcta:u.correcta,referencia:u.referencia,tags:u.tags});d.textContent=v?"Quitar duda":"Marcar dudosa",d.className=v?"btn btn-sm btn-warning toggle-doubt":"btn btn-sm btn-outline-warning toggle-doubt";const c=document.getElementById("doubt-feedback");c&&(c.innerHTML=`<div class="alert alert-${v?"warning":"secondary"} border-0 shadow-sm mb-0">${v?"Pregunta marcada como dudosa.":"Pregunta quitada de dudosas."}</div>`)})})}function Be(e,t,s){const a=s===e.correcta,n=m==="fails"&&Number(e.fallos??1)>=2?`<span class="badge text-bg-warning ms-2">Recurrente · ${Number(e.fallos)} fallos</span>`:"",o=T().some(r=>r.id===e.id),l=m==="normal"?`<button type="button" class="${o?"btn btn-sm btn-warning":"btn btn-sm btn-outline-warning"} toggle-doubt" data-id="${h(e.id)}">${o?"Quitar duda":"Marcar dudosa"}</button>`:"";return`
      <article class="correction-card card border-0 shadow-sm ${a?"is-correct":"is-wrong"}">
        <div class="card-body p-4">
          <div class="d-flex align-items-start justify-content-between gap-3 mb-3">
            <div class="d-flex align-items-start gap-3">
              <span class="question-number">${t+1}</span>
              <div>
                <p class="question-meta mb-1">Tema ${Number(e.tema)} · ${h(e.referencia)} ${W(e)} ${n}</p>
                <h3 class="h5 mb-0">${h(e.pregunta)}</h3>
              </div>
            </div>
            ${l}
          </div>
          <div class="correction-answer ${a?"text-success":"text-danger"} fw-semibold mb-2">
            ${a?"Correcta":"Incorrecta"}
          </div>
          <dl class="row mb-0 g-2">
            <dt class="col-sm-3 text-body-secondary">Tu respuesta</dt>
            <dd class="col-sm-9">${s>=0?h(e.opciones[s]):'<span class="text-body-secondary">Sin responder</span>'}</dd>
            <dt class="col-sm-3 text-body-secondary">Correcta</dt>
            <dd class="col-sm-9">${h(e.opciones[e.correcta])}</dd>
          </dl>
        </div>
      </article>`}function ne(){const e=E().map((a,n)=>B(a,Number(a?.tema??0),n)).filter(Boolean),{nuevos:t,recurrentes:s}=ee(e);g.innerHTML=`
      <div class="test-hero mb-4">
        <span class="test-kicker">Fallos</span>
        <h2 class="display-6 mb-2">Repetir fallos</h2>
        <p class="text-body-secondary mb-3">Practica solo las preguntas que hayas fallado antes. Las recurrentes se priorizan para atacar primero lo que más se resiste.</p>
        <div class="d-flex flex-wrap gap-2">
          <span class="badge text-bg-secondary">Nuevos: ${t.length}</span>
          <span class="badge text-bg-warning">Recurrentes: ${s.length}</span>
        </div>
      </div>
      <div class="test-config">
        <div class="test-panel">
          <label class="form-label fw-semibold" for="fail-filter">Bloque a repasar</label>
          <select class="form-select mb-3" id="fail-filter">
            <option value="mixed" ${k==="mixed"?"selected":""}>Mixto priorizando recurrentes</option>
            <option value="recurrent" ${k==="recurrent"?"selected":""}>Solo recurrentes</option>
            <option value="new" ${k==="new"?"selected":""}>Solo nuevos fallos</option>
          </select>
          <label class="form-label fw-semibold" for="limit">Número de preguntas</label>
          <select class="form-select" id="limit">${G.map(a=>`<option value="${a}" ${a===0?"selected":""}>${a===0?"Todas":a}</option>`).join("")}</select>
          <button id="start" class="btn btn-primary btn-lg w-100 mt-3" type="button">Empezar repaso</button>
        </div>
      </div>`,document.getElementById("start")?.addEventListener("click",()=>{k=document.getElementById("fail-filter")?.value??"mixed",Q(Number(document.getElementById("limit")?.value??"0"))})}function re(){const e=T().map((a,n)=>B(a,Number(a?.tema??0),n)).filter(Boolean),{nuevas:t,recurrentes:s}=te(e);g.innerHTML=`
      <div class="test-hero mb-4">
        <span class="test-kicker">Dudosas</span>
        <h2 class="display-6 mb-2">Revisar preguntas marcadas</h2>
        <p class="text-body-secondary mb-3">Aquí van las preguntas que has marcado porque no te convencen, son ambiguas o quieres revisarlas mejor.</p>
        <div class="d-flex flex-wrap gap-2">
          <span class="badge text-bg-secondary">Marcadas: ${e.length}</span>
          <span class="badge text-bg-warning">Con fallos recurrentes: ${s.length}</span>
          <span class="badge text-bg-primary">Solo duda tecnica: ${t.length}</span>
        </div>
      </div>
      <div class="test-config">
        <div class="test-panel">
          <label class="form-label fw-semibold" for="doubt-filter">Bloque a revisar</label>
          <select class="form-select mb-3" id="doubt-filter">
            <option value="mixed" ${M==="mixed"?"selected":""}>Mixto priorizando conflictivas</option>
            <option value="recurrent" ${M==="recurrent"?"selected":""}>Solo dudosas con fallos recurrentes</option>
            <option value="new" ${M==="new"?"selected":""}>Solo dudosas nuevas</option>
          </select>
          <label class="form-label fw-semibold" for="limit">Número de preguntas</label>
          <select class="form-select" id="limit">${G.map(a=>`<option value="${a}" ${a===0?"selected":""}>${a===0?"Todas":a}</option>`).join("")}</select>
          <button id="start" class="btn btn-primary btn-lg w-100 mt-3" type="button">Empezar revision</button>
        </div>
      </div>`,document.getElementById("start")?.addEventListener("click",()=>{M=document.getElementById("doubt-filter")?.value??"mixed",Q(Number(document.getElementById("limit")?.value??"0"))})}m==="fails"?ne():m==="doubts"?re():ae();
