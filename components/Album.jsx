import Photo from './Photo'
import Follow from './Follow'
  
async function Album({id}) {

    const res = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`,
      {cache: 'no-store'}
    );

    const userData = await res.json()

  return (
    <div className='w-full flex-center flex-col font-PT'>
      <section className='container'>
        <a className='username' href={`https://${userData.website}`}>{userData.username}</a>
        <a href={`https://${userData.website}`}>website: {userData.website}</a>
        <Follow/>
        <Photo>images</Photo>
      </section>
    </div>
  )
}

export default Album