import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import BookPage from './pages/BookPage'
import LessonPage from './pages/LessonPage'
import VocabularyPage from './pages/VocabularyPage'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/book/:id" element={<BookPage />} />
        <Route path="/book/:id/lesson/:lessonId" element={<LessonPage />} />
        <Route path="/vocabulary" element={<VocabularyPage />} />
      </Routes>
    </Layout>
  )
}

export default App
