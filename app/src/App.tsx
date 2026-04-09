import { useEffect, useState } from 'react'
import { NewsArticle, newsArticles } from './data/newsData'

function App() {
  const [articles, setArticles] = useState<NewsArticle[]>([])

  useEffect(() => {
    setArticles(newsArticles)
  }, [])

  return (
    <div>
      <h1>HyoBuddy</h1>
      {articles.map(article => (
        <div key={article.id}>
          <h2>{article.title}</h2>
          <p>{article.excerpt}</p>
        </div>
      ))}
    </div>
  )
}

export default App
