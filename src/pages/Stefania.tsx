import PageWrapper from '../components/ui/PageWrapper/PageWrapper'
import { getPersonData } from '../components/ui/PageWrapper/copy'

export default function Stefania() {
  const data = getPersonData('designer')
  
  return <PageWrapper data={data} />
}
