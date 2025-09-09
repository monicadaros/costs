import styles from './ProjectForm.module.css';
import Input from '../form/Entrada';


function ProjectForm() {
  return (
    <form className={styles.form}>
       <Input 
            type="text" 
            text="Nome do Projeto" 
            name="name" 
            placeholder="Insira o nome do Projeto"
        />
        <div>
            <input type="number" placeholder='Orçamento total do projeto'/>
        </div>
        <div>
            <select namme="category_id">
                <option value="">Selecione a categoria
                </option>
            </select>
        </div>
        <div>
            <input type="submit" value="Criar Projeto"/>
        </div>
    </form>
  )
}

export default ProjectForm;