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