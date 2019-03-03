<template>
  <div>
    <list-book v-bind:book="book"></list-book>
    <div id="add-book">
      <legend>添加书籍</legend>
      <div class="form-group">
        <label for>书名</label>
        <input type="text" class="form-control" v-model="bookName">
      </div>
      <div class="form-group">
        <label for>作者</label>
        <input type="text" class="form-control" v-model="bookAuthor">
      </div>
      <div class="form-group">
        <label for>价格</label>
        <input type="text" class="form-control" v-model.number="bookPrice">
      </div>
       <div class="form-group">
        <label for>数量</label>
        <input type="text" class="form-control" v-model.number="bookCount">
      </div>
      <button class="btn btn-primary btn-block" v-on:click="addBook()">添加</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      bookName: "",
      bookAuthor: "",
      bookPrice: 10,
      bookCount: 1,
      book: {},
      size: 0
    };
  },
  methods: {
    //函数名作key,函数体作为value
    addBook() {
       this.book = {
        id:  5,
        author: this.bookAuthor,
        name: this.bookName,
        price: this.bookPrice,
        count: this.bookCount
      }
      console.log(JSON.stringify(this.book));
    }

    
  },
  
};
</script>