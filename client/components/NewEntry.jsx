import React from 'react';
import { Link } from 'react-router';

NewEntry = () => {
  render() {
    return(
      <div>
        THanks for registering!
        <button>
          <Link to="/">
            New Entry
          </Link>
        </button>
      </div>
    )
  }
}

export defaul NewEntry;
