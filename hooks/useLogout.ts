import Cookie from 'universal-cookie'
import firebase from 'firebase'
import { unSubMeta } from './useUserChanged'

const cookie = new Cookie()
export const useLogout = () => {
  const logout = async () => {
    if (unSubMeta) {
      unSubMeta()
    }
    await firebase.auth().signOut()
    cookie.remove('token')
  }

  return { logout }
}
