<template>
    <div class="bg">
        <div class="login">
            <div class="title">加入速用，感受科技的魅力</div>
            <div class="title-1">欢迎注册速用科技后台管理系统</div>
            <div class="use">用户名</div>
            <div class="ainput">
                <input type="text" placeholder="请输入用户名" v-model="companyName"  v-validate="'required|companyName'" name="companyName">
                <div style="font-size:8px;color: red">{{ errors.first('companyName') }}</div>
            </div>
            <div class="use">手机号码</div>
            <div class="ainput">
                <input type="text" placeholder="请输入手机号码" v-model="phone" v-validate="'required|phone'" name="phone">
                <div style="font-size:8px;color: red">{{ errors.first('phone') }}</div>
            </div>
            <div class="use">手机验证码</div>
            <div class="code">
                <div><input type="text" placeholder="请输入验证码" v-model="code" ></div>
                <button @click="getMsn" id="code"  :disabled="isDisable" >{{time}}</button>
            </div>
            <div style="font-size:8px;color: red;margin-left: 1.2rem" >{{ errors.first('code') }}</div>
            <div class="use" style="margin-top: 1rem" >密码</div>
            <div class="ainput">
                <input placeholder="请输入密码" v-model="password"  type="password">
            </div>
            <div class="use" >推荐码</div>
            <div class="ainput">
                <input type="text" placeholder="请输入邀请码" v-model="inviteCode">
            </div>

            <div class="sign" @click="sub()">
                注册
            </div>
        </div>
        <Alert :show="show" :tips="tips"></Alert>
    </div>
</template>

<script src="./regist.js">

</script>

<style src="./regist.scss" lang="scss" scoped=""></style>

