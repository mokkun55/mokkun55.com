import { useParams } from 'react-router'

export const Work = () => {
  const { id } = useParams()
  return (
    <div>
      <h1>Work</h1>
      <p>作品の詳細ページ</p>
      <p>workId: {id}</p>
    </div>
  )
}
