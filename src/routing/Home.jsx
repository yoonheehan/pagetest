import profileImg from "/profileImg.jpg";
import "./Home.css";

const Home = () => (
  <div style={{ width: "100%", height: "100%" }}>
    <div className="body">
      <div className="home">
        <aside className="leftside">
          <div className="profile">
            <img src={profileImg} alt="profile" />
          </div>

          <div className="menus">
            <div className="title">Name</div>
            <div>홍길동</div>
          </div>

          <div className="menus">
            <div className="title">Introducing</div>
            <div className="introduce-body">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Recusandae doloremque at ducimus reiciendis, amet quod expedita
              velit est maxime exercitationem necessitatibus officiis maiores
              soluta modi suscipit sunt alias! Numquam, laborum!
            </div>
          </div>

          <div className="menus">
            <div className="title">Stacks</div>
            <div className="tags">
              <div>C++</div>
              <div>C#</div>
              <div>Java</div>
              <div>Python</div>
              <div>Rust</div>
              <div>AWS</div>
            </div>
          </div>

          <div className="menus">
            <div className="title">Contact</div>
            <div>010-1234-5678</div>
          </div>
        </aside>
        <div className="rightside">대충 홈에 맞는 느낌의 것들</div>
      </div>
    </div>
  </div>
);
export default Home;
