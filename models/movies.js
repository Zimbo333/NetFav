class Movies {
  constructor(
    id,
    name,
    description,
    season,
    episode,
    coverImgUrl,
    comments,
    numOfFinished,
    numOfInprogress
  ) 
  {
    this.id = id;
    this.name = name;
    this.description = description;
    this.season = season;
    this.episode = episode;
    this.coverImgUrl = coverImgUrl;
    this.comments = comments;
    this.numOfFinished = numOfFinished;
    this.numOfInprogress = numOfInprogress;
  }
}

export default Movies;
