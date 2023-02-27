import { describe, expect, it } from 'vitest';
import { ZipList } from '../src/ZipList';

const array = [1, 2, 3];

describe.concurrent('ZipList', () => {
  describe('create()', () => {
    it('Initializes the list', () => {
      const listData = ZipList.create(array);

      expect(ZipList.getPrev(listData)).toEqual(undefined);
      expect(ZipList.getCurr(listData)).toEqual(1);
      expect(ZipList.getNext(listData)).toEqual(2);
    })

    it('Initializes the list with curr', () => {
      const listData = ZipList.create(array, 2);

      expect(ZipList.getPrev(listData)).toEqual(1);
      expect(ZipList.getCurr(listData)).toEqual(2);
      expect(ZipList.getNext(listData)).toEqual(3);
    })
  })

  // describe('setCurr()', () => {
  //   it('Sets currItem to passed in item', () => {
  //     const list = new ZipList(array);

  //     list.setCurr(2);

  //     expect(list.getPrev()).toEqual(1);
  //     expect(list.getCurr()).toEqual(2);
  //     expect(list.getNext()).toEqual(3);
  //   })

  //   it('when new curr is at the beginning it sets currItem to passed in item', () => {
  //     const list = new ZipList(array);

  //     list.setCurr(array[0]);

  //     expect(list.getPrev()).toEqual(undefined);
  //     expect(list.getCurr()).toEqual(1);
  //     expect(list.getNext()).toEqual(2);
  //   })

  //   it('when new curr is at the end it sets currItem to passed in item', () => {
  //     const list = new ZipList(array);

  //     list.setCurr(array[array.length - 1]);

  //     expect(list.getPrev()).toEqual(2);
  //     expect(list.getCurr()).toEqual(3);
  //     expect(list.getNext()).toEqual(undefined);
  //   })

  //   it('No-op when list is empty', () => {
  //     const list = new ZipList([]);

  //     list.setCurr(2);

  //     expect(list.getPrev()).toEqual(undefined);
  //     expect(list.getCurr()).toEqual(undefined);
  //     expect(list.getNext()).toEqual(undefined);
  //   })

  //   it('No-op when curr is current item', () => {
  //     const list = new ZipList([1]);

  //     list.setCurr(1);

  //     expect(list.getPrev()).toEqual(undefined);
  //     expect(list.getCurr()).toEqual(1);
  //     expect(list.getNext()).toEqual(undefined);
  //   })
  // })

  describe('prev()', () => {
    it('Moves currItem to the previous element in the list', () => {
      const initialListData = ZipList.create(array, 1);
      const listData = ZipList.prev(initialListData);

      expect(ZipList.getPrev(listData)).toEqual(undefined);
      expect(ZipList.getCurr(listData)).toEqual(1);
      expect(ZipList.getNext(listData)).toEqual(2);
    })

    it('No-op when at beginning of list', () => {
      const initialListData = ZipList.create(array, 1);
      const listData = ZipList.prev(initialListData);

      expect(ZipList.getPrev(listData)).toEqual(undefined)
      expect(ZipList.getCurr(listData)).toEqual(1);
      expect(ZipList.getNext(listData)).toEqual(2);
    })
  })

  describe('next()', () => {
    it('Moves currItem to the next element in the list', () => {
      const initialListData = ZipList.create(array, 1);
      const listData = ZipList.next(initialListData);

      expect(ZipList.getPrev(listData)).toEqual(1);
      expect(ZipList.getCurr(listData)).toEqual(2);
      expect(ZipList.getNext(listData)).toEqual(3);
    })

    it('No-op when at end of list', () => {
      const initialListData = ZipList.create(array, array[array.length - 1]);
      const listData = ZipList.next(initialListData);

      expect(ZipList.getPrev(listData)).toEqual(2);
      expect(ZipList.getCurr(listData)).toEqual(3);
      expect(ZipList.getNext(listData)).toEqual(undefined);
    })
  })

  describe('toList()', () => {
    it('returns the contents of the ZipList', () => {
      const listData = ZipList.create(array);

      expect(ZipList.toList(listData)).toEqual(array);
    })
  })
})