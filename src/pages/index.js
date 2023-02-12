import SearchUser from '@/components/SearchUser';

const API_URL = 'https://www.drupal.org/api-d7/user.json';

export default function Home({profileData}) {
  return (
    <main className='container'>
      <SearchUser profileData={profileData} />
    </main>
  )
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}?name=sonvir249`)
  const profileData = await res.json()

  return {
    props: {
      profileData,
    },
  }
}
