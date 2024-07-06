import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom"

const Home = () => {
  let navigate = useNavigate()

  return (
    <div className="home-container col">         

      <section className="welcome-signin">
      <img className="image2" src="https://ucarecdn.com/b912f51e-5243-454d-901a-991173daf860/"></img>
      <button onClick={() => navigate('/signin')}>
          Click Here To Get Started
        </button>
       </section> 
       <section>
        
       </section>
       <section className="style"> </section>
         
        <section className="full">
        <form>
          <input className="card" type="radio" name="fancy" autoFocus value="clubs" id="clubs" />
          <input className="card"type="radio" name="fancy" value="hearts" id="hearts" />
          <input className="card" type="radio" name="fancy" value="spades" id="spades" />
          <label htmlFor="clubs" className="card-label"></label>
          <label htmlFor="hearts" className="card-label"></label>
          <label htmlFor="spades" className="card-label"></label>
        </form>
        </section>

        <section className="full">
    <form>
      <input type="radio" name="fancy1" autoFocus value="clubs" id="clubs1" className="card" />
      <input type="radio" name="fancy1" value="hearts" id="hearts1" className="card" />
      <input type="radio" name="fancy1" value="spades" id="spades1" className="card" />
      <label htmlFor="clubs1" className="card-label"></label>
      <label htmlFor="hearts1" className="card-label"></label>
      <label htmlFor="spades1" className="card-label"></label>
    </form>
  </section>

  <section className="full">
    <form>
      <input type="radio" name="fancy2" autoFocus value="clubs" id="clubs2" className="card" />
      <input type="radio" name="fancy2" value="hearts" id="hearts2" className="card" />
      <input type="radio" name="fancy2" value="spades" id="spades2" className="card" />
      <label htmlFor="clubs2" className="card-label"></label>
      <label htmlFor="hearts2" className="card-label"></label>
      <label htmlFor="spades2" className="card-label"></label>
    </form>
  </section>

          <section className="Button">
        <Link to={`/categories`}>
        <button className="button">Click Here To Get Started</button>
        </Link>

         </section>

           
      </div>
  )
}

export default Home