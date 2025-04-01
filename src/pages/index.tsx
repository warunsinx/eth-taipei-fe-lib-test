import WorldVerifyBtn from '@/components/WorldVerifyBtn';
import OneInchTest from '@/components/OneInchTest';
import { ConnectKitButton } from 'connectkit';
import { EnsProfile } from '@/components/EnsProfile';
// import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function Home() {
  return (
    <div className="bg-black h-screen w-screen text-white flex justify-center items-center flex-col space-y-5">
      <WorldVerifyBtn />
      <OneInchTest />
      {/* <ConnectButton /> */}
      <ConnectKitButton />
      <EnsProfile />
    </div>
  );
}
