// import { useRouter } from 'next/router';
import Navbar from '@/components/Navbar';
import Album from '@/components/Album';

function Userpage ({params}){

  return (
    <>
      <Navbar/>  
      <Album key={params.userid} id={params.userid} />
    </>
    
  )
}

export default Userpage