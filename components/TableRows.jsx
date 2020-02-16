/************************************************************************
File: 	TableRows.jsx
Author: Mehala R

Release 		Modified Date		Name/ID			Remarks
----------------------------------------------------------------------
MM/DD/YYYY		02/08/2020			XXXX			Initial Creation

************************************************************************/

import React from 'react';
import ChildTable from './ChildTable.jsx';
import styles from '../table-style.module.css';

    class TableRows extends React.Component {
		
		constructor(props){
			super(props);
			this.state = {
				isExpanded: false
			}
			
			this.toggle = this.toggle.bind(this);
		}
		
		toggle() {
			this.setState(state => ({
				isExpanded: !state.isExpanded
			}));
			
		}
		
		createExpandCollapseIcon() {
			return (
				<button onClick = {this.toggle}>
					{this.state.isExpanded? '-' : '+'}
				</button>
			)
		}
					
		render() {
			
			let rowData = this.props.rowData;
			
			return (
				<tbody>
					<tr>
						<td>
							{(rowData.kids && Object.keys(rowData.kids).length >0) ?  this.createExpandCollapseIcon() : null}
						</td>
						{Object.keys(rowData.data).map((label, index) => (
						<td>
							{rowData.data[label]}
						</td>
						))}
						<td>
							<button>Remove</button>
						</td>
					</tr>
					{(rowData.kids && Object.keys(rowData.kids).length >0) ? <ChildTable kids={rowData.kids} expand={this.state.isExpanded} /> : null}
				</tbody>
			);			
		}
    }

    export default TableRows;