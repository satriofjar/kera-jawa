import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <div className='rounded-md ring-1 ring-gray bg-bottom bg-no-repeat bg-contain' style={{ backgroundImage: 'url(/background-back.png)' }}>
      <div className='flex bg-top bg-no-repeat bg-cover bg-black bg-opacity-10' style={{ backgroundImage: 'url(/bg-top.png)' }}>
        <Image
          src={'/photo.jpg'}
          alt=''
          width={80}
          height={10}
          className='rounded-full mx-4 w-12 h-12 mt-3'/>
        <div className='mx-4'>
          <h2 className='font-semibold text-lg text-blue-900 max-w-64'>KARTU TANDA ANGGOTA</h2>
          <h4 className='font-semibold text-md text-blue-900'>KERA JAWA</h4>
          <p className='text-xs max-w-32'>Dempet selatan, Demak, Jawa Tengah</p>
        </div>
      </div>
      <div className='bg-no-repeat bg-cover relative' style={{ backgroundImage: 'url(/monyet1.jpeg)', zIndex: -1, opacity: 0.9 }}>
        <div className='flex lg:flex-row sm:flex-col py-5 pb-20 bg-black bg-opacity-40 rounded-b-md'>
          <img className='w-28 h-40 mx-4' src="https://oneshaf.com/wp-content/uploads/2022/12/placeholder-5.png" alt="" />
          <div className='mx-10 w-[300px]'>
            <h3 className='text-xl font-semibold text-center mb-4 text-white rounded-sm max-w-60 py-1'>Satrio Fajar</h3>
            <table className='table-auto text-white'>
              <tbody>
                <tr>
                  <td className='px-2'>NIP</td>
                  <td className='px-2'>:</td>
                  <td className='px-2'>123456789</td>
                </tr>
                <tr>
                  <td className='px-2'>Angkatan</td>
                  <td className='px-2'>:</td>
                  <td className='px-2'>2023</td>
                </tr>
                <tr>
                  <td className='px-2'>Alamat</td>
                  <td className='px-2'>:</td>
                  <td className='px-2'>Dempet</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
     </div>
    </main>
  )
}
