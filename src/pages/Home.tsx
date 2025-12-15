import { Flex, Hero, SliderSection, TextSection } from '../components'

export default function Home() {
  return (
    <Flex $direction='column'>
      <Hero />
      <TextSection
        title='Ciao! Siamo Stefania e Isabella'
        description='Una graphic designer e una copywriter, incontrate su un bellissimo progetto chiamato Ludwig, circa due anni fa: abbiamo creato una community online da 70K di follower con zero budget e, nel frattempo, abbiamo lavorato a siti internet, app, alle Olimpiadi e a TEDx. 
Ci divertiamo a sfornare idee creative che lasciano il segno, tra colori, immagini e claim d’impatto.'
      />
      <SliderSection />
      <TextSection
        title='Siamo diverse ed è questo il bello'
        description='I nostri progetti sono scontro di idee, che finiscono sempre per creare  tempeste perfette. Perché un buon brainstorming, alla fine, non è altro che questo. Le nostre idee sono come lunghissime frasi che arrivano sempre, inevitabilmente, a un punto. 

Un punto che non è mai solo la fine di una frase, ma l’inizio di un nuovo paragrafo. 

Perché per noi nessun progetto creativo è mai fine a se stesso, ma sempre l’inizio di una storia.

Siamo brave a creare progetti che durano nel tempo, a raccontare storie che ti fanno dire:

DIMMI DI PIÙ.
'
      />
    </Flex>
  )
}
