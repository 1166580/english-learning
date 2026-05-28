import { useState, useEffect, useCallback } from 'react'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  updateProfile,
  type User,
} from 'firebase/auth'
import { doc, setDoc, getDoc } from 'firebase/firestore'
import { auth, db, googleProvider, isConfigured } from '../firebase'
import type { UserProfile } from '../types'

export function useAuth() {
  const [user, setUser] = useState<User | null>(null)
  const [profile, setProfile] = useState<UserProfile | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!isConfigured || !auth) {
      setLoading(false)
      return
    }
    const unsub = onAuthStateChanged(auth, async (u) => {
      setUser(u)
      if (u && db) {
        const ref = doc(db, 'users', u.uid)
        const snap = await getDoc(ref)
        if (snap.exists()) {
          setProfile(snap.data() as UserProfile)
        } else {
          const newProfile: UserProfile = {
            uid: u.uid,
            displayName: u.displayName || '学习者',
            email: u.email || '',
            photoURL: u.photoURL || '',
            bio: '',
            createdAt: Date.now(),
            stats: { totalLessons: 0, totalWords: 0, streakDays: 0 },
          }
          await setDoc(ref, newProfile)
          setProfile(newProfile)
        }
      } else {
        setProfile(null)
      }
      setLoading(false)
    })
    return unsub
  }, [])

  const register = useCallback(async (email: string, password: string, displayName: string) => {
    if (!auth) throw new Error('Firebase 未配置')
    const cred = await createUserWithEmailAndPassword(auth, email, password)
    await updateProfile(cred.user, { displayName })
    if (db) {
      const newProfile: UserProfile = {
        uid: cred.user.uid,
        displayName,
        email,
        photoURL: '',
        bio: '',
        createdAt: Date.now(),
        stats: { totalLessons: 0, totalWords: 0, streakDays: 0 },
      }
      await setDoc(doc(db, 'users', cred.user.uid), newProfile)
    }
    return cred.user
  }, [])

  const login = useCallback(async (email: string, password: string) => {
    if (!auth) throw new Error('Firebase 未配置')
    return (await signInWithEmailAndPassword(auth, email, password)).user
  }, [])

  const loginWithGoogle = useCallback(async () => {
    if (!auth || !googleProvider) throw new Error('Firebase 未配置')
    return (await signInWithPopup(auth, googleProvider)).user
  }, [])

  const logout = useCallback(async () => {
    if (!auth) throw new Error('Firebase 未配置')
    await signOut(auth)
    setProfile(null)
  }, [])

  const updateProfileData = useCallback(async (data: Partial<UserProfile>) => {
    if (!user || !db) return
    const ref = doc(db, 'users', user.uid)
    await setDoc(ref, data, { merge: true })
    setProfile(prev => prev ? { ...prev, ...data } : null)
  }, [user])

  return {
    user,
    profile,
    loading,
    isConfigured,
    register,
    login,
    loginWithGoogle,
    logout,
    updateProfileData,
  }
}
