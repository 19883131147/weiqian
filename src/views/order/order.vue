<template>
  <div>
    <div class="shopp">
      <span>订单管理</span>
    </div>
    <p></p>
    <el-form :inline="true" :model="search" class="demo-form-inline">
      <el-form-item label="">
        <el-select v-model="search.status" placeholder="请输入查询规格">
          <el-option label="按订单号查询" :value="0"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="">
        <el-input v-model="search.name" placeholder="订单号"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>

    <el-table :data="list" style="width: 100%">
      <el-table-column prop="orderNo" label="订单号" width="180">
      </el-table-column>
      <el-table-column prop="receiverName" label="收件人" width="150">
      </el-table-column>
      <el-table-column prop="statusDesc" label="订单状态" width="150">
      </el-table-column>
      <el-table-column prop="payment" label="订单总价" width="180">
      </el-table-column>
      <el-table-column prop="createTime" label="创建时间" width="180">
      </el-table-column>
      <el-table-column prop="" label="操作">
        <template slot-scope="scope">
          <el-button type="text" @click="detail(scope.row.orderNo)">查看</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
      @current-change="handleCurrentChange"
      :current-page="pageNum"
      :page-size="pageSize"
      :total="total"
    >
    </el-pagination>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [],
      total: 0,
      pageNum: 1,
      pageSize: 10,
      search: {
        name: "",
        status: 0,
      },
    };
  },

  mounted() {
    this.$API.ORDER().then((res) => {
      console.log(res);
      this.list = res.data.data.list;
      this.total = res.data.data.total;
    });
  },

  methods: {
    handleCurrentChange(val) {
      console.log(val);
      this.$API.ORDER(val).then((res) => {
        console.log(res);
        this.list = res.data.data.list;
        this.total = res.data.data.total;
      });
    },

    onSubmit() {
      if (this.search.name.length == 0) {
        this.$API.ORDER(this.page).then((res) => {
          // console.log(res);
          this.list = res.data;
        });
        return;
      }
      this.$API.order_search(this.search.name).then((res) => {
        console.log(res);
        if (res.status == 1) {
          this.$message(res.msg);
          return;
        }
        this.list = res.data;
      });
    },

    // 查看
    detail(id) {
      this.$router.push({ path: "/order_detail", query: { id } });
    },
  },
};
</script>
<style lang="scss" scoped>
.shopp {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
  font-size: 30px;
}
</style>
