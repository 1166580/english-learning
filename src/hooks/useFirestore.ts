import { useCallback } from 'react'
import {
  collection, addDoc, deleteDoc, doc, getDocs, getDoc,
  query, orderBy, limit, startAfter, where, updateDoc,
  increment, arrayUnion, arrayRemove,
  type DocumentSnapshot, type QueryConstraint,
} from 'firebase/firestore'
import { db, isConfigured } from '../firebase'
import type { Post, Comment } from '../types'

export function useFirestore() {
  const canUse = isConfigured && db !== null

  const createPost = useCallback(async (post: Omit<Post, 'id' | 'likes' | 'commentCount' | 'createdAt'>) => {
    if (!canUse || !db) throw new Error('Firebase 未配置')
    const ref = await addDoc(collection(db, 'posts'), {
      ...post,
      likes: [],
      commentCount: 0,
      createdAt: Date.now(),
    })
    return ref.id
  }, [canUse])

  const getPosts = useCallback(async (opts?: {
    type?: string
    bookId?: number
    limitCount?: number
    lastDoc?: DocumentSnapshot
    sortBy?: 'createdAt' | 'commentCount'
  }) => {
    if (!canUse || !db) return { posts: [], lastDoc: null }
    const constraints: QueryConstraint[] = []
    if (opts?.type) constraints.push(where('type', '==', opts.type))
    if (opts?.bookId) constraints.push(where('bookId', '==', opts.bookId))
    constraints.push(orderBy(opts?.sortBy || 'createdAt', 'desc'))
    constraints.push(limit(opts?.limitCount || 20))
    if (opts?.lastDoc) constraints.push(startAfter(opts.lastDoc))
    const q = query(collection(db, 'posts'), ...constraints)
    const snap = await getDocs(q)
    const posts = snap.docs.map(d => ({ id: d.id, ...d.data() } as Post))
    const last = snap.docs[snap.docs.length - 1] || null
    return { posts, lastDoc: last }
  }, [canUse])

  const getPost = useCallback(async (postId: string) => {
    if (!canUse || !db) return null
    const snap = await getDoc(doc(db, 'posts', postId))
    return snap.exists() ? { id: snap.id, ...snap.data() } as Post : null
  }, [canUse])

  const toggleLike = useCallback(async (postId: string, userId: string) => {
    if (!canUse || !db) return
    const ref = doc(db, 'posts', postId)
    const snap = await getDoc(ref)
    if (!snap.exists()) return
    const data = snap.data() as Post
    if (data.likes.includes(userId)) {
      await updateDoc(ref, { likes: arrayRemove(userId) })
    } else {
      await updateDoc(ref, { likes: arrayUnion(userId) })
    }
  }, [canUse])

  const addComment = useCallback(async (postId: string, comment: Omit<Comment, 'id' | 'likes' | 'createdAt'>) => {
    if (!canUse || !db) throw new Error('Firebase 未配置')
    const ref = await addDoc(collection(db, 'posts', postId, 'comments'), {
      ...comment,
      likes: [],
      createdAt: Date.now(),
    })
    await updateDoc(doc(db, 'posts', postId), { commentCount: increment(1) })
    return ref.id
  }, [canUse])

  const getComments = useCallback(async (postId: string) => {
    if (!canUse || !db) return []
    const q = query(collection(db, 'posts', postId, 'comments'), orderBy('createdAt', 'asc'))
    const snap = await getDocs(q)
    return snap.docs.map(d => ({ id: d.id, ...d.data() } as Comment))
  }, [canUse])

  const toggleCommentLike = useCallback(async (postId: string, commentId: string, userId: string) => {
    if (!canUse || !db) return
    const ref = doc(db, 'posts', postId, 'comments', commentId)
    const snap = await getDoc(ref)
    if (!snap.exists()) return
    const data = snap.data() as Comment
    if (data.likes.includes(userId)) {
      await updateDoc(ref, { likes: arrayRemove(userId) })
    } else {
      await updateDoc(ref, { likes: arrayUnion(userId) })
    }
  }, [canUse])

  const deletePost = useCallback(async (postId: string) => {
    if (!canUse || !db) return
    await deleteDoc(doc(db, 'posts', postId))
  }, [canUse])

  const getUserPosts = useCallback(async (userId: string) => {
    if (!canUse || !db) return []
    const q = query(collection(db, 'posts'), where('userId', '==', userId), orderBy('createdAt', 'desc'))
    const snap = await getDocs(q)
    return snap.docs.map(d => ({ id: d.id, ...d.data() } as Post))
  }, [canUse])

  return {
    canUse,
    createPost,
    getPosts,
    getPost,
    toggleLike,
    addComment,
    getComments,
    toggleCommentLike,
    deletePost,
    getUserPosts,
  }
}
