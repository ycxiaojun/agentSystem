<template>
    <div>
        <div  :class="isshow==1?'bg':''" @click="close">
            <div class="coll">投诉反馈</div>
            <div v-for="l in list" >
                <div class="d-1">
                    <div><img src="../../assets/imgs/c-1.png" alt=""></div>
                    <div>
                        <div class="d-2 d-3">
                            <div style="font-size: 16px;text-align:left">{{l.title}}</div>
                            <div style="color: orangered;margin-right: 2rem" >{{l.status==1?'已回复':'未回复'}}</div>
                        </div>
                    </div>
                </div>
                <div style="padding-left: 1rem;padding-right: 1rem" v-html="l.content"></div>
                <div class="date">
                    <div>日期：{{l.gtmCreate}}</div>
                    <span @click.stop="response(l.cid,l.title)">回复</span>
                </div>
                <div style="height: 4px;background-color: #eee;margin-top: 1rem;margin-bottom: 4rem" ></div>
            </div>
        </div>
        <div class="call" :style="isshow==1?'':'display:none'">
            <textarea placeholder="请输入回复内容" v-model="content"></textarea>
            <div class="sub" @click="sub">提交回复</div>
        </div>

    </div>
</template>

<script src="./feedback.js">

</script>

<style src="./feedback.scss" lang="scss" scoped=""></style>

