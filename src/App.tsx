import { useState, useEffect, SetStateAction } from "react";
import { Line } from "@ant-design/plots";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [activeTab, setActiveTab] = useState("tab1");

  const openTab = (tabName: SetStateAction<string>) => {
    setActiveTab(tabName);
  };

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch(
      "https://gw.alipayobjects.com/os/bmw-prod/55424a73-7cb8-4f79-b60d-3ab627ac5698.json"
    )
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log("fetch data failed", error);
      });
  };
  const config = {
    data,
    xField: "year",
    yField: "value",
    seriesField: "category",
    yAxis: {
      label: {
        // 数值格式化为千分位
        formatter: (v) =>
          `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`),
      },
    },
    color: ["#1979C9", "#D62A0D", "#FAA219"],
  };
  const canvasElements = document.getElementsByTagName("canvas");

  for (let i = 0; i < canvasElements.length; i++) {
    const canvas = canvasElements[i];
    canvas.style.height = "52px";
  }

  return (
    <>
      <div className="metrics">
        <h1>Asaak Key Metrics Snapshot for Nov 2023 </h1>
        <div>
          <div className="tabs">
            <h2>Comparison Period</h2>
            <div className="button-group">
              <button
                className={activeTab === "tab1" ? "tablink active" : "tablink"}
                onClick={() => openTab("tab1")}
              >
                1 week
              </button>
              <button
                className={activeTab === "tab2" ? "tablink active" : "tablink"}
                onClick={() => openTab("tab2")}
              >
                1 month
              </button>
              <button
                className={activeTab === "tab3" ? "tablink active" : "tablink"}
                onClick={() => openTab("tab3")}
              >
                3 months
              </button>
              <button
                className={activeTab === "tab4" ? "tablink active" : "tablink"}
                onClick={() => openTab("tab4")}
              >
                6 months
              </button>
              <button
                className={activeTab === "tab5" ? "tablink active" : "tablink"}
                onClick={() => openTab("tab5")}
              >
                1 year
              </button>
              <button
                className={activeTab === "tab6" ? "tablink active" : "tablink"}
                onClick={() => openTab("tab6")}
              >
                All time
              </button>
            </div>
          </div>
          <hr className="line" />
          <div
            id="tab1"
            className={
              activeTab === "tab1" ? "tabcontent active" : "tabcontent"
            }
          >
            <h2>Tab 1 Content</h2>
            <div className="container">
              <div className="table">
                <div className="table-header">
                  <div className="header__item">
                    <p id="name" className="filter__link" href="#">
                      Performance Indicators
                    </p>
                  </div>
                  <div className="header__item">
                    <p id="wins" className="filter__link filter__link--number">
                      Current
                    </p>
                  </div>
                  <div className="header__item">
                    <p id="draws" className="filter__link filter__link--number">
                      Target
                    </p>
                  </div>
                  <div className="header__item">
                    <p
                      id="losses"
                      className="filter__link filter__link--number"
                    >
                      Trend
                    </p>
                  </div>
                </div>
                <div className="table-content">
                  <div className="table-row">
                    <div className="table-data">Performance</div>
                    <div className="table-batteries">
                      <div className="hit-unit">2</div>
                    </div>
                    <div className="table-batteries">
                      <div className="hit-unit-target">2</div>
                    </div>
                    <div className="table-data">
                      {" "}
                      <Line {...config} />
                    </div>
                  </div>
                  <div className="table-row">
                    <div className="table-data">Capital efficiency</div>
                    <div className="table-batteries">
                      <div className="hit-unit-two">2</div>
                    </div>
                    <div className="table-batteries">
                      <div className="hit-unit-target">2</div>
                    </div>
                    <div className="table-data">
                      {" "}
                      <Line {...config} />
                    </div>
                  </div>
                  <div className="table-row">
                    <div className="table-data">Loan portfolio</div>
                    <div className="table-batteries">
                      <div className="hit-unit">2</div>
                    </div>
                    <div className="table-batteries">
                      <div className="hit-unit-target">2</div>
                    </div>
                    <div className="table-data">
                      {" "}
                      <Line {...config} />
                    </div>
                  </div>
                  <div className="table-row">
                    <div className="table-data">Integration status</div>
                    <div className="table-batteries">
                      <div className="hit-unit-four">2</div>
                    </div>
                    <div className="table-batteries">
                      <div className="hit-unit-target">2</div>
                    </div>
                    <div className="table-data">
                      {" "}
                      <Line {...config} />
                    </div>
                  </div>
                  <div className="table-row">
                    <div className="table-data">Financial situation</div>
                    <div className="table-batteries">
                      <div className="hit-unit-two">2</div>
                    </div>
                    <div className="table-batteries">
                      <div className="hit-unit-target">2</div>
                    </div>
                    <div className="table-data">
                      {" "}
                      <Line {...config} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            id="tab2"
            className={
              activeTab === "tab2" ? "tabcontent active" : "tabcontent"
            }
          >
            <h2>Tab 2 Content</h2>
            <div className="container">
              <div className="table">
                <div className="table-header">
                  <div className="header__item">
                    <p id="name" className="filter__link" href="#">
                      Performance Indicators
                    </p>
                  </div>
                  <div className="header__item">
                    <p id="wins" className="filter__link filter__link--number">
                      Current
                    </p>
                  </div>
                  <div className="header__item">
                    <p id="draws" className="filter__link filter__link--number">
                      Target
                    </p>
                  </div>
                  <div className="header__item">
                    <p
                      id="losses"
                      className="filter__link filter__link--number"
                    >
                      Trend
                    </p>
                  </div>
                </div>
                <div className="table-content">
                  <div className="table-row">
                    <div className="table-data">Performance</div>
                    <div className="table-batteries">
                      <div className="hit-unit">2</div>
                    </div>
                    <div className="table-batteries">
                      <div className="hit-unit-target">2</div>
                    </div>
                    <div className="table-data">
                      {" "}
                      <Line {...config} />
                    </div>
                  </div>
                  <div className="table-row">
                    <div className="table-data">Capital efficiency</div>
                    <div className="table-batteries">
                      <div className="hit-unit-two">2</div>
                    </div>
                    <div className="table-batteries">
                      <div className="hit-unit-target">2</div>
                    </div>
                    <div className="table-data">
                      {" "}
                      <Line {...config} />
                    </div>
                  </div>
                  <div className="table-row">
                    <div className="table-data">Loan portfolio</div>
                    <div className="table-batteries">
                      <div className="hit-unit">2</div>
                    </div>
                    <div className="table-batteries">
                      <div className="hit-unit-target">2</div>
                    </div>
                    <div className="table-data">
                      {" "}
                      <Line {...config} />
                    </div>
                  </div>
                  <div className="table-row">
                    <div className="table-data">Integration status</div>
                    <div className="table-batteries">
                      <div className="hit-unit-four">2</div>
                    </div>
                    <div className="table-batteries">
                      <div className="hit-unit-target">2</div>
                    </div>
                    <div className="table-data">
                      {" "}
                      <Line {...config} />
                    </div>
                  </div>
                  <div className="table-row">
                    <div className="table-data">Financial situation</div>
                    <div className="table-batteries">
                      <div className="hit-unit-two">2</div>
                    </div>
                    <div className="table-batteries">
                      <div className="hit-unit-target">2</div>
                    </div>
                    <div className="table-data">
                      {" "}
                      <Line {...config} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            id="tab3"
            className={
              activeTab === "tab3" ? "tabcontent active" : "tabcontent"
            }
          >
            <h2>Tab 3 Content</h2>
            <div className="container">
              <div className="table">
                <div className="table-header">
                  <div className="header__item">
                    <p id="name" className="filter__link" href="#">
                      Performance Indicators
                    </p>
                  </div>
                  <div className="header__item">
                    <p id="wins" className="filter__link filter__link--number">
                      Current
                    </p>
                  </div>
                  <div className="header__item">
                    <p id="draws" className="filter__link filter__link--number">
                      Target
                    </p>
                  </div>
                  <div className="header__item">
                    <p
                      id="losses"
                      className="filter__link filter__link--number"
                    >
                      Trend
                    </p>
                  </div>
                </div>
                <div className="table-content">
                  <div className="table-row">
                    <div className="table-data">Performance</div>
                    <div className="table-batteries">
                      <div className="hit-unit">2</div>
                    </div>
                    <div className="table-batteries">
                      <div className="hit-unit-target">2</div>
                    </div>
                    <div className="table-data">
                      {" "}
                      <Line {...config} />
                    </div>
                  </div>
                  <div className="table-row">
                    <div className="table-data">Capital efficiency</div>
                    <div className="table-batteries">
                      <div className="hit-unit-two">2</div>
                    </div>
                    <div className="table-batteries">
                      <div className="hit-unit-target">2</div>
                    </div>
                    <div className="table-data">
                      {" "}
                      <Line {...config} />
                    </div>
                  </div>
                  <div className="table-row">
                    <div className="table-data">Loan portfolio</div>
                    <div className="table-batteries">
                      <div className="hit-unit">2</div>
                    </div>
                    <div className="table-batteries">
                      <div className="hit-unit-target">2</div>
                    </div>
                    <div className="table-data">
                      {" "}
                      <Line {...config} />
                    </div>
                  </div>
                  <div className="table-row">
                    <div className="table-data">Integration status</div>
                    <div className="table-batteries">
                      <div className="hit-unit-four">2</div>
                    </div>
                    <div className="table-batteries">
                      <div className="hit-unit-target">2</div>
                    </div>
                    <div className="table-data">
                      {" "}
                      <Line {...config} />
                    </div>
                  </div>
                  <div className="table-row">
                    <div className="table-data">Financial situation</div>
                    <div className="table-batteries">
                      <div className="hit-unit-two">2</div>
                    </div>
                    <div className="table-batteries">
                      <div className="hit-unit-target">2</div>
                    </div>
                    <div className="table-data">
                      {" "}
                      <Line {...config} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          <hr className="line" />
          <div className="footer">
            <h4>Forex exchange rate</h4>
            <h4>Current : $1 to KES 151.34</h4>
            <h4>At Deal start: $1 to KES 131.21</h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
