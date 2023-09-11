import React from 'react';
import { StyleSheet, ScrollView, Text } from 'react-native';
import { DataTable } from 'react-native-paper';
import { DiamondData } from '../data/DiamondData';
// import { Item } from 'react-native-paper/lib/typescript/components/Drawer/Drawer';

const TableExample = () => {
return (
	<DataTable style={styles.container}>
		<DataTable.Header  style={styles.tableHeader}>
			<DataTable.Title>Packet No.</DataTable.Title>
			<DataTable.Title>Shape</DataTable.Title>
			<DataTable.Title>Carat</DataTable.Title>
		</DataTable.Header>

		{DiamondData.map(item => (
			<DataTable.Row key={item.id} style={styles.tableHeader}>
				<DataTable.Cell>{item.Packet}</DataTable.Cell>
				<DataTable.Cell>{item.shape}</DataTable.Cell>
				<DataTable.Cell>{item.carat}</DataTable.Cell>
			</DataTable.Row>
		))}
	</DataTable>
);
};

export default TableExample;

const styles = StyleSheet.create({
	container: {
		padding: 10,
	},
	tableHeader: {
		// backgroundColor: '#DCDCDC',
		backgroundColor: '#fff',
	},
});
