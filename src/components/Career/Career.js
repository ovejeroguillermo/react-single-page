import React, { useState, useEffect } from "react";
import "./career.css";
import DataInfo from "./DataInfo";
import Pagination from "../Pagination/Pagination.js";
import Fade from "react-reveal/Fade";

const Career = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";

  const [data, setData] = useState([]);

  //for pagination

  const PER_PAGE = 7;
  const [currentPage, setCurrentPage] = useState(1);
  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };

  const offset = currentPage * PER_PAGE;
  const currentPageData = data.slice(offset, offset + PER_PAGE);

  const pageCount = Math.ceil(data.length / PER_PAGE);

  const loadPostData = () => {
    fetch(url, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          setData(result);
          console.log(result);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    loadPostData();
  }, []);

  return (
    <div className="container career" id="career">
      <div className="section_title">
        <h5>Career</h5>
        <span className="line"></span>
      </div>

      <div className="row">
        {data &&
          currentPageData.map((item, index) => (
            <Fade left>
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <DataInfo key={index} {...item} />

                {/* <DataInfo title={item.title} body={item.body}/> */}
              </div>
            </Fade>
          ))}
      </div>
      <Fade right>
        <div className="pagination-details">
          <Pagination pageCount={pageCount} handlePageClick={handlePageClick} />
        </div>
      </Fade>
    </div>
  );
};

export default Career;
