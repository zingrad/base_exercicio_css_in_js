import { JobLink, JobList } from './styles'

type Props = {
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

const Vaga = (props: Props) => (
  <JobList>
  <h3>{props.titulo}</h3>
  <ul>
    <li>Localizacao: {props.localizacao}</li>
    <li>Senioridade: {props.nivel}</li>
    <li>Tipo de contratacao: {props.modalidade}</li>
    <li>
      Salário: {props.salarioMin} - {props.salarioMax}
    </li>
    <li>Requisitos: {props.requisitos.join(', ')}</li>
  </ul>
  <JobLink href='#'>
    Ver detalhes e candidatar-se
    </JobLink>
  </JobList>
)

export default Vaga
