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
    name: "친구 A",
    mbti: "ENFP",
    song: "추천 노래를 입력해 주세요",
    movie: "추천 영화를 입력해 주세요",
    message: "우리, 생각보다 가까운 궤도를 돌고 있을지도 몰라.",
    image: "",
    color: "#ff8fc4",
  },
  {
    id: "friend-b",
    name: "친구 B",
    mbti: "INFJ",
    song: "추천 노래를 입력해 주세요",
    movie: "추천 영화를 입력해 주세요",
    message: "천천히 알아가도 괜찮아. 나는 여기 있어.",
    image: "",
    color: "#9d8cff",
  },
  {
    id: "friend-c",
    name: "친구 C",
    mbti: "ISTP",
    song: "추천 노래를 입력해 주세요",
    movie: "추천 영화를 입력해 주세요",
    message: "말보다 오래 남는 행동으로 보여줄게.",
    image: "",
    color: "#73d5e9",
  },
];

export function matchFriend(seed: string) {
  let hash = 0;
  for (let index = 0; index < seed.length; index += 1) {
    hash = (hash * 31 + seed.charCodeAt(index)) >>> 0;
  }
  return friends[hash % friends.length];
}

