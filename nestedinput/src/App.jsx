import { useState, useRef, useEffect } from "react";

function App() {
  const [result, setresult] = useState("undefined");
  const [SelectedOR ,setSelectedOR] = useState(false)
  const [AddArugument, setAddArgument] = useState(false);
  const [Boolean, setBoolean] = useState(null);
  const [Selectedval, setSelectedval] = useState(null);
  const [SelectedAnd, SetSelectedAnd] = useState(null);
  const [SelectedORnested ,setSelectedORnested] = useState(null)
  const [SelectednestedConst, setSelectednestedConst] = useState(null);
  const [SelectednestedArgument, setSelectednestedArgument] = useState(null);
  const [SelectednestedAnd, setSelectednestedAnd] = useState(null);
  


  const inputELe = useRef("");
  const inputELeArgument = useRef("");
 


  const handleOption = () => {
    if (Selectedval === "constant") {
      if (Boolean === "true") {
        setresult("true");
      } else {
        setresult("false");
      }
    } else if (SelectedAnd === "argumnet" &&  "X" ) {
      if (Boolean === "true") {
        setresult("true");
      } else {
        setresult("false");
      }
    } else if (Selectedval === "argument") {
      if (Boolean === "true") {
        setresult("true");
      } else {
        setresult("false");
      }
    } else if (inputELeArgument.current.value === "X") {
      setresult("false");
    } else if(Selectedval === "and" && SelectedAnd === "argument"){
      setresult(true)
    }

  };


  useEffect(() => { 
    handleOption();
  }, [SelectedOR, SelectedAnd, result, Boolean, Selectedval]);
  
    const handlereset = () => {
      setSelectedval(null);
      SetSelectedAnd(true)
      setBoolean(false)
    };
  
  const styles = {
    hide: {
      display: "none",
    },
  };

  return (
    <>
       <h1>PROJECT.</h1>
      <div className="main-div">
        <input
          type="text"
          defaultValue="MyArg"
          ref={inputELe}
          placeholder="Argument"
        />
        <select onChange={(e) => setBoolean(e.target.value)}>
          <option value="true" onClick={handleOption}>
            true
          </option>
          <option value="false" onClick={handleOption}>
            false
          </option>
        </select>
        <br />
        {/* Add Arugument  */}
        {AddArugument === true ? (
          <>
            <input type="text" defaultValue="newarg" ref={inputELeArgument} />
            <select onChange={(e) => setBoolean(e.target.value)}>
              <option value="true" onClick={handleOption}>
                true
              </option>
              <option value="false" onClick={handleOption}>
                false
              </option>
            </select>
          </>
        ) : null}

        {/* End Add Arugument  */}
        <br />
        <button onClick={() => setAddArgument(true)} className="addarg">+</button>
        <br />
        {Selectedval === "constant" ? (
          <>
            <select onChange={(e) => setBoolean(e.target.value)}>
              <option value="false">false</option>
              <option value="true">true</option>
            </select>
            <button onClick={handlereset} className="reset">
              X
            </button>
          </>
        ) : (
          <>
            {inputELeArgument.current.value === "X" && Boolean === "true" ? (
              <>
                <select onChange={(e) => setSelectedval(e.target.value)}>
                  <option value="...Select" selected>
                    ...Select
                  </option>
                  <option value="argument" onClick={handleOption}>
                    My Arg
                  </option>
                  <option value="X" onClick={handleOption}>
                    X
                  </option>
                </select>
              </>
            ) : (
              <>
                {Selectedval === "and" && SelectedAnd === "argument" ? (
                  <>
                    <select onChange={(e) => setSelectedOR(e.target.value)}>
                      <option value="and" onClick={handleOption}>
                        and
                      </option>
                      <option value="or" onClick={handleOption}>
                        or
                      </option>
                    </select>
                  </>
                ) : (
                  <>
                    <select onChange={(e) => setSelectedval(e.target.value)}>
                      <option value="...Select">...Select</option>
                      <option value="constant" onClick={handleOption}>
                        constant
                      </option>
                      <option value="argument" onClick={handleOption}>
                        My Arg
                      </option>
                      <option value="and" onClick={handleOption}>
                        and
                      </option>
                      <option value="or" onClick={handleOption}>
                        or
                      </option>
                    </select>
                  </>
                )}
              </>
            )}
            <button onClick={handlereset} className="reset">
              X
            </button>{" "}
            <br />
          </>
        )}
        {Selectedval === "and" ? (
          <>
            <br />
            <select style={{ marginLeft: ".5rem" }}>
              <option value="...Select" onClick={handleOption}>
                ...Select
              </option>
              <option value="constant" onClick={handleOption}>
                constant
              </option>
              <option value="argument" onClick={handleOption}>
                My Arg
              </option>
              <option value="and" onClick={handleOption}>
                and
              </option>
              <option value="or" onClick={handleOption}>
                or
              </option>
            </select>
            <button onClick={handlereset} className="reset">
              X
            </button>
            <br />
            {SelectedAnd === "argument" ? (
              <>
                <select
                  style={{ marginLeft: ".5rem" }}
                  onChange={(e) => SetSelectedAnd(e.target.value)}
                >
                  <option value="...Select">...Select</option>
                  <option value="argument" onClick={handleOption}>
                    My Arg
                  </option>
                  <option value="X" onClick={handleOption}>
                    X
                  </option>
                </select>
                <button onClick={handlereset} className="reset">
                  X
                </button>
                <br />
                <>
                  {!SelectedOR ? (
                    <>
                      <select
                        style={{ marginLeft: ".5rem" }}
                        onChange={(e) => setSelectedORnested(e.target.value)}
                      >
                        <option value="...Select" onClick={handleOption}>
                          ...Select
                        </option>
                        <option value="constant" onClick={handleOption}>
                          constant
                        </option>
                        <option value="argument" onClick={handleOption}>
                          My Arg
                        </option>
                        <option value="and" onClick={handleOption}>
                          and
                        </option>
                        <option value="or" onClick={handleOption}>
                          or
                        </option>
                      </select>
                      <button className="reset">X</button>
                      <br />
                      {SelectedORnested === "and" ? (
                        <>
                          <select
                            style={{ marginLeft: "1rem" }}
                            onChange={(e) =>
                              setSelectednestedConst(e.target.value)
                            }
                          >
                            {SelectednestedConst === "constant" ? (
                              <>
                                {" "}
                                <option value="true" onClick={handleOption}>
                                  true
                                </option>
                                <option value="false" onClick={handleOption}>
                                  false
                                </option>
                              </>
                            ) : (
                              <>
                                {" "}
                                <option
                                  value="...Select"
                                  onClick={handleOption}
                                >
                                  ...Select
                                </option>
                                <option value="constant" onClick={handleOption}>
                                  constant
                                </option>
                                <option value="argument" onClick={handleOption}>
                                  My Arg
                                </option>
                                <option value="and" onClick={handleOption}>
                                  and
                                </option>
                                <option value="or" onClick={handleOption}>
                                  or
                                </option>
                              </>
                            )}
                          </select>
                          <button className="reset">X</button>
                          <select
                            style={{ marginLeft: "1rem" }}
                            onChange={(e) =>
                              setSelectednestedArgument(e.target.value)
                            }
                          >
                            <option value="...Select" onClick={handleOption}>
                              ...Select
                            </option>
                            <option value="constant" onClick={handleOption}>
                              constant
                            </option>
                            <option value="argument" onClick={handleOption}>
                              My Arg
                            </option>
                            <option value="and" onClick={handleOption}>
                              and
                            </option>
                            <option value="or" onClick={handleOption}>
                              or
                            </option>
                          </select>
                          <button className="reset">X</button>
                          {!SelectednestedArgument ? (
                            <>
                              <select
                                onChange={(e) =>
                                  setSelectednestedAnd(e.target.value)
                                }
                                style={{ marginLeft: "1rem" }}
                              >
                                <option
                                  value="...Select"
                                  onClick={handleOption}
                                >
                                  ...Select
                                </option>
                                <option value="constant" onClick={handleOption}>
                                  constant
                                </option>
                                <option value="argument" onClick={handleOption}>
                                  My Arg
                                </option>
                                <option value="and" onClick={handleOption}>
                                  and
                                </option>
                                <option value="or" onClick={handleOption}>
                                  or
                                </option>
                              </select>
                              {SelectednestedAnd === "and" ? (
                                <>
                                  <select style={{ marginLeft: "1.5rem" }}>
                                    <option
                                      value="...Select"
                                      onClick={handleOption}
                                    >
                                      ...Select
                                    </option>
                                    <option
                                      value="constant"
                                      onClick={handleOption}
                                    >
                                      constant
                                    </option>
                                    <option
                                      value="argument"
                                      onClick={handleOption}
                                    >
                                      My Arg
                                    </option>
                                    <option value="and" onClick={handleOption}>
                                      and
                                    </option>
                                    <option value="or" onClick={handleOption}>
                                      or
                                    </option>
                                  </select>
                                  <button>X</button>
                                  <select style={{ marginLeft: "1.5rem" }}>
                                    <option
                                      value="...Select"
                                      onClick={handleOption}
                                    >
                                      ...Select
                                    </option>
                                    <option
                                      value="constant"
                                      onClick={handleOption}
                                    >
                                      constant
                                    </option>
                                    <option
                                      value="argument"
                                      onClick={handleOption}
                                    >
                                      My Arg
                                    </option>
                                    <option value="and" onClick={handleOption}>
                                      and
                                    </option>
                                    <option value="or" onClick={handleOption}>
                                      or
                                    </option>
                                  </select>
                                </>
                              ) : null}
                              <button className="reset">X</button>
                            </>
                          ) : null}
                          <button
                            style={{ marginLeft: "1rem" }}
                            onClick={() => setSelectednestedArgument(false)}
                            className="addop"
                          >
                            +
                          </button>
                        </>
                      ) : null}
                    </>
                  ) : null}
                </>
              </>
            ) : (
              <>
                <select
                  style={{ marginLeft: ".5rem" }}
                  onChange={(e) => SetSelectedAnd(e.target.value)}
                >
                  <option value="...Select" onClick={handleOption}>
                    ...Select
                  </option>
                  <option value="constant" onClick={handleOption}>
                    constant
                  </option>
                  <option value="argument" onClick={handleOption}>
                    My Arg
                  </option>
                  <option value="and" onClick={handleOption}>
                    and
                  </option>
                  <option value="or" onClick={handleOption}>
                    or
                  </option>
                </select>
              </>
            )}
            <button onClick={handlereset} className="reset">
              X
            </button>{" "}
            <br />
            <button
              style={{ marginLeft: ".5rem" }}
              onClick={() => setSelectedOR(false)}
              className='addop'
            >
              + 
            </button>
          </>
        ) : null}
      </div>

      {/* ------------------------------------  */}
      <div id="resultDiv">
        <p>Result : {result}</p>
      </div>
    </>
  );
}

export default App;
