import Image from 'next/image'

export default async function Photo() {

  const res = await fetch(
    'https://jsonplaceholder.typicode.com/albums/1/photos',
    { cache: 'no-store' }
  );

  const userAlbum = await res.json()

  return (
    <div className='flex flex-wrap justify-center'>
      {userAlbum.map((photo, index) => 
        
        <div key={photo.id} className='photo' >
          <Image src={photo.url} alt={photo.title} width={600} height={600}/>
        </div>
      
      )}
    </div>
  )

} 