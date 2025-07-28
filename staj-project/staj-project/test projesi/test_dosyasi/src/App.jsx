import { useQuery, gql } from '@apollo/client'
import './App.css'

const GET_SECTIONS = gql`
  query {
    sections(order_by: { order: asc }) {
      id
      title
      subtitle
      image
      button
      cards_id
    }
  }
`

const GET_CARDS_BY_IDS = gql`
  query GetCards($ids: [Int!]) {
    cards(where: { id: { _in: $ids } }) {
      id
      title
      description
      image
      button
      name
    }
  }
`
// 2) Id'ye göre özel kartları çekmek için
function SectionWithCards({ title, subtitle, image, button, cardsId }) {
  const { loading, error, data } = useQuery(GET_CARDS_BY_IDS, {
    variables: { ids: cardsId } 
  })

  if (loading) return <p>Loading cards for "{title}"...</p>
  if (error) return <p>Error loading cards: {error.message}</p>

  return (
    <section style={{ border: '2px solid #000', padding: '15px', marginBottom: '30px' }}>
      {title && <h2>{title}</h2>}
      {subtitle && <p>{subtitle}</p>}
      {image && <p><strong>Image:</strong> {image}</p>}
      {button && <p><strong>Button:</strong> {button}</p>}

      <div style={{ marginTop: '20px' }}>
        <h3>Cards</h3>
        {data.cards.length > 0 ? (
          data.cards.map(card => (
            <div key={card.id} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
              {card.title && <p><strong>Title:</strong> {card.title}</p>}
              {card.description && <p><strong>Description:</strong> {card.description}</p>}
              {card.image && <p><strong>Image:</strong> {card.image}</p>}
              {card.button && <p><strong>Button:</strong> {card.button}</p>}
              {card.name && <p><strong>Name:</strong> {card.name}</p>}
            </div>
          ))
        ) : (
          <p>Bu bölüme bağlı kart yok.</p>
        )}
      </div>
    </section>
  )
}

function SectionWithoutCards({ title, subtitle, image, button }) {
  return (
    <section style={{ border: '2px solid #000', padding: '15px', marginBottom: '30px' }}>
      {title && <h2>{title}</h2>}
      {subtitle && <p>{subtitle}</p>}
      {image && <p><strong>Image:</strong> {image}</p>}
      {button && <p><strong>Button:</strong> {button}</p>}
    </section>
  )
}

function App() {
  const { loading, error, data } = useQuery(GET_SECTIONS)

  if (loading) return <div className="container">Loading...</div>
  if (error) return <div className="container">Error: {error.message}</div>

  return (
    <div className="container">
      <h1>Sections</h1>

      {data.sections.map(section => {
        const hasCards = section.cards_id && section.cards_id.length > 0

        const props = {
          key: section.id,
          title: section.title,
          subtitle: section.subtitle,
          image: section.image,
          button: section.button,
          cardsId: section.cards_id
        }

        // 3) Eğer cards_id varsa SectionWithCards, yoksa SectionWithoutCards kullan. props olacak şekilde
        if (hasCards) {
          return (
            <SectionWithCards {...props} />
          )
        }
        return <SectionWithoutCards {...props} />
      })}
    </div>
  )
}

export default App
