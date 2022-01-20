export interface EpisodeType {
  content: string;
  contentSnippet: string;
  creator: string;
  enclosure: {
    length: string;
    type: string;
    url: string;
  };
  guid: string;
  isoDate: string;
  itunes: {
    duration: string;
    explicit: string;
    image: string;
    summary: string;
  };
  link: string;
  pubDate: string;
  title: string;
}
