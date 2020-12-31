import React from 'react';
import {CircularProgress,Typography} from '@material-ui/core';

export default function SearchResultStatus({
  isSearching,
  hasResults,
  hasMoreResults,
}) {
  return (
    <React.Fragment>
      {isSearching && <CircularProgress color="primary" size={20} />}

      {!isSearching && !hasResults && (
        <Typography variant="caption" align="center" gutterBottom>
          <i>No results found</i>
        </Typography>
      )}

      {!isSearching && !hasMoreResults && (
        <Typography variant="caption" align="center" gutterBottom>
          <i>No more results found</i>
        </Typography>
      )}
    </React.Fragment>
  );
}
