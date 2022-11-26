
export default function Card() {
  const firstName = "Filip";
  const lastName = "Drábek";
  const describtion_1 = "I am junior front-end developer learning react"
    return (
      <>
        <div className="container">
          <div className="card">
            <div className="card__img"><img src="https://picsum.photos/317/317" alt="card image picture" /></div>
            <div className="card__details">
              <h1>{firstName} {lastName}</h1></div>
              <h2 className="h2--details">Frontend Developer</h2>
            <div className="card__btns">
              <a className="card__btn" href="#">Email</a>
              <a className="card__btn card__btn--blue" href="#">LinkedIn</a>
            </div>
            <div className="card__desc">
              <h2 className="h2--desc-head">About</h2>
              <p>{describtion_1}</p>
              <h2 className="h2--desc-head">Interests</h2>
              <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
            </div>
            <div className="card__footer">
              <div className="card__footer__links">
                <a className="card__footer__link" href="#"><i class="fa-brands fa-2x fa-square-twitter"></i></a>
                <a className="card__footer__link" href="#"><i class="fa-brands fa-2x fa-square-facebook"></i></a>
                <a className="card__footer__link" href="#"><i class="fa-brands fa-2x fa-square-instagram"></i></a>
                <a className="card__footer__link" href="#"><i class="fa-brands fa-2x fa-square-github"></i></a>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }