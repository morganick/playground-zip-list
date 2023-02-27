export type ZipListData<T> = {
  prevItems: T[];
  currItem: T;
  nextItems: T[];
}

export class ZipList {
  static create<T>(list: T[], curr?: T) : ZipListData<T> {
    let currIndex = curr ? list.indexOf(curr) : -1;
    if (currIndex >= 0) {
      return {
        prevItems: list.slice(0, currIndex),
        currItem: list[currIndex],
        nextItems: list.slice(currIndex + 1)
      }
    } else {
      let [first, ...rest] = list;
      return {
        prevItems: [],
        currItem: first,
        nextItems: rest
      }
    }
  }

  static getPrev<T>(listData: ZipListData<T>) : T | undefined {
    return listData.prevItems.at(-1);
  }

  static prev<T>(listData: ZipListData<T>) : ZipListData<T> {
    if(listData.prevItems.length > 0) {
      return {
        prevItems: listData.prevItems.slice(0, -1),
        currItem: listData.prevItems[listData.prevItems.length - 1],
        nextItems: [listData.currItem, ...listData.nextItems]
      }
    } else {
      return listData;
    }
  }

  static getCurr<T>(listData: ZipListData<T>) : T {
    return listData.currItem;
  }

  // setCurr(item: T) : void {
  //   if (this.currItem === undefined) { return }

  //   let oldCurr = this.currItem;
  //   let prevIndex = this.prevItems.indexOf(item);

  //   if (prevIndex === 0) {
  //     this.currItem = this.prevItems.shift();
  //     this.nextItems = [...this.prevItems, oldCurr, ...this.nextItems]
  //     this.prevItems = []

  //     return;
  //   } else if (prevIndex > 0) {
  //     this.currItem = this.prevItems[prevIndex];
  //     this.nextItems = [...this.prevItems.slice(prevIndex + 1), oldCurr, ...this.nextItems];

  //     return;
  //   }

  //   let nextIndex = this.nextItems.indexOf(item);
  //   if(nextIndex === 0) {
  //     [this.currItem, ...this.nextItems] = this.nextItems;
  //     this.prevItems.push(oldCurr);

  //     return;
  //   } else if(nextIndex > 0) {
  //     this.prevItems = [
  //       ...this.prevItems, oldCurr, ...this.nextItems.slice(0, nextIndex)
  //     ];
  //     this.currItem = this.nextItems[nextIndex];
  //     this.nextItems = this.nextItems.slice(nextIndex + 1);
  //   }
  // }

  static getNext<T>(listData: ZipListData<T>) : T | undefined {
    return listData.nextItems[0];
  }

  static next<T>(listData: ZipListData<T>) : ZipListData<T> {
    if(listData.nextItems.length > 0) {
      return {
        prevItems: [...listData.prevItems, listData.currItem],
        currItem: listData.nextItems[0],
        nextItems: [...listData.nextItems.slice(1)]
      }
    } else {
      return listData;
    }
  }


  static toList<T>(listData: ZipListData<T>) : T[] {
    return [...listData.prevItems, listData.currItem, ...listData.nextItems];
  }
}