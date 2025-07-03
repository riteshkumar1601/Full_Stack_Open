import { useState } from 'react'

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>{text}</button>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time... The remaining 10 percent accounts for the other 90 percent.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place.',
    'Programming without console.log is like a doctor refusing x-rays.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  const handleVote = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }

  const handleNext = () => {
    const random = Math.floor(Math.random() * anecdotes.length)
    setSelected(random)
  }

  const maxVotes = Math.max(...votes)
  const topAnecdote = anecdotes[votes.indexOf(maxVotes)]

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <Button onClick={handleVote} text="vote" />
      <Button onClick={handleNext} text="next anecdote" />

      <h2>Anecdote with most votes</h2>
      <p>{topAnecdote}</p>
      <p>has {maxVotes} votes</p>
    </div>
  )
}

export default App