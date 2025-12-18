import{G as u,K as i,q as o,L as d,y as a,z as p,T as r}from"./index-DWWUwJHA.js";function m(e){return u({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M4.75 17.25a.75.75 0 0 1 .75.75v2.25c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V18a.75.75 0 0 1 1.5 0v2.25A1.75 1.75 0 0 1 18.25 22H5.75A1.75 1.75 0 0 1 4 20.25V18a.75.75 0 0 1 .75-.75Z"},child:[]},{tag:"path",attr:{d:"M5.22 9.97a.749.749 0 0 1 1.06 0l4.97 4.969V2.75a.75.75 0 0 1 1.5 0v12.189l4.97-4.969a.749.749 0 1 1 1.06 1.06l-6.25 6.25a.749.749 0 0 1-1.06 0l-6.25-6.25a.749.749 0 0 1 0-1.06Z"},child:[]}]})(e)}const x=i.div`
  position: relative;
  height: 100%;
  color: ${({theme:e})=>e?.colors?.mainColor||"#000"};
  border: 2px solid;
  border-radius: 4px;
  padding: 16px;

  box-shadow: 4px 4px 0 #000;

  background: #0000002f;
  backdrop-filter: blur(7.2px);
  -webkit-backdrop-filter: blur(7.2px);

  transform-style: preserve-3d;
  transition: transform 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: perspective(1100px) rotateX(2deg) rotateY(-2deg) translate(-2px, -2px);
    box-shadow: 10px 10px 0 #000;
  }
`,h=i.div`
  position: relative;
  width: 100%;
  border: 2px solid #000;
  border-radius: 4px;
  margin-top: 42px;
  padding: 2rem 2rem 5rem 2rem;
`,b=i.div`
  position: absolute;
  top: 10px;
  left: 16px;
  right: 16px;
  height: 40px;
`,f=i.div`
  width: 100px;
  height: 100px;
  z-index: 3;
  border-radius: 50%;
  border: 2px solid #000;
  position: relative;
  background: #e9f8fd;
  &::after {
    content: '';
    border-radius: 50%;
    width: 90%;
    height: 90%;
    top: 5%;
    left: 5%;
    border: 1px solid #000;
    position: absolute;
  }
`,s=i.div`
  height: ${({$h:e})=>e||"50px"};
  width: ${({$w:e})=>e||"auto"};
  padding: 0.5rem;
  border-radius: ${({$radius:e})=>e||"999px"};
  border: 2px solid #000;
  position: relative;
  z-index: 3;
  display: flex;
  justify-content: ${({$justify:e})=>e||"center"};
  align-items: center;
  gap: 0.5rem;
  background: ${({$bg:e})=>e||"#e9f8fd"};
  ${({shadow:e})=>e&&`
      box-shadow: 2px 0 0 #000;
      &:hover {
        box-shadow: 4px 0 0 #000;
        transition: all 0.1s ease-in-out;
        transform:  scale(1.3);
      }
    `}
`,l=i.div`
  width: 42px;
  height: 42px;
  aspect-ratio: 1/1;
  border-radius: 50%;
  border: 2px solid #000;
  display: flex;
  align-items: center;
  box-shadow: 2px 0 0 #000;
  justify-content: center;
  font-size: 22px;
  background: ${({$bg:e})=>e||"transparent"};

  ${({shadow:e})=>e&&`
      box-shadow: 2px 0 0 #000;
      &:hover {
        box-shadow: 4px 0 0 #000;
        transition: all 0.1s ease-in-out;
        transform:  scale(1.3);
        transform: scale(1.3);
        box-shadow: 4px 0 0 #000;
        background: ${({$bg:t})=>t||" #ffffff47"};
        transition: all 0.1s ease-in-out;
    `}
`,g=i.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,v=i.div`
  position: absolute;
  bottom: -2px;
  left: 10px;
  right: -2px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,$={designer:{name:"Stefania Galazzo",role:"designer",emoji:"⚡",age:"Gli anni di Cristo (+3)",element:"Acqua",profession:"Graphic Designer / Front-end Developer",professionSince:"2019",professionBefore:"Graphic Designer e basta",professionAfter:"Eremita sulla spiaggia",city:"Torino",favoriteBook:{title:"Scritto sul corpo",author:"Jeanette Winterson"},favoriteColor:"Il blu dello sfondo del sito",favoriteQuote:{text:"Complicare è facile...complicare è facile...",author:"semicit"},phone:"+39 3922615099",email:"galazzostefania@gmail.com",bio:{intro:`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, aspernatur cumque? 
              Praesentium, atque commodi voluptas consectetur id quo quod architecto dolor rem vitae, 
              autem, ab assumenda libero consequatur incidunt! Atque.`,body:`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, aspernatur cumque? 
             Praesentium, atque commodi voluptas consectetur id quo quod architecto dolor rem vitae, 
             autem, ab assumenda libero consequatur incidunt! Atque.`},imagePath:void 0,cvPath:void 0},copywriter:{name:"Isabella De Biasi",role:"copywriter",emoji:"⚡",age:"Non si dice! (29)",element:"Psico",profession:"Copywriter",professionSince:"2022",professionBefore:"Content manager",professionAfter:"Finirò di scrivere il mio libro (forse)",city:"Torino",favoriteBook:{title:"I figli della mezzanotte",author:"Salman Rushdie"},favoriteColor:"Qualsiasi tonalità di blu",favoriteQuote:{text:"Chi molto troppo, nulla niente",author:"Anonimo"},phone:"+39 3481746154",email:"isabelladbiasi@gmail.com",bio:{intro:`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, aspernatur cumque? 
              Praesentium, atque commodi voluptas consectetur id quo quod architecto dolor rem vitae, 
              autem, ab assumenda libero consequatur incidunt! Atque.`,body:`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, aspernatur cumque? 
             Praesentium, atque commodi voluptas consectetur id quo quod architecto dolor rem vitae, 
             autem, ab assumenda libero consequatur incidunt! Atque.`},imagePath:void 0,cvPath:void 0}};function q(e){return $[e]}function j(e){return[{label:"Nome:",value:e.name},{label:"Età:",value:e.age},{label:"Elemento:",value:e.element},{label:"Professione:",value:e.profession},{label:"Dal:",value:e.professionSince},{label:"E prima?",value:e.professionBefore},{label:"E dopo?",value:e.professionAfter},{label:"Città:",value:e.city},{label:"Libro preferito:",value:`${e.favoriteBook.title}, ${e.favoriteBook.author}`},{label:"Colore preferito:",value:e.favoriteColor},{label:"Citazione preferita:",value:`"${e.favoriteQuote.text}" - ${e.favoriteQuote.author}`}]}function y({data:e}){const t=j(e);return o.jsxs(x,{children:[o.jsxs(b,{children:[o.jsxs(g,{children:[o.jsx(f,{}),o.jsx(s,{children:e.name})]}),o.jsx(d,{to:"/",style:{position:"absolute",right:0,top:0},children:o.jsx(l,{shadow:!0,children:"🏠"})})]}),o.jsx(h,{children:o.jsxs(a,{$gap:"2rem",$direction:"column",children:[o.jsxs(a,{$gap:"2rem",children:[o.jsx(p,{$h:"300px",$width:"300px",$border:"1px solid",style:{backgroundImage:e.imagePath?`url(${e.imagePath})`:"none",backgroundSize:"cover",backgroundPosition:"center"}}),o.jsx(a,{$gap:"2rem",$direction:"column",$width:"50%",children:o.jsx(r,{as:"p",$display:"flex",$direction:"column",$gap:"0.5rem",children:t.map((n,c)=>o.jsxs("span",{className:"w-100",children:[o.jsx("span",{className:"bold",children:n.label})," ",n.value]},c))})})]}),e?.bio.intro&&o.jsx(r,{children:e.bio.intro}),e?.bio.body&&o.jsx(r,{children:e.bio.body})]})}),o.jsxs(v,{children:[o.jsxs(s,{$h:"100%",$radius:"8px",$bg:"#e9f8fd",shadow:!0,style:{cursor:e.cvPath?"pointer":"not-allowed"},onClick:()=>{e.cvPath&&window.open(e.cvPath,"_blank")},children:[o.jsx(m,{}),o.jsx("span",{children:" CV"})]}),o.jsxs(s,{$h:"auto",$radius:"8px",$bg:"#e9f8fd",children:[o.jsx(l,{children:e.emoji,$bg:""}),o.jsx(r,{as:"p",$m:"0 0.5rem 0 0.5rem",children:`${e.phone} | ${e.email}`})]})]})]})}export{y as P,q as g};
