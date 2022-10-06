import { Box } from '@mui/material'
import type { NextPage } from 'next'
import { Professor } from '../src/@types/professor';
import Cabecalho from '../src/components/Cabecalho/Cabecalho'
import Lista from '../src/components/Lista/Lista'

// sempre que for criar um componente a inicial do nome precisa ser Maiúscula
// a criação de componentes permite a organização e reaproveitamento de código
/*function Botao(props) {
  return <a href="#">{props.titulo}</a>;
}
// dessa forma é possivel criar o mesmo componente 
// com o titulo diferente, por exemplo:
    <Botao titulo="Click" /><br />
    <Botao titulo="Inscreva-se" /><br />
*/

const Home: NextPage = () => {
  const professores: Professor[] = [
    {
      id: 1,
      nome: 'Professor 1',
      descricao: 'Descrição do professor 1',
      valor_hora: 100,
      foto: 'https://github.com/eduardosoaresdev.png'
    },
    {
      id: 2,
      nome: 'Professor 2',
      descricao: 'Descrição do professor 2',
      valor_hora: 200,
      foto: 'https://github.com/eduardosoaresdev.png'
    },
    {
      id: 3,
      nome: 'Professor 3',
      descricao: 'Descrição do professor 3',
      valor_hora: 300,
      foto: 'https://github.com/eduardosoaresdev.png'
    },
    {
      id: 4,
      nome: 'Professor 4',
      descricao: 'Descrição do professor 4',
      valor_hora: 400,
      foto: 'https://github.com/eduardosoaresdev.png'
    },
  ]

  return (
    <Box sx={{ backgroundColor: 'secondary.main' }}>
      <Lista professores={professores}></Lista>
    </Box>
  )
}

export default Home
