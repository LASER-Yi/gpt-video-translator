import { Message, ResponseFn } from '@extension';
import { useEffect, useRef } from 'react';

type TabCallback = (tabs: chrome.tabs.Tab[]) => void;

export function useCurrentActiveTab(fn: TabCallback) {
  const fnRef = useRef(fn);
  fnRef.current = fn;

  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, fnRef.current);
  }, []);
}

type MessageCallback<R> = (payload: Message, response: ResponseFn<R>) => void;

export function useOnMessage<R>(fn: MessageCallback<R>, type: Message['type']) {
  const fnRef = useRef(fn);
  fnRef.current = fn;

  useEffect(() => {
    const callback = (
      msg: Message,
      sender: chrome.runtime.MessageSender,
      sendResponse: ResponseFn<unknown>,
    ) => {
      if (msg.type === type) {
        fnRef.current(msg, sendResponse);
      }
    };

    chrome.runtime.onMessage.addListener(callback);

    return () => {
      chrome.runtime.onMessage.removeListener(callback);
    };
  }, [type]);
}
