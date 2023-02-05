import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const ListeParties = (props) => {
  const [parties, setParties] = useState([]);
  const [parties2, setParties2] = useState([]);
  const [flag, setFlag] = useState(false);
  const [idss, setIdss] = useState([]);

  const MyIds = [];

  const SetIds = () => {
    let temp = [];
    props.id.map((idd) => {
      if (idd !== "" && idd !== " " && idd.length > 0) {
        idd.map((q) => {
          // console.log("prueba: " + q)
          temp.push(q);
          // console.log("temp: " + temp[0])
        });
      }
    });
    MyIds.push(temp);
    setIdss([temp]);
  };

  // const PartieCleanner = () => {
  //   let i = 0;
  //   parties.map((a) =>
  //     a.map((parts) => {
  //       idss.map((b) =>
  //         a.map((p) => {
  //           console.log("b: " + b);
  //           console.log("p: " + p);
  //           if (parts.id !== p) {
  //             console.log("idss: " + p);
  //             console.log("parts.id: " + parts.id);
  //             parties[0].map((a) => console.log("a: " + a.nom));
  //             parties[0].splice(i, i);
  //             parties[0].map((a) => console.log("a: " + a.nom));
  //           }
  //         })
  //       );
  //       i++;
  //       parties[0].map((a) => console.log("f: " + a.nom));
  //     })
  //   );
  // };

  const PartieCleanner = () => {
    let i = 0;
    let t = 0;
    let noOwnerIds = [];
    parties.map((a) => {
      a.map((parts) => {
        idss.map((a) =>
          a.map((q) => {
            if (parts.id !== q) {
              if (!noOwnerIds.includes(parts.id)) {
                noOwnerIds.push(parts.id);
              }
              console.log("noOwnerIds: " + noOwnerIds);
              if (noOwnerIds.includes(q) === true) {
                console.log(
                  "Myq: " + q + " " + noOwnerIds + " " + noOwnerIds.indexOf(q)
                );
                // noOwnerIds.splice(noOwnerIds.indexOf(q, 1));

                // noOwnerIds.splice(q);
              }
              // parties[0].splice(i, i + 1);
            }
          })
        );
        i++;
      });
    });
  };

  const initalUrlListUserParties2 = "http://127.0.0.1:3001/partiesPerId/";
  const initalUrlListUserParties1 = "http://127.0.0.1:3001/listPartiesUser/";

  const flagToggle = () => {
    setFlag(!flag);
  };

  const fetchItemsListUserParties = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setParties([data]);
        // console.log(data);
        // console.log(parties);
      })
      .catch((err) => console.log("pppp" + err));
  };

  useEffect(() => {
    // PartieCleanner();
    fetchItemsListUserParties(initalUrlListUserParties1);
    console.log("la page a change");
  }, []);

  useEffect(() => {
    SetIds();
    PartieCleanner();
    fetchItemsListUserParties(initalUrlListUserParties1);
    // PartieCleanner();

    console.log("flag est a " + flag);
    console.log("idss: " + idss);
  }, [flag]);

  useEffect(() => {
    // PartieCleanner();
    console.log("idss a change");
  }, [idss]);
  // {idss.map((a) => a.map((q) => console.log("paaaa: " + q)))}

  useEffect(() => {
    console.log("parties a change");
  }, [parties]);

  return (
    <div>
      <button onClick={flagToggle}>Voir mes parties</button>
      <div className={!flag ? "invisible" : "ok"}>
        <ul>
          {parties.map((e) =>
            e.map((a) => (
              <li>
                {a.nom}{" "}
                <a
                  href={`http://localhost:5173/joinedPage/${a.id}`}
                  className="Btn-join"
                >
                  <button variant="outlined">Rejoindre partie</button>
                </a>
                {/* <a
                  href={`http://localhost:5173/dellGame/${a.id}`}
                  className="Btn-join"
                >
                  <button variant="outlined">Supprimer partie</button>
                </a> */}
                <form action="http://localhost:3001/dellGame" method="post">
                  <button onClick={flagToggle} className="btnSuppression">
                    Supprimer
                    <span>​</span>
                  </button>

                  <input
                    className="idSupp invisible"
                    name="idSupp"
                    value={a.id}
                  />
                </form>
              </li>
            ))
          )}
        </ul>
        {/* {idss.map((a) => a.map((q) => `</br> ${q}`))} */}
        {/* {idss.map((a) => a.map((q) => console.log(`eeeeee ${q}`)))} */}
      </div>
    </div>
  );
};

export default ListeParties;
