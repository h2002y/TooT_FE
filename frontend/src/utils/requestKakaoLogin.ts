import { REDIRECT_URI } from "./api";

/** 버튼 클릭 후 카카오 로그인 화면 이동 */
export const requestKakaoLogin = () => {
  const REST_API_KEY = "${REST_API_KEY}";
  const authUrl = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`;
  window.location.href = authUrl;
};
