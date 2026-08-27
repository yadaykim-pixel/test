/////////////////////// 12일//////////////////////////////////////
//const isMember = true;
//const totalprice = 30000;
//console .log(isMember && totalprice >= 30000);

const isFavorite = true;
const buttonText = isFavorite ? "찜 해제" : "찜하기";
console.log(buttonText);

//const voteAverage = 8.4;
//const ratingText = voteAverage >= 8 ? "추천 영화" : "일반 영화";
//console.log(ratingText);

const voteAverage = 8.7;
if (voteAverage >= 9) {
  console.log("최고 평점 영화");
} else if (voteAverage >= 8) {
  console.log("추천 영화");
} else {
  console.log("일반 영화");
}

const isMember = true;
const totalPrice = 36000;
if (isMember && totalPrice >= 30000) {
  console.log("회원 혜택 적용");
} else if (isMember) {
  console.log("기본 회원 혜택 적용");
} else {
  console.log("일반 예매");
}

const 멤버스 = true;
const 합계 = 123456;
if (멤버스 && 합계 >= 123) {
  console.log("우수 회원 혜택");
} else if (성공) {
  console.log("기존 회원 혜택");
} else {
  console.log("일반 예매");
}

const movieTitles = ["인셉션", "인터스텔라", "다크 나이트"];   // 0 1 2
movieTitles[0] = "듄";          // 인셉션 삭제 후 0번 차자함
console.log(movieTitles);      // *******변수는 재할당 X 변수 값은 변경됨//
movieTitles.push("타짜");      // 값 추가 (타짜))

console.log(movieTitles.length); // 3
console.log(`전체 영화는 ${movieTitles.length}편입니다.`);


/////////////////////////////////////////////////////////
const movies = [
  {id: 0, title: "다크 나이트",  voteAverage: 9.1,  releaseDate: "2020.1.1.",},
  {id: 1, title: "타짜", voteAverage: 9.0, releaseDate: "2022.1.1.",},
  {id: 2, title: "세얼간이", voteAverage: 9.5, releaseDate: "2023.1.1.",},
];
console.log(movies[1].title);
console.log(movies[2].voteAverage);
console.log(movies[0].releaseDate);

///////////////////////////////////////////////////

for (let i = 3; i < 6; i++) {console.log(i);}     // 반복 

for (const title of movies) { console.log(title);}  // 배열시

for (const movie of movies) {if (movie.voteAverage >= 8) {console.log(movie.title);} 
}

