// Application constants

export const APP_NAME = 'Global Tech Hub'
export const APP_DESCRIPTION = 'پلتفرم شبکه‌سازی و تبادل دانش برای متخصصان تکنولوژی'

// Post types
export const POST_TYPES = {
  QUESTION: 'QUESTION',
  EXPERIENCE: 'EXPERIENCE',
  DISCUSSION: 'DISCUSSION',
  TUTORIAL: 'TUTORIAL',
} as const

// User roles
export const USER_ROLES = {
  USER: 'USER',
  EXPERT: 'EXPERT',
  ADMIN: 'ADMIN',
} as const

// Subscription plans
export const SUBSCRIPTION_PLANS = {
  FREE: 'FREE',
  PRO: 'PRO',
  EXPERT: 'EXPERT',
} as const

// Club categories
export const CLUB_CATEGORIES = [
  'Frontend',
  'Backend',
  'Mobile',
  'DevOps',
  'AI/ML',
  'Security',
  'Blockchain',
  'Design',
  'Data Science',
  'Cloud Computing',
  'Game Development',
  'Other',
] as const

// Popular tech subreddits for Reddit integration
export const POPULAR_TECH_SUBREDDITS = [
  'programming',
  'webdev',
  'javascript',
  'reactjs',
  'node',
  'Python',
  'java',
  'golang',
  'rust',
  'devops',
  'MachineLearning',
  'web_design',
] as const

// Pagination
export const DEFAULT_PAGE_SIZE = 20
export const MAX_PAGE_SIZE = 100

// Reputation points
export const REPUTATION_POINTS = {
  POST_CREATED: 5,
  POST_UPVOTED: 2,
  COMMENT_CREATED: 3,
  COMMENT_UPVOTED: 1,
  ANSWER_ACCEPTED: 10,
} as const

// Content limits
export const CONTENT_LIMITS = {
  POST_TITLE_MAX: 200,
  POST_CONTENT_MAX: 10000,
  COMMENT_MAX: 5000,
  BIO_MAX: 500,
  USERNAME_MIN: 3,
  USERNAME_MAX: 20,
} as const

