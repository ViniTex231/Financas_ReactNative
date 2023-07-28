import { StyleSheet, Text, View, FlatList} from 'react-native';

import Header from '../../components/Header'
import Balance from '../../components/Balance'
import Movements from '../../components/Movements';
import Actions from '../../components/Actions';

const list = [
  {
    id: 1,
    label: 'Boleto Conta de Luz',
    value: '300,90',
    date: '28/07/2023',
    type: 0,
  },
  {
    id: 2,
    label: 'Pix Beck',
    value: '152,70',
    date: '27/07/2023',
    type: 1,
  },
  {
    id: 3,
    label: 'Salário',
    value: '1231,00',
    date: '27/07/2023',
    type: 1,
  },
]

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Vinícius"/>

      <Balance saldo="9.250,90" gastos="527,00"/>

      <Actions/>

      <Text style={styles.title}>Últimas movimentações</Text>

      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={ (item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={ ({ item }) => <Movements data={item} /> }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  title:{
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14
  },
  list:{
    marginStart: 14,
    marginEnd: 14,
  }
});
