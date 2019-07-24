/**
 * Defines the basic search criteria needed for searching tweets
 */
export interface BasicTweetSearchCriteria {
    /**
     * Whether the tweets should be returned by the most recent or the most popular
     */
    prioritizedBy: 'popular' | 'recent' | 'mixed';

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
    hashtags: string[];
}

const userCoffeeAddict: TwitterUser = {
    id: 334, name: 'Joe', screen_name: 'CoffeeAddict'
};

const userRandomRando: TwitterUser = {
    id: 34234, name: 'Tom', screen_name: 'RandomRando'
};

const userFooBar: TwitterUser = {
    id: 663, name: 'Sally', screen_name: 'FooBar'
};

const hashtagHello: string = 'hello';
const hashtagFoo: string = 'foo';
const hashtagBar: string = 'bar';

const testingTweets: Tweet[] = [{
    id: 1,
    created: new Date(1343098914000),
    text: 'Hello, I am a tweet',
    user: userCoffeeAddict,
    hashtags: [hashtagHello, hashtagFoo]
}, {
    id: 2,
    created: new Date(1411527714000),
    text: 'This is a random tweet',
    user: userRandomRando,
    hashtags: [hashtagHello, hashtagFoo, hashtagBar]
}, {
    id: 3,
    created: new Date(1420340514000),
    text: 'What is your name?',
    user: userFooBar,
    hashtags: [hashtagFoo]
}, {
    id: 4,
    created: new Date(1420599714000),
    text: 'Hello, I am another tweet',
    user: userCoffeeAddict,
    hashtags: [hashtagHello]
}, {
    id: 5,
    created: new Date(1438570914000),
    text: 'Well well well',
    user: userFooBar,
    hashtags: [hashtagBar, hashtagFoo]
}];

export class TwitterApi {

    public static searchTweets(searchCriteria: BasicTweetSearchCriteria): Promise<Tweet[]> {
        return new Promise((resolve) => {
            resolve(
                testingTweets.filter((tweet: Tweet) => {
                    tweet.hashtags.includes(searchCriteria.hashtag);
                }).slice(0, searchCriteria.limit)
            );
        });
    }

}