/* rfce */
import React from "react";
import "./SearchPage.css";
import { useStateValue } from "./StateProvider";
import useGoogleSearch from "./useGoogleSearch";
import Response from "./response";
import { Link } from "react-router-dom";
import Search from "./Search";
import {
  SearchOutlined,
  Description,
  Image,
  LocalOffer,
  Room,
  MoreVert,
} from "@material-ui/icons";

function SearchPage() {
  {
    /* What Ever we Search It will Come in this below Search { term } Trasferring the keyword or term to the next Page*/
  }
  const [{ term }, dispatch] = useStateValue();
  /* When Google Search took a term the term us pulling from the data layer */

  //This is our LIVE API CALL
  const { data } = useGoogleSearch(term);

  //MOKE API: This is our local API i.e response.js To solve the problem of 100 quries per day from google ~
  //const data = Response;
  /*
    GET API KEY FROM => https://developers.google.com/custom-search/v1/using_rest
    To use Google Search API also go to use withGoogle Search Engines visit -> https://cse.google.com/cse/create/ -> www.google.com and Select Google Search Engine And Crete it -> Edit Search Engine and then Setup -> ON Search the entire web and Copy Search engine ID i.e
CONTEXT_KEY
    */
  console.log(data);
  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <Link to="/">
          <img
            className="searchPage__logo"
            src="https://techstory.in/wp-content/uploads/2021/03/ot-contrib-google.png"
            alt="LOGO"
          />
        </Link>

        <div className="searchPage__headerBody">
          <Search hideButtons />
          <div className="searchPage__options">
            <div className="searchPage__optionsLeft">
              <div className="searchPage__option">
                <SearchOutlined />
                <Link to="/all">All</Link>
              </div>
              <div className="searchPage__option">
                <Description />
                <Link to="/all">News</Link>
              </div>
              <div className="searchPage__option">
                <Image />
                <Link to="/all">Images</Link>
              </div>
              <div className="searchPage__option">
                <LocalOffer />
                <Link to="/all">shopping</Link>
              </div>
              <div className="searchPage__option">
                <Room />
                <Link to="/all">maps</Link>
              </div>
              <div className="searchPage__option">
                <MoreVert />
                <Link to="/all">more</Link>
              </div>
            </div>

            <div className="searchPage__optionsRight">
              <div className="searchPage__option">
                <Link to="/settings">Setting</Link>
              </div>
              <div className="searchPage__option">
                <Link to="/tools">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Whenever a term comes do the following using {term && ()}*/}
      {term && (
        <div className="searchPage__results">
          <p className="searchPage__resultCount">
            {/* About 300000 results (0.3 seconds for Tesla) */}
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime} seconds) for {term})
          </p>
          {data?.items.map((item) => (
            <div className="searchPage__result">
              <a href={item.link}>
                {item.pagemap?.cse_image?.length > 0 &&
                  item.pagemap?.cse_image[0]?.src && (
                    <img
                      className="searchPage__resultImage"
                      src={
                        item.pagemap?.cse_image?.length > 0 &&
                        item.pagemap?.cse_image[0]?.src
                      }
                      alt="ampimage"
                    />
                  )}
                {item.displayLink} ▽
              </a>
              <a className="searchPage__resultTitle" href={item.link}>
                <h2>{item.title}</h2>
              </a>
              <p className="searchPage__resultSnippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
    /* rfce */
  );
}

export default SearchPage;
