import Image from 'next/image';
import { sepolia } from 'viem/chains';
import { useAccount, useEnsAvatar, useEnsName } from 'wagmi';

export const EnsProfile = () => {
  const { address } = useAccount();
  const { data: name } = useEnsName({
    address,
    chainId: sepolia.id,
  });
  console.log('name', name);
  const { data: avatar } = useEnsAvatar({
    name: name || '',
    chainId: sepolia.id,
  });

  return (
    <div
      className={`mt-5 flex items-center gap-2 ${
        address ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <Image
        width={32}
        height={32}
        alt="ens"
        src={avatar || ''}
        className="h-8 w-8 rounded-full"
      />
      <div className="flex flex-col leading-none">
        <span className="font-semibold">{name}</span>
        <span className="text-grey text-sm">{address}</span>
      </div>
    </div>
  );
};
