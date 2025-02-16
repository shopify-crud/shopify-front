import icon01 from "../../assets/icon01.png"
import icon02 from "../../assets/icon02.png"
import icon03 from "../../assets/icon03.png"
import elementoDaPage02 from "../../assets/elementoDaPage02.png"

const Body = () => {
  return (
    <>
      <section className="body">
        <div className="divBoxPai">
          <div className="divBoxFilho1">
            <img className="icon" src={icon01} alt="Icon 1" />
            <p className="p3">Lorem, ipsum ola.</p>
            <p className="p4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat,
              quos.
            </p>
          </div>
          <div className="divBoxFilho2">
            <img className="icon" src={icon02} alt="Icon 2" />
            <p className="p3">Lorem, ipsum.</p>
            <p className="p4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat,
              quos.
            </p>
          </div>
          <div className="divBoxFilho3">
            <img className="icon" src={icon03} alt="Icon 3" />
            <p className="p3">Lorem, ipsum.</p>
            <p className="p4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat,
              quos.
            </p>
          </div>
        </div>
        <div>
          <img className="img3" src={elementoDaPage02} alt="Elemento" />
        </div>

        <div className="lastDiv">
          <div className="lastDivFilho1">
            <p className="p5">
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab
              exercitationem labore officia reiciendis."
            </p>
            <p className="p6">Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="lastDivFilho2">
            <button className="button2">Start free trial</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Body;
