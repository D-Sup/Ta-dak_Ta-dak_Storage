import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist';

const sessionStorage = typeof window !== 'undefined' ? window.sessionStorage : undefined

const {persistAtom} = recoilPersist({
  key: 'darkmode',
  storage: sessionStorage,
})

export const DarkModeAtom = atom<boolean>({
  key: 'DarkModeAtom',
  default: true,
  effects_UNSTABLE: [persistAtom],
});
