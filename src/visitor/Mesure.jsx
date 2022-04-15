import React from "react";
import "./Mesure.css";

function Mesure() {
  return (
    <section id="mesure">
      <img src={"/images/photo-5.jpg"} alt="" />
      <div className="infotextes">
        <h4>Mesures</h4>
        <p>
          Nam blandit leo eget sem pulvinar, in finibus neque luctus.
          Suspendisse a nulla tincidunt, convallis tellus sed, semper felis.
          Mauris sit amet laoreet odio. Duis lectus mauris, imperdiet in
          tincidunt at, sagittis lobortis diam. Etiam pharetra convallis risus
          non semper. Donec ut semper libero. Duis consectetur purus cursus
          turpis volutpat sagittis. Praesent luctus ornare pulvinar. Aliquam
          pretium, tortor a suscipit rhoncus, ex lacus varius libero, id maximus
          velit lorem nec nunc.
        </p>
      </div>
    </section>
  );
}

export default Mesure;
