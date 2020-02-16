/************************************************************************
File: 	ParentTable.jsx
Author: Mehala R

Release 		Modified Date		Name/ID			Remarks
----------------------------------------------------------------------
MM/DD/YYYY		02/08/2020			XXXX			Initial Creation

************************************************************************/

import React from 'react';
import TableRows from './TableRows.jsx';
import mockData from '../mock-data.json';
import styles from '../table-style.module.css';

    class ParentTable extends React.Component {
		
		constructor(props){
			super(props);
			this.state = {
				data: []
			};
		}
		
		componentDidMount() {
			this.setState({data: mockData});
		}
		
		populateHeader(headerRow) {
			
			return (
				<thead><tr>
					<th></th>
					{Object.keys(headerRow).map((label) => (
						<th>
							{label}
						</th>
					))}
					<th></th>
				</tr></thead>
			
			);			
		}
		
		render() {
			if (this.state.data && this.state.data.length > 0) {
				return (
					<table>
						{this.populateHeader(this.state.data[0].data)}
						
						{this.state.data.map(rowData => 
							<TableRows rowData={rowData}/>
						)}
					</table>
				);
			}
			return null;
		}
    }

    export default ParentTable;