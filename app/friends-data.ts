export type FriendProfile = {
  id: string;
  name: string;
  mbti: string;
  song: string;
  movie: string;
  message: string;
  image: string;
  color: string;
};

// 실제 친구 정보가 오면 이 배열만 바꾸면 결과 카드 전체에 반영됩니다.
export const friends: FriendProfile[] = [
  {
    id: "friend-a",
    name: "엄성현",
    mbti: "ENTJ",
    song: "Cmnd 404Girl",
    movie: "어메이징 스파이더맨 2",
    message: "부끄러워",
    image: "",
    color: "#1c1c1c",
  },
  {
    id: "friend-b",
    name: "안건호",
    mbti: "INTJ",
    song: "다이나믹 듀오 불꽃놀이",
    message: "나는 감정 없는 사이코라서 그런가 이런 노래 들으면 미동도 안 함 오히려 침착해진달까? 이 정도는 껌이지 ㅋㅋ 나는 비트 없는 멜론 탑 100 나는 내가 빛나는 지성 김미연인 줄 알았어요 한 번도 의심한 적 없었죠 수만 번을 들은 사이코패스인데 ㅋㅋ 이런 노래를 들으면서 나는 웃음도 안 짓지 후훗 ",
    image: "",
    color: "#ebeb93",
  },
  {
    id: "friend-c",
    name: "엄성현",
    mbti: "INFJ",
    message: "오빠만 믿어",
    image: "",
    color: "#cccccc",
  },
    {
    id: "friend-d",
    name: "모카",
    mbti: "ENTP",
    song: "MASS OF THE FERMENTING DREGS 青い、濃い、橙色の日",
    message: "후훗",
    image: "",
    color: "#f0d0d0",
  },
    {
    id: "friend-e",
    name: "김주훈",
    mbti: "INTP",
    song: "MAY 기적",
    message: "기적은 희망일까 절망일까",
    image: "",
    color: "#e1ebee",
  },
    {
    id: "friend-f",
    name: "엄성현",
    mbti: "INTP",
    message: "파이팅",
    image: "",
    color: "#565656",
  },
    {
    id: "friend-g",
    name: "안건호",
    song: "신해경 명왕성",
    message: "여름을 까닭으로",
    image: "",
    color: "#4b758f",
  },
    {
    id: "friend-h",
    name: "이원희",
    mbti: "_SFP",
    song: "우예린 토끼",
    message: "항상 건강하세요!",
    image: "",
    color: "#fae0e0",
  },
    {
    id: "friend-i",
    name: "최지우",
    mbti: "INTP",
    song: "SUMIN +82",
    message: "서울은 여전히 서울이고 일기 밴드도 여전히 그대로야 너는 여전히 너야?",
    image: "",
    color: "#e8e7f2",
  },
    {
    id: "friend-j",
    name: "코모",
    mbti: "ISFP",
    song: "오란고교 사교클럽 엔딩 질주",
    message: "멘트 리비도 수준 괜찮을까요?",
    image: "",
    color: "#afb5c0",
  },
    {
    id: "friend-c",
    name: "친구 C",
    mbti: "ISTP",
    song: "추천 노래를 입력해 주세요",
    movie: "추천 영화를 입력해 주세요",
    message: "말보다 오래 남는 행동으로 보여줄게.",
    image: "",
    color: "#ebeb93",
  },
    {
    id: "friend-c",
    name: "친구 C",
    mbti: "ISTP",
    song: "추천 노래를 입력해 주세요",
    movie: "추천 영화를 입력해 주세요",
    message: "말보다 오래 남는 행동으로 보여줄게.",
    image: "",
    color: "#ebeb93",
  },
    {
    id: "friend-c",
    name: "친구 C",
    mbti: "ISTP",
    song: "추천 노래를 입력해 주세요",
    movie: "추천 영화를 입력해 주세요",
    message: "말보다 오래 남는 행동으로 보여줄게.",
    image: "",
    color: "#ebeb93",
  },
    {
    id: "friend-c",
    name: "친구 C",
    mbti: "ISTP",
    song: "추천 노래를 입력해 주세요",
    movie: "추천 영화를 입력해 주세요",
    message: "말보다 오래 남는 행동으로 보여줄게.",
    image: "",
    color: "#ebeb93",
  },
    {
    id: "friend-c",
    name: "친구 C",
    mbti: "ISTP",
    song: "추천 노래를 입력해 주세요",
    movie: "추천 영화를 입력해 주세요",
    message: "말보다 오래 남는 행동으로 보여줄게.",
    image: "",
    color: "#ebeb93",
  },
    {
    id: "friend-c",
    name: "친구 C",
    mbti: "ISTP",
    song: "추천 노래를 입력해 주세요",
    movie: "추천 영화를 입력해 주세요",
    message: "말보다 오래 남는 행동으로 보여줄게.",
    image: "",
    color: "#ebeb93",
  },
    {
    id: "friend-c",
    name: "친구 C",
    mbti: "ISTP",
    song: "추천 노래를 입력해 주세요",
    movie: "추천 영화를 입력해 주세요",
    message: "말보다 오래 남는 행동으로 보여줄게.",
    image: "",
    color: "#ebeb93",
  },
    {
    id: "friend-c",
    name: "친구 C",
    mbti: "ISTP",
    song: "추천 노래를 입력해 주세요",
    movie: "추천 영화를 입력해 주세요",
    message: "말보다 오래 남는 행동으로 보여줄게.",
    image: "",
    color: "#ebeb93",
  },
  
];

export function matchFriend(seed: string) {
  let hash = 0;
  for (let index = 0; index < seed.length; index += 1) {
    hash = (hash * 31 + seed.charCodeAt(index)) >>> 0;
  }
  return friends[hash % friends.length];
}

