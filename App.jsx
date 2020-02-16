/************************************************************************
File: 	App.jsx
Author: Mehala R

Release 		Modified Date		Name/ID			Remarks
----------------------------------------------------------------------
MM/DD/YYYY		02/08/2020			XXXX			Initial Creation

************************************************************************/

import React from 'react';
import ParentTable from './components/ParentTable.jsx';

    class App extends React.Component {
      render() {
        return (
          <div>
			<ParentTable />
		  </div>
        );
      }
    }

    export default App;