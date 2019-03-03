<template>
  <div>
    <div id="list-book">
      <table class="table table-bordered table-hover">
        <caption>书箱列表信息</caption>
        <thead>
          <tr>
            <th>序号</th>
            <th>名称</th>
            <th>作者</th>
            <th>价格</th>
            <th>数量</th>
            <th>操作</th>
          </tr>
          <tr
            v-for="(item,index) in books"
            :key="index"
            :class="{'1':'red','2':'green','3':'blue','4':'yellow'}[item.id]"
          >
            <td>{{item.id}}</td>
            <td>{{item.name}}</td>
            <td>{{item.author}}</td>
            <td>
              
              <input v-model.number="item.price" type="number" style="width:50px">
            </td>

            <td v-if="item.count === 0">
              <span :class="['red']">此书已售完</span>
            </td>
            <td v-else>
              <input v-model.number="item.count" type="number" style="width:50px">
            </td>

            <td>
              <button @click="del(index)">删除</button>
            </td>
          </tr>
        </thead>
        总价格：￥{{totalPrice}}
      </table>
    </div>
  </div>
</template>
<script>
export default {

  props:['book'],
  data() {
    return {
      book: this.book,
      books: [
        {
          id: 1,
          author: "曹雪芹",
          name: "红楼梦",
          price: 32.0,
          count: 1
        },
        {
          id: 2,
          author: "施耐庵",
          name: "水浒传",
          price: 30.0,
          count: 2
        },
        {
          id: "3",
          author: "罗贯中",
          name: "三国演义",
          price: 24.0,
          count: 1
        },
        {
          id: 4,
          author: "吴承恩",
          name: "西游记",
          price: 20.0,
          count: 1
        }
      ]
    };
  },
  method: {
    del(index) {
      this.books.splice(index, 1);
    }
  },

  computed: {
    totalPrice() {
      let sum = 0;
      for (let i = 0; i < this.books.length; i++) {
        sum = sum + this.books[i].price * this.books[i].count;
      }
      return sum;
      
    }
  },
  watch:{
    book:function(){
      this.books.push(this.book);
     
    }
  }
};
</script>