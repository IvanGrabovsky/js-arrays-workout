import { describe, it, expect } from 'vitest';
import { browserHistoryNavigation } from '../src/browserHistoryNavigation.js';

describe('4.9: browserHistoryNavigation', () => {
  it('test 1', () => {
    const fn = browserHistoryNavigation;
    const res = browserHistoryNavigation("home.com", [{ type: "visit", url: "blog.com" }, { type: "visit", url: "post1.com" }, { type: "back" }]);
    expect(res).toEqual({"current":"blog.com","backCount":1,"forwardCount":1});
  });
  it('test 2', () => {
    const fn = browserHistoryNavigation;
    const res = browserHistoryNavigation("home.com", [{ type: "back" }]);
    expect(res).toEqual({"current":"home.com","backCount":0,"forwardCount":0});
  });
});
