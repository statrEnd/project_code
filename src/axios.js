import axios from 'axios';
import { createApp } from 'vue';
const app = createApp();

const api = axios.create({
    baseURL: 'http://127.0.0.1:5000', // 根据你的接口地址进行设置
    timeout: 5000, // 设置请求超时时间
});

app.config.globalProperties.$axios = api;