import React from "react";
import "./About.css";
import burgerVideo from "../../assets/about-burger.mp4";

function About() {
    return (
        <section className="about">
            <div className="about__content">
                <h2 className="about__title">— Who we are  —</h2>
                <p>
                    At <span>Veggie Burger House</span>, we believe burgers should be
                    more than just food — they should be an experience. Our team crafts
                    each burger with fresh, locally-sourced ingredients to bring you the
                    perfect balance of taste and health.
                </p>
                <p>
                    Whether you’re craving a juicy gourmet classic or a fully customized
                    creation, our kitchen is here to make your burger dreams a reality.
                </p>
                <p>
                    And because food is best enjoyed together, we designed our place as a
                    cozy spot for friends, families, and burger lovers to share moments
                    that matter.
                </p>
            </div>

            <div className="about__media">
                <video
                    src={burgerVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="about__video"
                />
            </div>
        </section>
    );
}

export default About;
