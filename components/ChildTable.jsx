/************************************************************************
File: 	ChildTable.jsx
Author: Mehala R

Release 		Modified Date		Name/ID			Remarks
----------------------------------------------------------------------
MM/DD/YYYY		02/08/2020			XXXX			Initial Creation

************************************************************************/

import React from 'react';
import TableRows from './TableRows.jsx';
import styles from '../table-style.module.css';

    class ChildTable extends React.Component {
		
		constructor(props){
			super(props);	
		}
		
		populateHeader(headerRow) {	
			return (
				<thead>
				<tr>
					<th></th>
					{Object.keys(headerRow).map((label) => (
						<th>
							{label}
						</th>
					))}
					<th></th>
				</tr>
				</thead>
			);			
		}
		
		render() {
			
			let kids = this.props.kids;
			
			let cssStyle = this.props.expand? styles.expandStyle : styles.collapseStyle;
						
			return (
				Object.keys(kids).map((label,index) => (	
					<tr className={cssStyle}>
						<td colSpan='100%'>
							<table>
								<caption>{label}</caption>
								
								{this.populateHeader(kids[label].records[0].data)}
						
								{kids[label].records.map(record => 
									<TableRows rowData = {record} />														
								)}		
							</table>
						</td>
					</tr>	
				))					
			);			
		}
    }

    export default ChildTable;