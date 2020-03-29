<template>
    <div id="page-break">
        <ul>
            <li v-if="cur>1">
                <a v-on:click="cur--,pageClick()">上一页</a>
            </li>
            <li v-if="cur==1">
                <a class="banclick">上一页</a>
            </li>
            <li v-for="(item,i) in indexs"
                :key="i"
                v-bind:class="{'active':cur==item}">
                <a v-on:click="btnClick(item), pageClick()">{{item}}</a>
            </li>
            <li v-if="cur!=all">
                <a v-on:click="cur++,pageClick()">下一页</a>
            </li>
            <li v-if="cur==all">
                <a class="banclick">下一页</a>
            </li>
            <li><a>共<i>{{all}}</i>页</a></li>
            <!--<div class="jumpbox">-->
                <!--<input type="number" class="jumppage" />-->
                <!--<a class="jumpbtn" v-on:click="pageSkip()">跳转</a>-->
            <!--</div>-->
        </ul>
    </div>
</template>

<script>
    export default {
        name: "page-break",
        props:['tem_cur','all'],  //接收父组件的数据对象数据
        data() {
            return {
                cur:this.tem_cur,
            }
        },
        watch: {
            cur: function(newValue, oldValue){
              //  console.log(arguments);
            }
        },
        methods: {
            btnClick(num){
                if(num!==this.cur){
                    this.cur=num;
                }
            },
           pageClick(){
             //  console.log('现在是'+this.cur+'页')
               this.$emit('pageClick',this.cur);
           },
            pageSkip(){
                var maxPage = this.all;
                var skipPage = Number(document.getElementsByClassName("jumppage")[0].value);
                console.log(typeof skipPage);
                if(!skipPage){
                    alert("请输入跳转页码");

                }else if(skipPage<1 || skipPage>maxPage){
                    alert("您输入的页码超过页数范围了！");

                }else{
                    //this.cur=skipPage;
                    this.btnClick(skipPage);
                    this.pageClick();
                }
            }
        },
        computed: {
            indexs(){
                var left = 1;
                var right = this.all;
                var arr = [];
                if(this.all>=7){
                    if(this.cur>4 && this.cur<this.all-3){
                        left = this.cur-3;
                        right = this.cur+3;
                    }else if(this.cur<=4){
                        left=1;
                        right=7;
                    }else{
                        left=this.all-6;
                        right=this.all;
                    }
                }
                while(left<=right){
                    arr.push(left);
                    left++;
                }
                return arr;
            }
        }
    }
</script>

<style >

    *{margin: 0;padding: 0;}
    #page-break{
        margin: auto;
        width: 50%;

    }
    #page-break li{list-style: none;}
    #page-break a{border: 1px solid #ddd;
        margin :2px;
        text-decoration: none;float: left;padding: 6px 12px;
        color: #337ab7;cursor: pointer;font-family: Verdana, 微软雅黑, Helvetica, sans-serif;
        font-weight: bold;border-radius: 3px;}
    #page-break a:hover{background-color: #eee;}
    #page-break a .banclick{cursor: not-allowed;}
    #page-break .active a{color: #fff;cursor: default;
        background-color: #337ab7;border-color: #337ab7;}
    #page-break i{font-style: normal;color: #d44950;margin: 0px 4px;font-size: 12px;}
    #page-break .jumpbox .jumppage {border: 1px solid #ddd; margin-left: 40px; height: 33px; width: 40px; float: left;}
    #page-break .jumpbox .jumpbtn {cursor: pointer; margin-left: 10px;}
    #page-break .jumpbox .jumpbtn:active {color: #337ab7;}

</style>
