import React from 'react'

export default function Game() {
  const users = ["имя1", "имя2", "имя3", "имя4", "имя5", "имя6", "имя7", "имя8", "имя9", "имя10"]
  const [menu, setMenu] = React.useState<string>()
  const [status, setStatus] = React.useState<string[]>(["live", "live", "live", "live", "live", "live", "live", "live", "live", "live"])

  function handleClick(index: number, move: string) {
    const nextCounters = status.map((c, i) => {
      if (i === index) {
        return move;
      } else {
        return c;
      }
    });
    setStatus(nextCounters);
  }

  return (
    <>
      <div className="game__wrap">
        <div className="game__users">
          {users.map((item: string, index: number) => {
            return (
              <div className={`game__user-item ${status[index]}`}
                onMouseEnter={() => setMenu(item)}
                onMouseLeave={() => setMenu("")}
                key={item}
              >
                <span className='game__user'>{item}</span>

                <div className={`game__user-menu ${menu == item ? "active" : ""}`}>
                  <div className="game__user-menu-select" onClick={() => handleClick(index, "kill")}>убить</div>
                  <div className="game__user-menu-select" onClick={() => handleClick(index, "prison")}>в тюрьму</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
