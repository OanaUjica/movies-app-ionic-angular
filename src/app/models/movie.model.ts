/* eslint-disable @typescript-eslint/naming-convention */
export class Movie {
  id: number;
  title: string;
  description: string;
  director: string;
  durationInMinutes: number;
  genre: MovieGenre;
  yearOfRelease: number;
  dateAdded: Date;
  rating: number;
  watched: boolean;
}

export enum MovieGenre {
  Action,
  Comedy,
  Horror,
  Thriller,
}

export const MOVIE_TYPES = ['Action', 'Comedy', 'Horror', 'Thriller'];
