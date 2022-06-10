import useSWR from 'swr'
import { Button } from '../components/Button'
const fetcher = (...args) => fetch(...args).then((res) => res.json())

function Profile() {
  const { data, error } = useSWR('/api/profile-data', fetcher)
  console.log("profile")
  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <div>
      <Button />
      <h1>{data.name}</h1>
      <p>{data.bio}</p>
    </div>
  )
}

export default Profile