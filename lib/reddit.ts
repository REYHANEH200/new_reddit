// Reddit API integration utilities
// This will be used to fetch posts from Reddit

export interface RedditPost {
  id: string
  title: string
  selftext?: string
  author: string
  subreddit: string
  url: string
  score: number
  num_comments: number
  created_utc: number
  permalink: string
}

export async function fetchRedditPosts(
  subreddit: string,
  limit: number = 10,
  sort: 'hot' | 'new' | 'top' = 'hot'
): Promise<RedditPost[]> {
  try {
    const response = await fetch(
      `https://www.reddit.com/r/${subreddit}/${sort}.json?limit=${limit}`,
      {
        headers: {
          'User-Agent': 'GlobalTechHub/1.0',
        },
      }
    )

    if (!response.ok) {
      throw new Error('Failed to fetch from Reddit')
    }

    const data = await response.json()
    const posts: RedditPost[] = data.data.children.map((child: any) => ({
      id: child.data.id,
      title: child.data.title,
      selftext: child.data.selftext,
      author: child.data.author,
      subreddit: child.data.subreddit,
      url: child.data.url,
      score: child.data.score,
      num_comments: child.data.num_comments,
      created_utc: child.data.created_utc,
      permalink: child.data.permalink,
    }))

    return posts
  } catch (error) {
    console.error('Error fetching Reddit posts:', error)
    return []
  }
}

export async function fetchMultipleSubreddits(
  subreddits: string[],
  limit: number = 5
): Promise<RedditPost[]> {
  const allPosts = await Promise.all(
    subreddits.map((subreddit) => fetchRedditPosts(subreddit, limit))
  )

  // Flatten and sort by score
  return allPosts.flat().sort((a, b) => b.score - a.score)
}

