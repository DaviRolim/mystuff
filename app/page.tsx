import Navbar from '@/components/navbar';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="h-46 bg-slate-400"></div>
      <div
        style={{
          backgroundImage: "url('testimg.jpg')",
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div className="text-slate-300 text-3xl text-center">DAVI HOLANDA</div>
      </div>
      <div className="bg-white h-screen"></div>
    </>
  );
}
