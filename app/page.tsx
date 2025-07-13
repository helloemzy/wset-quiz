import TabNavigation from '@/components/TabNavigation'
import Quiz from '@/components/Quiz'
import DiagramsPage from '@/components/DiagramsPage'
import RegionsPageImproved from '@/components/RegionsPageImproved'
import ShortAnswersPage from '@/components/ShortAnswersPage'
import ComparisonsPage from '@/components/ComparisonsPage'

export default function Home() {
  return (
    <main>
      <TabNavigation tabLabels={['Quiz Practice', 'Winemaking Diagrams', 'Wine Regions', 'Short Answers', 'Comparisons']}>
        <div className="py-8">
          <Quiz />
        </div>
        <DiagramsPage />
        <RegionsPageImproved />
        <ShortAnswersPage />
        <ComparisonsPage />
      </TabNavigation>
    </main>
  )
}