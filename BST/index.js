class BST {
  constructor(value) {
    this.root = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    value <= this.root ? this._toLeft(value) : this._toRight(value);
  }

  _toLeft(value) {
    this.left ? this.left.insert(value) : (this.left = new BST(value));
  }

  _toRight(value) {
    this.right ? this.right.insert(value) : (this.right = new BST(value));
  }

  contains(value) {
    if (this.root === value) return this;
    return value <= this.root ? this._findLeft(value) : this._findRight(value);
  }

  _findLeft(value) {
    return this.left ? this.left.contains(value) : null;
  }

  _findRight(value) {
    return this.right ? this.right.contains(value) : null;
  }

  preOrder() {
    const result = [this.root];
    this.left && result.push(...this.left.preOrder());
    this.right && result.push(...this.right.preOrder());
    return result;
  }

  inOrder() {
    const result = [];
    this.left && result.push(...this.left.inOrder());
    result.push(this.root);
    this.right && result.push(...this.right.inOrder());
    return result;
  }

  postOrder() {
    const result = [];
    this.left && result.push(...this.left.postOrder());
    this.right && result.push(...this.right.postOrder());
    result.push(this.root);
    return result;
  }
}
