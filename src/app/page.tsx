"use client"
import Game from "@/components/Game";
import NewGame from "@/components/newGame";
import React from "react";

export default function Home() {
  const mass = [1234, 123, 34434, 654, 2345]

  const [selected, setSelected] = React.useState(1234)
  const [stage, setStage] = React.useState("home")

  const checkSelected = (item: number) => item == selected ? "active" : ""
  console.log(stage);



  return (
    <div>
      <div className="top" onClick={() => setStage("home")}>
        <svg viewBox="0 0 24 24" fill="none" ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Navigation / House_01"> <path id="Vector" d="M20 17.0002V11.4522C20 10.9179 19.9995 10.6506 19.9346 10.4019C19.877 10.1816 19.7825 9.97307 19.6546 9.78464C19.5102 9.57201 19.3096 9.39569 18.9074 9.04383L14.1074 4.84383C13.3608 4.19054 12.9875 3.86406 12.5674 3.73982C12.1972 3.63035 11.8026 3.63035 11.4324 3.73982C11.0126 3.86397 10.6398 4.19014 9.89436 4.84244L5.09277 9.04383C4.69064 9.39569 4.49004 9.57201 4.3457 9.78464C4.21779 9.97307 4.12255 10.1816 4.06497 10.4019C4 10.6506 4 10.9179 4 11.4522V17.0002C4 17.932 4 18.3978 4.15224 18.7654C4.35523 19.2554 4.74432 19.6452 5.23438 19.8482C5.60192 20.0005 6.06786 20.0005 6.99974 20.0005C7.93163 20.0005 8.39808 20.0005 8.76562 19.8482C9.25568 19.6452 9.64467 19.2555 9.84766 18.7654C9.9999 18.3979 10 17.932 10 17.0001V16.0001C10 14.8955 10.8954 14.0001 12 14.0001C13.1046 14.0001 14 14.8955 14 16.0001V17.0001C14 17.932 14 18.3979 14.1522 18.7654C14.3552 19.2555 14.7443 19.6452 15.2344 19.8482C15.6019 20.0005 16.0679 20.0005 16.9997 20.0005C17.9316 20.0005 18.3981 20.0005 18.7656 19.8482C19.2557 19.6452 19.6447 19.2554 19.8477 18.7654C19.9999 18.3978 20 17.932 20 17.0002Z" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>
        <span className="username">
          Павел Бараненко
        </span>
      </div>
      <div className="game-bar__wrapper">
        <div className="games-bar">
          {mass.map((item: number) => {
            return (
              <button className={`game__item ${checkSelected(item)}`}
                key={item} onClick={() => { setSelected(item); setStage("game") }}>
                <span>игра № {item}</span>
              </button>
            )
          })}

        </div>
      </div>
      <div className="game__body">
        <div className="center">
          {stage == "home" &&
            <>
              <button className="big-btn" onClick={() => setStage("new")}>Войти в игру</button>
              <button className="big-btn">Создать игру</button>
            </>
          }
          {stage == "new" &&
            <NewGame onChange={() => setStage("game")} />
          }
          {stage == "game" &&
            <Game />
          }
        </div>
      </div>
    </div>
  );
}
