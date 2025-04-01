import Image from 'next/image';
import { useAccount, useEnsAvatar, useEnsName } from 'wagmi';

export const EnsProfile = () => {
  const { address } = useAccount();
  const { data: name } = useEnsName({ address, chainId: 11155111 });
  const { data: avatar } = useEnsAvatar({
    name: name || '',
    chainId: 11155111,
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
