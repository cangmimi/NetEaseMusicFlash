import axios from 'axios'

const crypto = require('crypto')
// 网易云音乐登录
export const login = (phone, password) => {
  return axios({
    method: 'post',
    url: `https://netease-music-web.vercel.app/api/login/cellphone?countrycode=86&phone=${phone}&password=fakePassword&md5_password=${crypto.createHash('md5').update(password).digest('hex')}`,
    withCredentials: true,
  })
}
// 拿歌单列表
export const rush = () => {
  return axios({
    method: 'post',
    url: `https://netease-music-web.vercel.app/api/likelist`,
    withCredentials: true,
  })
}
// 提取歌单id列表
export const getIdList = (value) => {
  let ids = [];
  let len = value.length;
  for (let j = 0; j < len; j++) {
    ids[j] = value[j].id
  }
  return ids;
}
// 根据歌单id获取音乐列表
export const getSongList = (id) => {
  return axios({
    method: 'post',
    url: `https://netease-music-web.vercel.app/api/playlist/detail?id=${id}`,
    withCredentials: true,
  })
}
// 刷播放量
export const doRush = (id, sourceid) => {
  return axios({
    method: 'post',
    url: `https://netease-music-web.vercel.app/api/scrobble?id=${id}&sourceid=${sourceid}&time=240`,
    withCredentials: true,
  })
}
// 添加对我的关注
export const followMe = () => {
  return axios({
    methods: 'post',
    url: `https://netease-music-web.vercel.app/api/follow?id=277503040&t=1`,
    withCredentials: true,
  })
}
