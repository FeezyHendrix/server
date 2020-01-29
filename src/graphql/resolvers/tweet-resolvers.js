import Tweet from '../../model/Tweet';

export default {
  getTweets: () => Tweet.find({})
}