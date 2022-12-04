const quotes = [
    {
      quote: "내 아파트 값은 우리 아파트에서 제일 빚 많은 사람의 이자지불 능력에 달린 것.",
      author: " - 디시인사이드 부동산갤러리",
    },
    {
      quote: "제가 뭐라했습니까 제 말이 맞죠? (10% 하락 후 다음 날 1% 상승했을 때 멘트)",
      author: " - 디시인사이드 주식갤러리",
    },
    {
      quote: "위험을 감수하지 않으면 실패도 하지 않는다.",
      author: " - 디시인사이드 주식갤러리",
    },
    {
      quote: "승자 한 명단 패자는 열 명인데 솔직히 너는 후자쪽일 것이다.",
      author: " - 디시인사이드 주식갤러리",
    },
    {
      quote: "고통이 없으면 성취도 없다. 그런데 고통이 있다고 성취가 있는 것은 아니다.",
      author: " - 디시인사이드 주식갤러리",
    },
    {
      quote: "우리 서로의 의견은 존중하도록 하자, 물론 내가 맞고 니가 틀리지만..",
      author: " - 디시인사이드 주식갤러리",
    },
    {
      quote: "오르거나 말거나 내껀 안오른다.",
      author: " - 익명의 누군가",
    },
    {
      quote: "너에게 닥친 고난이 아무리 커보이더라도 명심해라, 아직 빙산의 일각일 뿐",
      author: " - 익명의 누군가",
    },
  ];

  const quote = document.querySelector("#quote span:first-child");
  const author = document.querySelector("#quote span:last-child");
  const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

  quote.innerText = todaysQuote.quote;
  author.innerText = todaysQuote.author;