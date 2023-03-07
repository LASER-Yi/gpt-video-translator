declare module '@extension' {
  interface Message {
    type: 'query-video-count';
  }

  interface Response<T> {
    payload: T;
  }

  type ResponseFn<T> = (response: Response<T>) => void;
}
