import { Message, ResponseFn } from '@extension';

export function SendMessage<R>(tab: chrome.tabs.Tab, message: Message, response: ResponseFn<R>) {
  if (tab.id) {
    chrome.tabs.sendMessage(tab.id, message, response);
  }
}

export function SendMessageRuntime<R>(message: Message, response: ResponseFn<R>) {
  chrome.runtime.sendMessage(message, response);
}
