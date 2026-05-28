import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import BookPage from './pages/BookPage'
import LessonPage from './pages/LessonPage'
import VocabularyPage from './pages/VocabularyPage'
import ToolsPage from './pages/ToolsPage'
import PhonicsPage from './pages/PhonicsPage'
import StatsPage from './pages/StatsPage'
import ProfilePage from './pages/ProfilePage'
import CommunityPage from './pages/CommunityPage'
import PracticePage from './pages/PracticePage'
import FlashcardPage from './pages/FlashcardPage'
import DictationPage from './pages/DictationPage'
import RecitePage from './pages/RecitePage'
import WrongAnswersPage from './pages/WrongAnswersPage'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/book/:id" element={<BookPage />} />
        <Route path="/book/:id/lesson/:lessonId" element={<LessonPage />} />
        <Route path="/vocabulary" element={<VocabularyPage />} />
        <Route path="/tools" element={<ToolsPage />} />
        <Route path="/phonics" element={<PhonicsPage />} />
        <Route path="/stats" element={<StatsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/practice" element={<PracticePage />} />
        <Route path="/flashcards" element={<FlashcardPage />} />
        <Route path="/dictation" element={<DictationPage />} />
        <Route path="/recite" element={<RecitePage />} />
        <Route path="/book/:id/lesson/:lessonId/recite" element={<RecitePage />} />
        <Route path="/wrong-answers" element={<WrongAnswersPage />} />
      </Routes>
    </Layout>
  )
}

export default App
