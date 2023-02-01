import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const ListeParties = (props) => {
  const [parties, setParties] = useState([]);
  const [flag, setFlag] = useState(false);
  const [parties2, setParties2] = useState([]);
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
    parties.map((a) =>
      a.map((parts) => {
        idss.map((b) => {
          if (parts.id !== b) {
            parties[0].splice(i, i);
          }
          i++;
        });
      })
    );
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
    PartieCleanner();
    PartieCleanner();
    SetIds();
    console.log("flag est a " + flag);
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
        <ul>{parties.map((e) => e.map((a) => <li>{a.nom}</li>))}</ul>
      </div>
    </div>
  );
};

export default ListeParties;
