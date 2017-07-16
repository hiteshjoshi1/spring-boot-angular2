export interface GitHubUser {
    userHandle: string;
    userAvatar: string;
    followers ?: Followers[];
}

export interface Followers {
    followerHandle: string;
    followerAvatar: string;
}