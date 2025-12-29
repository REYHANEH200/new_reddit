'use client'

import { Globe, ExternalLink } from 'lucide-react'
import Link from 'next/link'

interface RedditPost {
  id: string
  title: string
  content?: string
  author: string
  subreddit: string
  url: string
  score: number
  num_comments: number
  created_utc: number
  translated?: {
    title: string
    content: string
  }
}

interface RedditPostCardProps {
  post: RedditPost
}

export function RedditPostCard({ post }: RedditPostCardProps) {
  const hasTranslation = !!post.translated

  return (
    <article className="glass-effect rounded-xl border border-dark-border p-6 hover:border-primary-500/50 transition-all">
      <div className="space-y-4">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Link
                href={`/r/${post.subreddit}`}
                className="text-sm text-primary-400 hover:underline"
              >
                r/{post.subreddit}
              </Link>
              {hasTranslation && (
                <span className="px-2 py-1 text-xs bg-primary-500/20 text-primary-400 rounded flex items-center gap-1">
                  <Globe className="w-3 h-3" />
                  ترجمه شده
                </span>
              )}
            </div>
            <h2 className="text-xl font-bold mb-2">
              {hasTranslation ? post.translated!.title : post.title}
            </h2>
            {hasTranslation && (
              <p className="text-sm text-dark-muted italic border-r-2 border-primary-500/30 pr-3">
                {post.title}
              </p>
            )}
          </div>
          <a
            href={`https://reddit.com${post.url}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg hover:bg-dark-surface transition-colors"
          >
            <ExternalLink className="w-5 h-5 text-dark-muted" />
          </a>
        </div>

        {/* Content */}
        {post.content && (
          <div className="space-y-2">
            <p className="text-dark-muted">
              {hasTranslation ? post.translated!.content : post.content}
            </p>
            {hasTranslation && post.content && (
              <p className="text-sm text-dark-muted/70 italic border-r-2 border-primary-500/30 pr-3">
                {post.content}
              </p>
            )}
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-dark-border text-sm text-dark-muted">
          <div className="flex items-center gap-4">
            <span>u/{post.author}</span>
            <span>•</span>
            <span>{post.score} امتیاز</span>
            <span>•</span>
            <span>{post.num_comments} کامنت</span>
          </div>
          <button className="text-primary-400 hover:underline">
            مشاهده بحث
          </button>
        </div>
      </div>
    </article>
  )
}

