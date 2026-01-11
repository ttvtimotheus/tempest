export interface SocialStat {
  platform: string
  icon: React.ReactNode
  members: string
  label: string
  link: string
  color: string
}

export interface CommunityFeature {
  icon: React.ReactNode
  title: string
  description: string
  link: string
}

export interface SocialPost {
  platform: string
  content: string
  image: string
  likes: string
  time: string
}

export interface NewsletterFormData {
  email: string
}
