import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Obtenha controle total <br className="sm:block hidden" /> do seu negócio.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Poderia existir uma plataforma para analisar clientes recorrentes, perfil de consumidores e muito mais... 
        Ops, já existe! A <span className="text-teal-400">WhiteX</span> personaliza tudo pra você, queremos sua marca visível em todos os lugares.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
