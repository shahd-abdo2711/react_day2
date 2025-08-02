 
import './App.css'
 
import Header from './components/Header'
import Card from './components/Card'
import data from './data'

export default function App() {
    const cards = data.map(item => {
        return (
            <Card
                key={item.title}
                {...item}
            />
        )
    })

    return (
        <div className="app-container">
            <Header />
            <section className="cards-list">
                {cards}
            </section>
        </div>
    )
}
