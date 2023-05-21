import { getUser } from '@/lib/auth'
import Image from 'next/image'

export function Profile() {
  const { name, avatarUrl } = getUser()

  return (
    <div className="flex items-center gap-3 text-left">
      <Image
        src={avatarUrl}
        width={40}
        height={40}
        alt=""
        className="h-12 w-12 rounded-full"
      />

      <p className="max-w-[140px] text-sm leading-snug">
        <span className="text-xl text-gray-50">{name}</span>
        <a href="" className="block text-red-400 hover:text-red-300">
          Sair
        </a>
      </p>
    </div>
  )
}
