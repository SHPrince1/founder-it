import React from "react";
import Book2 from "../../assets/founderbookcopy.png";

import Ladypics from "../../assets/ladypics.png";
import Manpics from "../../assets/manpics.png";
import Zag from "../../assets/zag.png";
import Ellipse from "../../assets/tickBackground.png";
import Arrow from "../../assets/arrow-right-02.png";
import style from "../../styles/expect.module.css";

const WhatToExpect = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.Subcontainer}>
          <div className={style.box2}>
            <div className={style.textHeader}>
              <h2>What to Expect in 28 Days</h2>
              <p>
                This isn’t theory. It’s action. Every day, you’ll make real
                progress.
              </p>
            </div>
            <div className={style.imgText}>
              {/* <img src={Arm} alt="" /> */}
              <button>Week 1</button>
              <div className={style.text}>
                <h4>Discover Your Edge</h4>
                <p>
                  Uncover your strengths, passions, and resources. Find the idea
                  that truly fits your life and goals.
                </p>
              </div>
            </div>
            <div className={style.imgText}>
              {/* <img src={Piece} alt="" /> */}
              <button>Week 2</button>
              <div className={style.text}>
                <h4>Generate & Select Winning Ideas</h4>
                <p>
                  Brainstorm, rank, and filter ideas for viability, fit, and
                  real-world potential.
                </p>
              </div>
            </div>
            <div className={style.imgText}>
              {/* <img src={Team} alt="" /> */}
              <button>Week 3</button>
              <div className={style.text}>
                <h4>Validate Like a Pro</h4>
                <p>
                  Talk to real customers. Test demand. Get feedback—so you know
                  your idea works before you invest.
                </p>
              </div>
            </div>
            <div className={style.imgText}>
              {/* <img src={Growth} alt="" /> */}
              <button>Week 4</button>
              <div className={style.text}>
                <h4>Build & Launch</h4>
                <p>
                  Crunch the numbers, craft your first offer, and launch with
                  confidence—no more guesswork.
                </p>
              </div>
            </div>
            <a href="https://js.stripe.com/v3/buy-button.js">
              <button>
                Join the 28 Day Challenge{" "}
                <img src={Arrow} alt="" size={5} className={style.arrow} />
              </button>
            </a>
          </div>
          <div className={style.book2}>
            <img src={Book2} alt="" />
          </div>
        </div>

        <div className={style.Zag}>
          <img src={Zag} alt="" />
          {/* <h1>TEST</h1> */}
        </div>

        <div className={style.MeetSection}>
          <div className={style.textSection}>
            <h1>BY DAY 28, YOU'LL HAVE:</h1>
            <div className={style.tickTextDiv}>
              <div className={style.tickText}>
                <img src={Ellipse} width={20} alt="" />
                <p>
                  A business idea built on your unique strengths and passions
                </p>
              </div>

              <div className={style.tickText}>
                <img src={Ellipse} width={20} alt="" />
                <p>Real-world validation from actual customers</p>
              </div>

              <div className={style.tickText}>
                <img src={Ellipse} width={20} alt="" />
                <p>A launch-ready plan and the momentum to keep going</p>
              </div>

              <div className={style.tickText}>
                <img src={Ellipse} width={20} alt="" />
                <p>The confidence to make it real</p>
              </div>
              <div className={style.want}>
                <h4>WANT MORE INSIGHT FROM IKE?</h4>

                <a href="https://js.stripe.com/v3/buy-button.js">
                  <button>
                    JOIN IKE'S SUBSTACK NEWSLETTER{" "}
                    <img src={Arrow} alt="" size={2} />
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className={style.imageSection}>
            <img src={Ladypics} width={400} alt="" />
          </div>
        </div>
        <div className={style.MeetSection}>
          <div className={style.imageSection}>
            <img src={Manpics} width={400} alt="" />
          </div>
          <div className={style.textSection}>
            <h1>WHO IS THIS FOR?</h1>
            <div className={style.tickTextDiv}>
              <div className={style.tickText}>
                <img src={Ellipse} width={20} alt="" />
                <p>You’ve got a business idea but haven’t started</p>
              </div>

              <div className={style.tickText}>
                <img src={Ellipse} width={20} alt="" />
                <p>You’re tired of overthinking and want a proven process</p>
              </div>

              <div className={style.tickText}>
                <img src={Ellipse} width={20} alt="" />
                <p>
                  You want to avoid costly mistakes and build something real
                </p>
              </div>

              <div className={style.tickText}>
                <img src={Ellipse} width={20} alt="" />
                <p>You’re ready to stop dreaming and start doing</p>
              </div>
              <div className={style.want}>
                {/* <h4>WANT MORE INSIGHT FROM IKE?</h4> */}

                <a href="https://js.stripe.com/v3/buy-button.js">
                  <button>
                    JOIN IKE'S SUBSTACK NEWSLETTER{" "}
                    <img src={Arrow} alt="" size={2} />
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* <div className={style.imageSection}>
            <img src={Ladypics} width={400} alt="" />
          </div> */}
        </div>

        <div className={style.journey}>
          <div className={style.rightText}>
            <h1>DON'T WAIT-START YOUR BUSINESS NOW</h1>
            <p>Your business won't start itself</p>
            <a href="https://js.stripe.com/v3/buy-button.js">
              <button>
                Join the 28 Day Challenge <img src={Arrow} alt="" size={5} />
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatToExpect;
