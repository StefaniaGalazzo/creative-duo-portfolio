import PageWrapper from '../components/ui/PageWrapper/PageWrapper'
import { getPersonData } from '../components/ui/PageWrapper/copy'

export default function Isabella() {
  const data = getPersonData('copywriter')
  
  return <PageWrapper data={data} />
}
