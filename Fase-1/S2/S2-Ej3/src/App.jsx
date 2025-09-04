import './App.css'
import { TwitterFollowCard } from './components/TwitterFollowCard.jsx'

const users = [
  {
    userName: 'arelyx1',
    name: 'Andry Caceres',
    isFollowing: true
  },
  {
    userName: '_h13n4',
    name: 'Hiena',
    isFollowing: false
  },
  {
    userName: 'random',
    name: 'El papu',
    isFollowing: false
  }
]

export function App () {
  return (
    <section className='App'>
      {
        users.map(({ userName, name, isFollowing }) => (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        ))
      }
    </section>
  )
}