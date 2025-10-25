import type { IUserDetail, IUserFollow } from '@/types/user';
import request from '@/utils/request';

// /user/detail
export function getUserDetail(uid: number) {
  return request.get('/user/detail', { params: { uid } });
}

// /user/playlist
export function getUserPlaylist(uid: number, limit: number = 30, offset: number = 0) {
  return request.get('/user/playlist', { params: { uid, limit, offset } });
}

// 播放历史
// /user/record?uid=32953014&type=1
export function getUserRecord(uid: number, type: number = 0) {
  return request.get('/user/record', {
    params: { uid, type },
    noRetry: true
  } as any);
}

// 最近播放-歌曲
// /record/recent/song
export function getRecentSongs(limit: number = 100) {
  return request.get('/record/recent/song', {
    params: { limit },
    noRetry: true
  } as any);
}

// 最近播放-歌单
// /record/recent/playlist
export function getRecentPlaylists(limit: number = 100) {
  return request.get('/record/recent/playlist', {
    params: { limit },
    noRetry: true
  } as any);
}

// 最近播放-专辑
// /record/recent/album
export function getRecentAlbums(limit: number = 100) {
  return request.get('/record/recent/album', {
    params: { limit },
    noRetry: true
  } as any);
}

// 获取用户关注列表
// /user/follows?uid=32953014
export function getUserFollows(uid: number, limit: number = 30, offset: number = 0) {
  return request.get('/user/follows', { params: { uid, limit, offset } });
}

// 获取用户粉丝列表
export function getUserFollowers(uid: number, limit: number = 30, offset: number = 0) {
  return request.post('/user/followeds', { uid, limit, offset });
}

// 获取用户账号信息
export const getUserAccount = () => {
  return request<any>({
    url: '/user/account',
    method: 'get'
  });
};

// 获取用户详情
export const getUserDetailInfo = (params: { uid: string | number }) => {
  return request<IUserDetail>({
    url: '/user/detail',
    method: 'get',
    params
  });
};

// 获取用户关注列表
export const getUserFollowsInfo = (params: {
  uid: string | number;
  limit?: number;
  offset?: number;
}) => {
  return request<{
    follow: IUserFollow[];
    more: boolean;
  }>({
    url: '/user/follows',
    method: 'get',
    params
  });
};

// 获取用户歌单
export const getUserPlaylists = (params: { uid: string | number }) => {
  return request({
    url: '/user/playlist',
    method: 'get',
    params
  });
};

// 获取已收藏专辑列表
export const getUserAlbumSublist = (params?: { limit?: number; offset?: number }) => {
  return request({
    url: '/album/sublist',
    method: 'get',
    params: {
      limit: params?.limit || 25,
      offset: params?.offset || 0
    }
  });
};
