class PaginationHelper {
  constructor(collection, itemsPerPage) {
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
  }

  itemCount() {
    return this.collection.length;
  }

  pageCount() {
    const count = Math.ceil(this.itemCount() / this.itemsPerPage);
    return count;
  }

  pageItemCount(pageIndex) {
    const totalPages = this.pageCount();
    if (pageIndex < 0 || pageIndex >= totalPages) {
      return -1;
    }
    if (pageIndex === totalPages - 1) {
      return this.itemCount() % this.itemsPerPage || this.itemsPerPage;
    }
    return this.itemsPerPage;
  }

  pageIndex(itemIndex) {
    if (itemIndex < 0 || itemIndex >= this.itemCount()) {
      return -1;
    }
    return Math.floor(itemIndex / this.itemsPerPage);
  }
}

let abc = new PaginationHelper(["a", "b", "c", "d", "e", "f"], 4);
console.log(abc);
