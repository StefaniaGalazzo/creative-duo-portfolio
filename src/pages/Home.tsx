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
        title='Andiamo al punto'
        description='I nostri progetti sono scontro di idee, che finiscono sempre per creare  tempeste perfette. Parliamo, pensiamo, non buttiamo via niente, neanche l’idea più brutta finché non troviamo quella giusta. Insomma, non importa quanto sia lunga una frase: alla fine arrivano sempre, inevitabilmente, al punto. 

Un punto che non è mai solo la fine di una frase, ma l’inizio di un nuovo paragrafo. 

Perché per noi nessun progetto creativo è mai fine a se stesso, ma sempre l’inizio di una storia.

Siamo brave a creare progetti che durano nel tempo, a raccontare storie che ti fanno dire:

DIMMI DI PIÙ.
'
      />
    </Flex>
  )
}
