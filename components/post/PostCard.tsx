'use client'

import Link from 'next/link'
import { formatDistanceToNow } from 'date-fns'
import { faIR as fa } from 'date-fns/locale'
import { ArrowUp, ArrowDown, MessageCircle, Bookmark, Globe } from 'lucide-react'
import type { Post as PostType } from '@prisma/client'

interface PostCardProps {
  post: PostType & {
    author: {
      id: string
      name: string
      username: string
      avatar: string | null
    }
    tags: Array<{ tag: { id: string; name: string; slug: string } }>
    _count: {
      comments: number
      votes: number
    }
  }
}

export function PostCard({ post }: PostCardProps) {
  const score = post.upvotes - post.downvotes
  const isTranslated = post.isTranslated

  return (
    <article className="glass-effect rounded-xl border border-dark-border p-6 hover:border-primary-500/50 transition-all">
      <div className="flex gap-4">
        {/* Voting */}
        <div className="flex flex-col items-center gap-2">
          <button className="p-2 rounded-lg hover:bg-dark-surface transition-colors">
            <ArrowUp className="w-5 h-5 text-dark-muted hover:text-green-400" />
          </button>
          <span className="font-bold text-lg">{score}</span>
          <button className="p-2 rounded-lg hover:bg-dark-surface transition-colors">
            <ArrowDown className="w-5 h-5 text-dark-muted hover:text-red-400" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 space-y-3">
          {/* Header */}
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                {isTranslated && (
                  <span className="px-2 py-1 text-xs bg-primary-500/20 text-primary-400 rounded flex items-center gap-1">
                    <Globe className="w-3 h-3" />
                    ترجمه شده
                  </span>
                )}
                {post.clubId && (
                  <Link href={`/clubs/${post.clubId}`} className="text-sm text-primary-400 hover:underline">
                    کلاب
                  </Link>
                )}
              </div>
              <Link href={`/posts/${post.id}`}>
                <h2 className="text-xl font-bold hover:text-primary-400 transition-colors">
                  {post.title}
                </h2>
              </Link>
            </div>
          </div>

          {/* Preview */}
          <p className="text-dark-muted line-clamp-3">{post.content}</p>

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {post.tags.map(({ tag }) => (
                <Link
                  key={tag.id}
                  href={`/tags/${tag.slug}`}
                  className="px-3 py-1 text-sm bg-dark-surface rounded-full hover:bg-dark-border transition-colors"
                >
                  #{tag.name}
                </Link>
              ))}
            </div>
          )}

          {/* Footer */}
          <div className="flex items-center justify-between pt-2 border-t border-dark-border">
            <div className="flex items-center gap-4 text-sm text-dark-muted">
              <Link href={`/users/${post.author.username}`} className="flex items-center gap-2 hover:text-primary-400">
                <div className="w-6 h-6 bg-neon-gradient rounded-full" />
                <span>{post.author.name}</span>
              </Link>
              <span>•</span>
              <span>{formatDistanceToNow(new Date(post.createdAt), { addSuffix: true, locale: fa })}</span>
            </div>

            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 px-3 py-1 rounded-lg hover:bg-dark-surface transition-colors">
                <MessageCircle className="w-4 h-4" />
                <span>{post._count.comments}</span>
              </button>
              <button className="p-2 rounded-lg hover:bg-dark-surface transition-colors">
                <Bookmark className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

