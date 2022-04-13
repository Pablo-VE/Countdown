import React, { Fragment } from "react";

const Clock = ({ timerDays, timerHours, timerMinutes, timerSeconds }) => {
  return (
    <>
      <section className="timer-container" style={{background: "linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url(" + (require("../img/Chirripo1.jfif")) + ")  center center/cover no-repeat"}}>
        <section className="timer">
            <div className="title">
                <span>¿Qué hacer en Pérez?</span>
            </div>
            <div className="clock">
                <section>
                    <p>{timerDays}</p>
                    <small>Días</small>
                </section>
                <span>:</span>
                <section>
                    <p>{timerHours < 10 && "0"}{timerHours}</p>
                    <small>Horas</small>
                </section>{" "}
                <span>:</span>
                <section>
                    <p>{timerMinutes < 10 && "0"}{timerMinutes}</p>
                    <small>Minutos</small>
                </section>{" "}
                <span>:</span>
                <section>
                    <p>{timerSeconds < 10 && "0"}{timerSeconds}</p>
                    <small>Segundos</small>
                </section>
            </div>
            <div className="logos">
                <img src={require("../img/logort1.1.png")} alt="logo" />
            </div>
        </section>
        
      </section>
    </>
  );
};

Clock.defaultProps = {
  timerDays: 10,
  timerHours: 10,
  timerMinutes: 10,
  timerSeconds: 10,
};

export default Clock;