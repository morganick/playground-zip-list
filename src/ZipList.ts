export class ZipList<T> {
  private prevItems: T[] = [];
  private currItem: T | undefined = undefined;
  private nextItems: T[] = [];
  
  constructor(list: T[], curr?: T) {
    if(curr) {
      let currIndex = list.indexOf(curr);

      if (currIndex >= 0) {
        this.prevItems = list.slice(0, currIndex);
        this.currItem = list[currIndex];
        this.nextItems = list.slice(currIndex + 1);
      }
    } else {
      let [first, ...rest] = list;
      this.currItem = first;
      this.nextItems = rest;
    }
  }

  getPrev() : T | undefined {
    return this.prevItems.at(-1);
  }

  prev() : void {
    if(this.currItem === undefined) { return }

    if(this.prevItems.length > 0) {
      this.nextItems.unshift(this.currItem);
      this.currItem = this.prevItems.pop();
    }
  }

  getCurr() : T | undefined {
    return this.currItem;
  }

  setCurr(item: T) : void {
    if (this.currItem === undefined) { return }

    let oldCurr = this.currItem;
    let prevIndex = this.prevItems.indexOf(item);

    if (prevIndex === 0) {
      this.currItem = this.prevItems.shift();
      this.nextItems = [...this.prevItems, oldCurr, ...this.nextItems]
      this.prevItems = []

      return;
    } else if (prevIndex > 0) {
      this.currItem = this.prevItems[prevIndex];
      this.nextItems = [...this.prevItems.slice(prevIndex + 1), oldCurr, ...this.nextItems];

      return;
    }

    let nextIndex = this.nextItems.indexOf(item);
    if(nextIndex === 0) {
      [this.currItem, ...this.nextItems] = this.nextItems;
      this.prevItems.push(oldCurr);

      return;
    } else if(nextIndex > 0) {
      this.prevItems = [
        ...this.prevItems, oldCurr, ...this.nextItems.slice(0, nextIndex)
      ];
      this.currItem = this.nextItems[nextIndex];
      this.nextItems = this.nextItems.slice(nextIndex + 1);
    }
  }

  getNext() : T | undefined {
    return this.nextItems[0];
  }

  next() : void {
    if(this.currItem === undefined) { return }

    if(this.nextItems.length > 0) {
      this.prevItems.push(this.currItem);
      this.currItem = this.nextItems.shift();
    }
  }


  toList() : T[] {
    if (this.currItem === undefined ) { return [] }

    return [...this.prevItems, this.currItem, ...this.nextItems];
  }
}