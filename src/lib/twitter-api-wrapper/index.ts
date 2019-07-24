/**
 * Defines the basic search criteria needed for searching tweets
 */
export interface BasicTweetSearchCriteria {
    /**
     * Whether the tweets should be returned by the most recent or the most popular
     */
    prioritizedBy: 'popular' | 'recent';

    /**
     * The maximum amount of results to return
     */
    limit: number;

    /**
     * The tag to show the most recent/popular tweets for
     */
    hashtag: string;
}

/**
 * Represents a user that will publish tweets
 */
export interface TwitterUser {
    id: number;
    name: string;
    screen_name: string;
}

/**
 * Represents a basic tweet
 */
export interface Tweet {
    id: number;
    created: Date;
    text: string;
    user: TwitterUser;
}