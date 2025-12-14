# 🎯 CustomCursor - Documentazione

## ✅ Installazione Completata

Il CustomCursor è stato integrato nel progetto Creative Duo con le seguenti modifiche:

### File creati:
- `src/components/ui/CustomCursor/index.tsx` - Componente principale
- `src/components/ui/CustomCursor/styles.ts` - Styled components

### File modificati:
- `src/components/layout/AppLayout.tsx` - Aggiunto wrapper CustomCursor
- `src/theme/globalStyles.ts` - Nascosto cursore di default
- `src/components/elements/MagneticBadge/index.tsx` - Aggiunta classe `.hoverable`

---

## 🎨 Come funziona

### **Cursore Base**
- **Big Ball**: Cerchio grande (30px) che segue il mouse con smooth delay
- **Small Ball**: Cerchio piccolo (10px) con bordo, più reattivo

### **Stato Hover (classe .hoverable)**
Si attiva automaticamente su:
- `.hoverable` - **Classe principale per effetto hover speciale**
- `<a>` - Link
- `<button>` - Bottoni
- `[role="button"]` - Elementi con ruolo button
- `input`, `textarea`, `select`

**Effetto hover**: 
- ✅ Big Ball si espande (scale 4x)
- ✅ Animazione pulse continua
- ✅ Smooth transition

---

## 🎯 Come usare

### 1. **MagneticBadge** (già configurati)
I badge hanno già la classe `.hoverable` integrata:

```tsx
<MagneticBadge 
  variant="fluid"
  label="Hover me!"
/>
```

### 2. **Elementi custom**
Aggiungi semplicemente la classe `.hoverable`:

```tsx
<div className="hoverable">
  Elemento con effetto hover
</div>
```

### 3. **Button component**
```tsx
<Button className="hoverable">
  Click Me!
</Button>
```

### 4. **Link**
I link hanno già l'effetto automatico, ma puoi aggiungere `.hoverable` per l'animazione pulse:

```tsx
<a href="#" className="hoverable">
  Link con pulse
</a>
```

---

## 🎨 Personalizzazione

### Cambia i colori nel tema:

```tsx
// In src/theme/colors.ts
export const defaultColors = {
  mainColor: '#000000',  // ⬅️ Colore cursore
  detail1: '#E6FF9D',    // ⬅️ Colore bordo small ball
}
```

### Modifica velocità seguimento:

```tsx
// In CustomCursor/index.tsx, linee ~32
bigBallPos.current.x += (mousePos.current.x - bigBallPos.current.x) * 0.15  // ⬅️ 0.15 = smooth
smallBallPos.current.x += (mousePos.current.x - smallBallPos.current.x) * 0.4  // ⬅️ 0.4 = veloce
```

### Modifica dimensioni:

```tsx
// In CustomCursor/styles.ts
export const CursorBallBig = styled(BaseCursorBall)`
  width: 30px;   // ⬅️ Dimensione big ball
  height: 30px;
`

export const CursorBallSmall = styled(BaseCursorBall)`
  width: 10px;   // ⬅️ Dimensione small ball
  height: 10px;
`
```

### Modifica effetto hover:

```tsx
// In CustomCursor/styles.ts, CursorInner
${({ $isHovered }) =>
  $isHovered &&
  css`
    transform: scale(4);  // ⬅️ Scale on hover (4x)
    animation: ${cursorPulse} 1.5s ease-in-out infinite;  // ⬅️ Velocità pulse
  `}
```

### Modifica animazione pulse:

```tsx
// In CustomCursor/styles.ts
const cursorPulse = keyframes`
  0%, 100% {
    transform: scale(1);    // ⬅️ Dimensione base
  }
  50% {
    transform: scale(1.1);  // ⬅️ Dimensione al picco (più grande = più evidente)
  }
`
```

---

## 🐛 Troubleshooting

### Il cursore non appare:
- ✅ Verifica che `cursor: none !important` sia in `globalStyles.ts`
- ✅ Controlla che `CustomCursor` wrappa `AppLayout`

### L'hover non funziona:
- ✅ Aggiungi classe `.hoverable` all'elemento
- ✅ Verifica che non ci siano `pointer-events: none` sull'elemento

### Il cursore è troppo veloce/lento:
- ✅ Modifica i valori di smooth follow (0.15 e 0.4)

### L'animazione pulse è troppo veloce:
- ✅ Aumenta la durata in `animation: ${cursorPulse} 1.5s` (es: 2s, 3s)

---

## 🎉 Features

- ✅ Smooth seguimento con `requestAnimationFrame`
- ✅ Effetto hover automatico con classe `.hoverable`
- ✅ Animazione pulse su hover
- ✅ Blend mode `difference` per contrasto
- ✅ TypeScript ready
- ✅ Integrato con theme colors
- ✅ MagneticBadge già configurati

---

## 📝 Esempi d'uso

```tsx
// Card interattiva
<div className="hoverable" style={{ padding: '2rem', background: '#eee' }}>
  Hover me!
</div>

// Immagine cliccabile
<img src="..." className="hoverable" onClick={handleClick} />

// Sezione interattiva
<section className="hoverable">
  <h2>Interactive Section</h2>
  <p>Hover over this entire section</p>
</section>

// Custom component
<MyComponent className="hoverable">
  Content
</MyComponent>
```

---

## 💡 Best Practices

1. Usa `.hoverable` solo su elementi che vuoi evidenziare
2. Non usare su elementi troppo piccoli (< 50px)
3. Evita di usare su elementi che scorrono velocemente
4. Perfetto per: CTA, cards, immagini, sezioni hero
