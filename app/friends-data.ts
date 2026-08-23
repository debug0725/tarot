export type FriendProfile = {
  id: string;
  name: string;
  mbti?: string;
  song?: string;
  movie?: string;
  message?: string;
  image?: string;
  color: string;
};

// 값이 없는 선택 항목은 작성하지 않아도 결과 화면에 표시되지 않습니다.
export const friends: FriendProfile[] = [
  { id: "friend-a", name: "엄성현", mbti: "ENTJ", song: "Cmnd 404Girl", movie: "어메이징 스파이더맨 2", message: "부끄러워", color: "#1c1c1c" },
  { id: "friend-b", name: "안건호", mbti: "INTJ", song: "다이나믹 듀오 불꽃놀이", message: "나는 감정 없는 사이코라서 그런가 이런 노래 들으면 미동도 안 함 오히려 침착해진달까? 이 정도는 껌이지 ㅋㅋ 나는 비트 없는 멜론 탑 100 나는 내가 빛나는 지성 김미연인 줄 알았어요 한 번도 의심한 적 없었죠 수만 번을 들은 사이코패스인데 ㅋㅋ 이런 노래를 들으면서 나는 웃음도 안 짓지 후훗", color: "#ebeb93" },
  { id: "friend-c", name: "엄성현", mbti: "INFJ", message: "오빠만 믿어", color: "#cccccc" },
  { id: "friend-d", name: "모카", mbti: "ENTP", song: "MASS OF THE FERMENTING DREGS 青い、濃い、橙色の日", message: "후훗", color: "#f0d0d0" },
  { id: "friend-e", name: "김주훈", mbti: "INTP", song: "MAY 기적", message: "기적은 희망일까 절망일까", color: "#e1ebee" },
  { id: "friend-f", name: "엄성현", mbti: "INTP", message: "파이팅", color: "#565656" },
  { id: "friend-g", name: "안건호", song: "신해경 명왕성", message: "여름을 까닭으로", color: "#4b758f" },
  { id: "friend-h", name: "이원희", mbti: "_SFP", song: "우예린 토끼", message: "항상 건강하세요!", color: "#fae0e0" },
  { id: "friend-i", name: "최지우", mbti: "INTP", song: "SUMIN +82", message: "서울은 여전히 서울이고 일기 밴드도 여전히 그대로야 너는 여전히 너야?", color: "#e8e7f2" },
  { id: "friend-j", name: "코모", mbti: "ISFP", song: "오란고교 사교클럽 엔딩 질주", message: "멘트 리비도 수준 괜찮을까요?", color: "#afb5c0" },
  { id: "friend-k", name: "엄성현", mbti: "INFP", song: "고스트 타운 디제이스 My Boo(Hitman's Club Mix)", message: "다 죽자", color: "#e2d0c4" },
  { id: "friend-l", name: "엄성현", mbti: "INFP", song: "くるり 琥珀色の街、上海蟹の朝", message: "노래 후기 좀", color: "#c4e2d5" },
  { id: "friend-m", name: "안건호", mbti: "IS__", song: "Annabel Jones Asking For A Friend", message: "너뿐 남자 만나 봐", color: "#d9cedd" },
  { id: "friend-n", name: "송은석", mbti: "ESTP", song: "Soombee 이미뱉어버린말들엔지우개가없었어", message: "재미있게 오늘 하루 보내고 돈은 허튼 데 써", color: "#af5555" },
  { id: "friend-o", name: "엄성현", mbti: "ENTJ", song: "골짜기 shinjihang", message: "얘 덕분에 살아지는 중", color: "#aa0808" },
  { id: "friend-v", name: "안건호", mbti: "ISFJ", song: "박소은 윤리와 사상", message: "우울을 핥는 방법", color: "#b9e3af" },
];

export function matchFriend(seed: string) {
  let hash = 0;
  for (let index = 0; index < seed.length; index += 1) {
    hash = (hash * 31 + seed.charCodeAt(index)) >>> 0;
  }
  return friends[hash % friends.length];
}
