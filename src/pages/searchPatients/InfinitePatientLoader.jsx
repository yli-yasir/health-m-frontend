import React, { useState } from "react";
import BottomScrollWaypoint from "../../components/misc/BottomScrollWaypoint";
import Loader from "../../components/loaders/Loader";
import { Typography } from "@material-ui/core";

export default function InfinitePatientLoader({ loadMore, resultsPerPage }) {
  const [currentPage, setCurrentPage] = useState(1);

  const isActive = () => currentPage > 1;
  return (
    <Loader
      deps={[currentPage]}
      load={async () => {
        if (isActive()) {
          const foundResults = await loadMore(currentPage);
          return {
            results:foundResults,
            hasMoreResults: foundResults.length >= resultsPerPage,
          };
        }
        return { results: [], hasMoreResults: true };
      }}
      render={(data) => (
        <React.Fragment>
          <Typography variant="caption">
            {!isActive() || data.hasMoreResults
              ? "Scroll to bottom for more results"
              : "No more results"}
          </Typography>
          {data.hasMoreResults && (
            <BottomScrollWaypoint
              onEnter={() => {
                console.log("entered way point");
                setCurrentPage(currentPage + 1);
              }}
            />
          )}
        </React.Fragment>
      )}
    />
  );
}
