import { Volume2 } from 'lucide-react'
import type { VocabWord } from '../types'

interface VocabularyTableProps {
  words: VocabWord[]
  onSpeak?: (text: string) => void
}

export default function VocabularyTable({ words, onSpeak }: VocabularyTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="text-left py-2 px-3 text-gray-500 font-medium">单词</th>
            <th className="text-left py-2 px-3 text-gray-500 font-medium">音标</th>
            <th className="text-left py-2 px-3 text-gray-500 font-medium">释义</th>
            {onSpeak && <th className="text-left py-2 px-3 text-gray-500 font-medium w-10"></th>}
          </tr>
        </thead>
        <tbody>
          {words.map((w, i) => (
            <tr key={i} className="border-b border-gray-100 hover:bg-blue-50/50 transition-colors">
              <td className="py-2 px-3 font-semibold text-gray-800">{w.word}</td>
              <td className="py-2 px-3 text-gray-500 font-mono text-xs">{w.phonetic}</td>
              <td className="py-2 px-3 text-gray-600">{w.meaning}</td>
              {onSpeak && (
                <td className="py-2 px-3">
                  <button
                    onClick={() => onSpeak(w.word)}
                    className="text-gray-400 hover:text-blue-600 transition-colors cursor-pointer"
                    title={`朗读 ${w.word}`}
                  >
                    <Volume2 size={14} />
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
